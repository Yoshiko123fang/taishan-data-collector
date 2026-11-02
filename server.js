// ============================================================
//  数据回收网页端 服务端
//  - 采集端：POST /api/submit （完全公开）
//  - 汇总端：密码保护（cookie），支持表格 / 批量zip / Excel / 统计图
//  存储后端可切换：local（开发/局域网）或 supabase（公网免费部署）
// ============================================================
const express = require('express');
const multer = require('multer');
const exceljs = require('exceljs');
const crypto = require('crypto');
const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');
const https = require('https');
const http = require('http');

// ---- 极简 .env 载入（免依赖） ----
try {
  const txt = fs.readFileSync(path.join(__dirname, '.env'), 'utf8');
  for (const line of txt.split('\n')) {
    const m = line.match(/^\s*([\w.-]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
} catch (e) { /* 无 .env 则用环境变量/默认值 */ }

const CONFIG = require('./config.js');
const MODE = process.env.MODE || 'local';
const PORT = process.env.PORT || 3000;
const PASSWORD = process.env.PASSWORD || 'rgzn2026';
const AUTH_SECRET = process.env.AUTH_SECRET || 'taishan-rgzn-2026-secret';
const SUPABASE_URL = (process.env.SUPABASE_URL || '').replace(/\/$/, '');
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY || '';

const DATA_DIR = path.join(__dirname, 'data');
const UPLOAD_DIR = path.join(__dirname, 'uploads');
if (MODE === 'local') {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
  if (!fs.existsSync(path.join(DATA_DIR, 'submissions.json')))
    fs.writeFileSync(path.join(DATA_DIR, 'submissions.json'), '[]');
}
const DATA_FILE = path.join(DATA_DIR, 'submissions.json');

// ---------- 鉴权 ----------
function token() { return crypto.createHmac('sha256', AUTH_SECRET).update(PASSWORD).digest('hex'); }
function parseCookies(req) {
  const h = req.headers.cookie; const o = {};
  if (!h) return o;
  h.split(';').forEach(p => { const i = p.indexOf('='); if (i > 0) o[p.slice(0, i).trim()] = decodeURIComponent(p.slice(i + 1).trim()); });
  return o;
}
function authed(req) { return parseCookies(req).sess === token(); }
function requireAuth(req, res, next) { if (authed(req)) return next(); return res.status(401).json({ error: 'unauthorized' }); }

// ---------- 存储抽象 ----------
// 存储 key 仅允许 ASCII（Supabase Storage 拒绝非 ASCII 字符），原始文件名仍完整存于 DB 的 files[].name
function safeName(n) { return (n || 'file').replace(/[^\w.\-]/g, '_').slice(0, 120); }

async function saveFile(id, original, buffer) {
  const stored = `${id}__${crypto.randomBytes(3).toString('hex')}__${safeName(original)}`;
  if (MODE === 'local') {
    fs.writeFileSync(path.join(UPLOAD_DIR, stored), buffer);
  } else {
    await supaStorage('POST', 'object/uploads/' + encodeURIComponent(stored), buffer);
  }
  return { name: original, stored };
}
async function readFile(stored) {
  if (MODE === 'local') return fs.readFileSync(path.join(UPLOAD_DIR, stored));
  return await supaStorage('GET', 'object/uploads/' + encodeURIComponent(stored));
}
async function listStored() {
  if (MODE === 'local') return fs.readdirSync(UPLOAD_DIR);
  const arr = await supaStorage('POST', 'object/list/uploads', { prefix: '', limit: 1000, offset: 0 });
  return arr.map(o => o.name);
}

// ---------- Supabase REST 封装（无需 SDK） ----------
function supaReq(method, base, urlPath, headers, body) {
  return new Promise((resolve, reject) => {
    const url = new URL(SUPABASE_URL + '/' + base + '/' + urlPath);
    const data = body ? (Buffer.isBuffer(body) ? body : JSON.stringify(body)) : null;
    const h = Object.assign({ 'Authorization': 'Bearer ' + SUPABASE_KEY, 'apikey': SUPABASE_KEY }, headers || {});
    if (data && !h['Content-Type']) h['Content-Type'] = 'application/json';
    const req = (url.protocol === 'https:' ? https : http).request(url, { method, headers: h }, res => {
      const ch = []; res.on('data', c => ch.push(c)); res.on('end', () => resolve({ status: res.statusCode, body: Buffer.concat(ch), headers: res.headers }));
    });
    req.on('error', reject);
    if (data) req.write(data);
    req.end();
  });
}
async function supaStorage(method, path, body) {
  const r = await supaReq(method, 'storage/v1', path, method === 'GET' ? {} : { 'Content-Type': 'application/octet-stream' }, body);
  if (r.status >= 400) throw new Error('storage ' + method + ' failed ' + r.status + ' ' + r.body.toString());
  if (method === 'GET') return r.body;
  if (method === 'POST' && path.includes('list')) return JSON.parse(r.body.toString());
  return r.body.toString();
}
async function dbAll() {
  if (MODE === 'local') return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  const r = await supaReq('GET', 'rest/v1', 'submissions?select=*', {});
  if (r.status >= 400) throw new Error('db select failed ' + r.status);
  return JSON.parse(r.body.toString());
}
async function dbInsert(row) {
  if (MODE === 'local') {
    const a = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    a.push(row); fs.writeFileSync(DATA_FILE, JSON.stringify(a, null, 2));
    return;
  }
  const r = await supaReq('POST', 'rest/v1', 'submissions', { 'Prefer': 'return=minimal' }, row);
  if (r.status >= 400) throw new Error('db insert failed ' + r.status + ' ' + r.body.toString());
}

// 删除单条 / 清空（含关联文件）
async function deleteFilesFor(id) {
  try {
    if (MODE === 'local') {
      const names = fs.readdirSync(UPLOAD_DIR).filter(n => n.startsWith(id + '__'));
      for (const n of names) { try { fs.unlinkSync(path.join(UPLOAD_DIR, n)); } catch (e) {} }
    } else {
      const arr = await supaStorage('POST', 'object/list/uploads', { prefix: '', limit: 1000, offset: 0 });
      const toDel = arr.filter(o => o.name.startsWith(id + '__')).map(o => 'uploads/' + o.name);
      if (toDel.length) await supaStorage('POST', 'object/delete', { prefixes: toDel });
    }
  } catch (e) { /* 文件清理失败不阻断主流程 */ }
}
async function dbDelete(id) {
  if (MODE === 'local') {
    const a = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    const left = a.filter(r => r.id !== id);
    fs.writeFileSync(DATA_FILE, JSON.stringify(left, null, 2));
    return a.length - left.length;
  }
  const r = await supaReq('DELETE', 'rest/v1', 'submissions?id=eq.' + encodeURIComponent(id), {});
  if (r.status >= 400) throw new Error('db delete failed ' + r.status);
  return 1;
}
async function dbDeleteAll() {
  if (MODE === 'local') { fs.writeFileSync(DATA_FILE, '[]'); return; }
  const rows = await dbAll();
  for (const r of rows) await dbDelete(r.id);
}

// ---------- 统计 ----------
function computeStats(rows) {
  const out = { single: [], multi: [], text: [], tasks: [] };
  CONFIG.questionnaire.forEach(q => {
    if (q.type === 'single' || q.type === 'multi') {
      const counts = {}; (q.options || []).forEach(o => counts[o] = 0);
      rows.forEach(r => {
        const a = r.questionnaire ? r.questionnaire[q.id] : undefined;
        if (!a) return;
        (Array.isArray(a) ? a : [a]).forEach(v => { if (counts[v] !== undefined) counts[v]++; });
      });
      out[q.type].push({ id: q.id, question: q.question, options: Object.entries(counts).map(([opt, count]) => ({ opt, count })) });
    } else if (q.type === 'text') {
      const answers = rows.map(r => r.questionnaire ? r.questionnaire[q.id] : undefined).filter(Boolean);
      out.text.push({ id: q.id, question: q.question, answers });
    }
  });
  CONFIG.tasks.forEach(t => {
    if (t.pending) return;
    let yes = 0, no = 0; const noReasons = [];
    rows.forEach(r => {
      const fb = r.tasks ? r.tasks[t.id] : undefined;
      if (!fb) return;
      if (fb.achieved === 'yes') yes++;
      else if (fb.achieved === 'no') { no++; if (fb.reason) noReasons.push(fb.reason); }
    });
    out.tasks.push({ id: t.id, title: t.title, yes, no, noReasons });
  });
  return out;
}

// ---------- Excel 导出 ----------
async function buildExcel(rows) {
  const wb = new exceljs.Workbook();
  const ws = wb.addWorksheet('汇总');
  const headers = ['提交ID', '提交时间'];
  CONFIG.basicInfoFields.forEach(f => headers.push(f.label));
  CONFIG.tasks.forEach(t => { if (!t.pending) { headers.push(t.title + '·能否完成'); headers.push(t.title + '·未达成原因'); } });
  CONFIG.questionnaire.forEach(q => headers.push(q.question));
  headers.push('提交文档');
  ws.addRow(headers);
  ws.getRow(1).font = { bold: true };
  ws.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF028090' } };
  ws.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  rows.forEach(r => {
    const row = [r.id, r.created_at];
    CONFIG.basicInfoFields.forEach(f => row.push((r.basic_info && r.basic_info[f.key]) ?? ''));
    CONFIG.tasks.forEach(t => {
      if (t.pending) return;
      const fb = r.tasks ? r.tasks[t.id] : undefined;
      row.push(fb && fb.achieved === 'yes' ? '能完成' : (fb && fb.achieved === 'no' ? '未能完成' : ''));
      row.push(fb && fb.reason ? fb.reason : '');
    });
    CONFIG.questionnaire.forEach(q => { const a = r.questionnaire ? r.questionnaire[q.id] : undefined; row.push(Array.isArray(a) ? a.join('、') : (a ?? '')); });
    row.push((r.files || []).map(f => f.name).join('、'));
    ws.addRow(row);
  });
  ws.columns.forEach(c => { c.width = 18; });
  const buf = await wb.xlsx.writeBuffer();
  return buf;
}

// ---------- 纯 Node 生成 ZIP（STORE，无外部依赖，跨平台，支持 UTF-8 文件名） ----------
const CRC_TABLE = (() => {
  const t = []; for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1); t[n] = c >>> 0; }
  return t;
})();
function crc32(buf) { let c = 0xFFFFFFFF; for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xFF] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }
function buildZip(files) {
  // files: [{ name, data:Buffer }]
  const enc = s => Buffer.from(s, 'utf-8');
  const chunks = []; const central = []; let offset = 0;
  for (const f of files) {
    const nameBuf = enc(f.name);
    const data = f.data;
    const crc = crc32(data);
    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0); local.writeUInt16LE(20, 4); local.writeUInt16LE(0x0800, 6);
    local.writeUInt16LE(0, 8); local.writeUInt16LE(0, 10); local.writeUInt16LE(0, 12);
    local.writeUInt32LE(crc, 14); local.writeUInt32LE(data.length, 18); local.writeUInt32LE(data.length, 22);
    local.writeUInt16LE(nameBuf.length, 26); local.writeUInt16LE(0, 28);
    chunks.push(local, nameBuf, data);
    const cd = Buffer.alloc(46);
    cd.writeUInt32LE(0x02014b50, 0); cd.writeUInt16LE(20, 4); cd.writeUInt16LE(20, 6); cd.writeUInt16LE(0x0800, 8);
    cd.writeUInt16LE(0, 10); cd.writeUInt16LE(0, 12); cd.writeUInt16LE(0, 14);
    cd.writeUInt32LE(crc, 16); cd.writeUInt32LE(data.length, 20); cd.writeUInt32LE(data.length, 24);
    cd.writeUInt16LE(nameBuf.length, 28); cd.writeUInt16LE(0, 30); cd.writeUInt16LE(0, 32);
    cd.writeUInt16LE(0, 34); cd.writeUInt16LE(0, 36); cd.writeUInt32LE(0, 38); cd.writeUInt32LE(offset, 42);
    central.push(cd, nameBuf);
    offset += local.length + nameBuf.length + data.length;
  }
  const centralBuf = Buffer.concat(central);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0); end.writeUInt16LE(0, 4); end.writeUInt16LE(0, 6);
  end.writeUInt16LE(files.length, 8); end.writeUInt16LE(files.length, 10);
  end.writeUInt32LE(centralBuf.length, 12); end.writeUInt32LE(offset, 16); end.writeUInt16LE(0, 20);
  return Buffer.concat([...chunks, centralBuf, end]);
}

