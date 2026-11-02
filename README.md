# 数据回收网页端

一个**采集端（公开填写）+ 汇总端（密码查看）**的网页应用，用于台山市人工智能种子教师送教送培活动的数据回收。

- 采集端：三大模块 —— ① 基本资料填写；② 实操任务（图文并茂，每任务含操作步骤、资源链接、成果文档上传、以及"能否实现/做到"反馈按钮，未完成需填原因）；③ 调查问卷。任意联网电脑打开链接即可填。
- 汇总端：密码登录后查看全部提交（表格，含每任务达成情况与未达成原因）、批量下载文档（zip）、导出 Excel、查看问卷统计图、实操达成统计图，并可**逐条删除 / 清空全部**测试数据。

> 采集端与汇总端共用同一地址：采集端为主页 `/`，汇总端为 `/summary.html`。日后补充实操任务 6/7/8 等，只改 `config.js`，**地址不变**。

## 目录结构
```
config.js          # ⭐ 业务配置：基本资料 + 实操任务 + 问卷（你主要改这里）
server.js          # 服务端（Express）
public/index.html  # 采集端页面（三大模块）
public/summary.html# 汇总端页面（统计 + 表格 + 删除）
public/task_images/# 实操任务单中引用的图片（img1~img6.png）
supabase/schema.sql# 公网部署时执行的建表/建桶脚本
```

## 一、本地 / 局域网快速运行（先看效果，零部署）

```bash
npm install
npm start
```
- 采集端：浏览器打开 http://localhost:3000
- 汇总端：http://localhost:3000/summary.html （密码 `rgzn2026`）
- 同一局域网内其他电脑用本机 IP 访问，例如 http://192.168.x.x:3000
- 数据存于 `data/submissions.json`，文档存于 `uploads/`

## 二、公网免费部署（Supabase + 免费 PaaS）

满足：公网任意地点可打开、不付费、数据长期保留。

### 1. 创建 Supabase 免费项目
- 注册 https://supabase.com （免费层即可，无需付费）
- 打开 SQL Editor，执行 `supabase/schema.sql`
- 在 Project Settings → API 记下：Project URL 与 service_role key

### 2. 准备环境变量（部署平台里填）
```
MODE=supabase
PASSWORD=rgzn2026
SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_SERVICE_KEY=eyJ...service_role...
```

### 3. 部署到免费 PaaS（任选其一）
- **Render**：新建 Web Service，连此仓库（或上传文件夹），Build:`npm install`，Start:`npm start`，加上述环境变量。
- **Railway / Fly.io**：同理，监听 `PORT`。
- 部署后获得公网网址，把采集端 / 汇总端链接发给老师即可。

> 免费层注意：部分 PaaS 长时间无人访问会休眠（首次访问稍慢），属正常现象；Supabase 的数据与文档长期保留。

## 三、填入真实内容 / 扩展任务

编辑 `config.js`：
- `basicInfoFields`：基本资料字段（按示例增删，全部必填、无格式校验）。
- `tasks`：实操任务数组。每项含 `id / title / steps（步骤） / images（图片名，对应 public/task_images/） / resources（资源链接） / pending（true=待补充，前端隐藏，不要求反馈）`。
  - 新增任务 6/7/8：在 `tasks` 末尾加一项并设 `pending:false`、补好 steps/images/resources，前端与汇总端（统计、表格、Excel）会**自动出现新任务**，地址不变。
  - 暂时没内容的任务 6/7/8：设 `pending:true`，采集端不会要求填反馈，汇总端也不统计，等日后补充。
- `questionnaire`：问卷题目（`single` 单选 / `multi` 多选 / `text` 填空），由任务单"一、调查问卷"与"三、培训反馈"两部分合并。
改完重启服务即可，前端表单、表格、Excel、统计图会自动适配。

## 接口速览
- `GET  /api/config`            公开：返回表单配置（含 tasks）
- `POST /api/submit`            公开：提交（multipart，字段 basic_info / tasks / questionnaire / files）
- `POST /api/auth/login`        密码登录（设置 cookie）
- `GET  /api/summary`           汇总数据（需登录）
- `GET  /api/stats`            问卷统计 + 实操达成统计（需登录）
- `GET  /api/file?stored=&name=` 单文件下载（需登录）
- `GET  /api/files/zip`         批量打包下载（需登录）
- `GET  /api/export/excel`      导出 Excel（需登录，含每任务达成列）
- `DELETE /api/delete?id=`      删除单条提交及其文档（需登录）
- `DELETE /api/delete/all`      清空全部提交及文档（需登录）
