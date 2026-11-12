# 数据回收网页端（纯静态版 · CloudBase 后端）

一个**无需服务器**的网页：采集端 + 汇总端，数据直接存到腾讯云开发 CloudBase（文档集合 + 对象存储），**国内访问稳定**，适合培训现场使用。
可以丢到任意静态托管（GitHub Pages / 国内对象存储 OSS+CDN / 宝塔 / Nginx / 学校内网服务器 等）。

> 配套服务端版（Node + 真密码鉴权，安全性更高）见同级目录 `数据回收网页端/`。

---

## 一、使用前必做（一次性，详见 `cloudbase-setup.md`）

1. 开通腾讯云开发 CloudBase（https://console.cloud.tencent.com/tcb），新建环境，复制**环境 ID**。
2. 控制台三项必配：开启「匿名登录」；「Web 安全域名」加 `yoshiko123fang.github.io`；数据库新建集合 `submissions_v2` 并设「所有用户可读写」；存储设「所有用户可读写」。
3. 打开 `app-config.js`，把 `CLOUDBASE_ENV` 改成你的环境 ID；`SUMMARY_PW`（汇总密码，默认 `rgzn2026`）可按需改。

## 二、文件清单

```
index.html         采集端（公开，发参训老师）
summary.html       汇总端（密码 rgzn2026）
app-config.js      配置（CloudBase 环境ID + 汇总密码 + 业务字段）
task_images/       实操任务配图（img1~6.png）
vendor/            cloudbase.full.js（CloudBase SDK，本地化无需联网）、xlsx.full.min.js（Excel）、jszip.min.js（ZIP）
cloudbase-setup.md 开通与配置详细步骤
```

## 三、部署（任选其一，无需信用卡）

### 方案 A：GitHub Pages（免费、最省事）
1. 把本文件夹内容推到一个 GitHub 仓库的 `training2/` 路径。
2. 仓库 Settings → Pages → Source 选对应分支 → Save。
3. 得到 `https://<用户名>.github.io/<仓库名>/training2/`
   - 采集端：`https://<用户名>.github.io/<仓库名>/training2/`
   - 汇总端：`https://<用户名>.github.io/<仓库名>/training2/summary.html`

### 方案 B：国内静态托管 / 宝塔 / Nginx
把本文件夹整体上传到网站根目录即可，保持相对路径（`app-config.js`、`task_images/`、`vendor/` 同级）。

### 方案 C：本地预览
需起本地静态服务器（如 `python -m http.server`）后访问；浏览器需能访问 CloudBase（国内网络通常可直连）。

## 四、已知取舍

- 静态版由**浏览器直连 CloudBase**，汇总端密码仅为前端门槛（懂技术者可绕过）。数据存在你自己的 CloudBase 环境，未对外泄露。
- CloudBase 集合/存储「所有用户可读写」是公开收集所需；培训场景下可接受，日常可改回更严格权限。
- 补全“实操六/七/八”：编辑 `app-config.js` 里 `tasks` 对应项，把 `pending:true` 去掉并填好字段即可，页面自动适配，采集端地址不变。

## 五、数据在 CloudBase 的位置

- 数据库集合：`submissions_v2`（basic_info / tasks / questionnaire / files 均为对象/数组）
- 存储：`uploads/` 路径（文档按 `提交id__随机__文件名` 存放，中文原名保留在 files[].name）