// ---------- 应用 ----------
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: (CONFIG.taskDoc.maxSizeMB || 20) * 1024 * 1024, files: CONFIG.taskDoc.maxFiles || 10 } });

// 配置（不含密码）
app.get('/api/config', (req, res) => res.json({
  basicInfoFields: CONFIG.basicInfoFields,
  tasks: CONFIG.tasks,
  taskDoc: CONFIG.taskDoc,
  questionnaire: CONFIG.questionnaire,
}));

// 登录
app.post('/api/auth/login', (req, res) => {
  const pwd = (req.body && req.body.password) || '';
  if (pwd !== PASSWORD) return res.status(401).json({ error: '密码错误' });
  res.cookie('sess', token(), { httpOnly: true, sameSite: 'lax', maxAge: 86400000 });
  res.json({ ok: true });
});

app.use((err, req, res, next) => {
  if (err && err.code === 'LIMIT_FILE_SIZE') return res.status(413).json({ error: '文件过大' });
  if (err) return res.status(400).json({ error: err.message });
  next();
});

// 提交（公开）
app.post('/api/submit', upload.any(), async (req, res) => {
  try {
    const basic_info = JSON.parse(req.body.basic_info || '{}');
    const questionnaire = JSON.parse(req.body.questionnaire || '{}');
    const tasks = JSON.parse(req.body.tasks || '{}');
    // 必填校验（基本资料）
    for (const f of CONFIG.basicInfoFields) {
      if (f.required && !(basic_info[f.key] !== undefined && String(basic_info[f.key]).trim() !== ''))
        return res.status(400).json({ error: `请填写${f.label}` });
    }
    // 实操任务反馈校验（仅 active 任务）
    for (const t of CONFIG.tasks) {
      if (t.pending) continue;
      const fb = tasks[t.id];
      if (!fb || (fb.achieved !== 'yes' && fb.achieved !== 'no'))
        return res.status(400).json({ error: `请完成反馈：${t.title}` });
      if (fb.achieved === 'no' && !(fb.reason || '').trim())
        return res.status(400).json({ error: `请填写未能完成的原因：${t.title}` });
    }
    const id = crypto.randomUUID();
    const files = [];
    for (const f of (req.files || [])) {
      // multer/busboy 把上传文件名按 latin1 解码，这里还原为原始 UTF-8
      const original = Buffer.from(f.originalname, 'latin1').toString('utf-8');
      files.push(await saveFile(id, original, f.buffer));
    }
    const row = { id, created_at: new Date().toISOString(), basic_info, tasks, questionnaire, files };
    await dbInsert(row);
    res.json({ ok: true, id });
  } catch (e) { res.status(400).json({ error: e.message }); }
});

