# 数据回收网页端（纯静态版）

一个**无需服务器**的网页：采集端 + 汇总端，数据直接存到你已有的 Supabase（表 + 存储桶）。
可以丢到任意静态托管（GitHub Pages / 国内对象存储 OSS+CDN / 宝塔 / Nginx / 学校内网服务器 / U 盘直开浏览器 等）。

> 配套服务端版（Node + 真密码鉴权，安全性更高）见同级目录 `数据回收网页端/`。

---

## 一、使用前必做（一次性）

1. 打开 Supabase 后台 → **SQL Editor** → 粘贴 `supabase-setup-rls.sql` 全部内容 → **Run**。
   （让浏览器匿名密钥能读写本表与存储桶；表与 `uploads` 桶应已建好。）
2. 打开 `app-config.js`，确认三项：
   - `SUPABASE_URL`：你的项目地址（已填好）
   - `SUPABASE_ANON`：publishable / anon 密钥（已填好；可在 Supabase → API 页面复制）
   - `SUMMARY_PW`：汇总端查看密码（默认 `rgzn2026`，可改）

## 二、文件清单

```
index.html         采集端（公开，发参训老师）
summary.html       汇总端（密码 rgzn2026）
app-config.js      配置（Supabase 地址/密钥/密码 + 业务字段）
task_images/       实操任务配图（img1~6.png）
vendor/            xlsx.full.min.js（Excel）、jszip.min.js（ZIP），本地化无需联网
supabase-setup-rls.sql  上面的策略脚本
```

## 三、部署（任选其一，无需信用卡）

### 方案 A：GitHub Pages（免费、最省事）
1. 把本文件夹内容推到一个 GitHub 仓库。
2. 仓库 Settings → Pages → Source 选 `main` 分支（或 `/docs`）→ Save。
3. 得到 `https://<用户名>.github.io/<仓库名>/`
   - 采集端：`https://<用户名>.github.io/<仓库名>/index.html`
   - 汇总端：`https://<用户名>.github.io/<仓库名>/summary.html`

### 方案 B：国内静态托管 / 宝塔 / Nginx
把本文件夹整体上传到网站根目录即可，保持相对路径（`app-config.js`、`task_images/`、`vendor/` 同级）。
访问 `index.html` 与 `summary.html`。

### 方案 C：本地直接预览
双击 `index.html` 也能用（浏览器需能访问 supabase.co；个别浏览器对本地 file:// 有跨域限制，建议用方案 A/B 或本地起个静态服务器，如 `python -m http.server`）。

## 四、已知取舍

- 静态版由**浏览器直连 Supabase**，只能用匿名密钥，因此汇总端密码仅为前端门槛（懂技术者可绕过）。数据本身存在你自己的 Supabase，未对外泄露。
- 若需“真密码 + 服务端鉴权 + 更强安全”，请用服务端版 `数据回收网页端/`（Node 部署）。
- 补全“实操六/七/八”：编辑 `app-config.js` 里 `tasks` 对应项，把 `pending:true` 去掉并填好字段即可，页面自动适配，采集端地址不变。

## 五、数据在 Supabase 的位置

- 表：`public.submissions`（basic_info / tasks / questionnaire / files 均为 JSON）
- 存储桶：`uploads`（文档按 `提交id__随机__文件名` 存放，中文原名保留在 files[].name）