// 汇总（保护）
app.get('/api/summary', requireAuth, async (req, res) => {
  try { res.json(await dbAll()); } catch (e) { res.status(500).json({ error: e.message }); }
});
app.get('/api/stats', requireAuth, async (req, res) => {
  try { res.json(computeStats(await dbAll())); } catch (e) { res.status(500).json({ error: e.message }); }
});

// 单文件下载（保护）
app.get('/api/file', requireAuth, async (req, res) => {
  try {
    const stored = req.query.stored; if (!stored) return res.status(400).send('missing');
    const buf = await readFile(stored);
    const name = req.query.name || stored.split('__').slice(1).join('__') || 'file';
    res.setHeader('Content-Disposition', `attachment; filename="${encodeURIComponent(name)}"`);
    res.setHeader('Content-Type', 'application/octet-stream');
    res.send(buf);
  } catch (e) { res.status(404).send('not found'); }
});

// 批量 zip（保护）—— 从数据库映射回原始文件名（保留中文）
app.get('/api/files/zip', requireAuth, async (req, res) => {
  try {
    const rows = await dbAll();
    const seen = new Set(); const entries = [];
    for (const r of rows) {
      for (const f of (r.files || [])) {
        if (!f.stored || seen.has(f.stored)) continue;
        seen.add(f.stored);
        entries.push({ stored: f.stored, name: f.name || f.stored.split('__').slice(1).join('__') || 'file' });
      }
    }
    const files = [];
    for (const e of entries) files.push({ name: e.name, data: await readFile(e.stored) });
    const zipBuf = buildZip(files);
    const zname = encodeURIComponent(`全部文档_${Date.now()}.zip`);
    res.setHeader('Content-Disposition', `attachment; filename="all_docs.zip"; filename*=UTF-8''${zname}`);
    res.setHeader('Content-Type', 'application/zip');
    res.send(zipBuf);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Excel（保护）
app.get('/api/export/excel', requireAuth, async (req, res) => {
  try {
    const buf = await buildExcel(await dbAll());
    const xname = encodeURIComponent(`汇总_${Date.now()}.xlsx`);
    res.setHeader('Content-Disposition', `attachment; filename="summary.xlsx"; filename*=UTF-8''${xname}`);
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.send(Buffer.from(buf));
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// 删除单条（保护）
app.delete('/api/delete', requireAuth, async (req, res) => {
  try {
    const id = req.query.id; if (!id) return res.status(400).json({ error: '缺少 id' });
    await deleteFilesFor(id);
    const n = await dbDelete(id);
    res.json({ ok: true, deleted: n });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// 清空全部（保护）
app.delete('/api/delete/all', requireAuth, async (req, res) => {
  try {
    const rows = await dbAll();
    for (const r of rows) await deleteFilesFor(r.id);
    await dbDeleteAll();
    res.json({ ok: true, deleted: rows.length });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.listen(PORT, () => console.log(`数据回收网页端已启动  MODE=${MODE}  PORT=${PORT}`));
