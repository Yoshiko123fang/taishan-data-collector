# 腾讯云开发 CloudBase 开通与配置（数据回收网页端后端）

本目录的"数据回收网页端"已改为**浏览器直连腾讯云开发 CloudBase**作为数据存储与文件存储后端（替代原 Supabase），国内访问稳定，适合培训现场使用。

> 前端网页仍托管在 GitHub Pages（静态页国内可开），只把"数据 + 文件"这一层换成 CloudBase。

---

## 一、开通 CloudBase（一次性）

1. 打开 https://console.cloud.tencent.com/tcb → 用微信/QQ 登录腾讯云。
2. 首次使用按提示开通「云开发」服务（需实名认证，免费）。
3. 新建一个**环境**：
   - 计费方式：选「按量计费」（新用户有免费额度，培训场景完全够用；也可选「基础版 1」包年免费档）。
   - 地域：选离你近的，如「上海」或「广州」。
   - 环境名称随意，例如 `taishan-data`。
4. 进入环境后，在 **概览** 页面复制 **环境 ID**（形如 `taishan-data-1a2b3c4d`），后面要填到代码里。

## 二、三处必改的控制台配置（否则前端会报错）

### 1) 开启「匿名登录」
- 环境 → **登录授权** → 找到「匿名登录」→ 开启。
- 说明：网页无需让用户注册，老师打开即匿名写入，依赖此开关。

### 2) 配置「Web 安全域名」
- 环境 → **安全配置** → **Web 安全域名** → 添加：
  ```
  yoshiko123fang.github.io
  ```
  - 只填域名，**不要**带 `https://` 和路径。
  - 作用：允许该域名下的网页调用你的 CloudBase（不加会被拒绝，报 `request forbidden by web security domain`）。

### 3) 建集合 + 放开读写权限
- 环境 → **数据库** → **新建集合**，名称填 `submissions_v2`（与 `app-config.js` 的 `TABLE` 一致）。
- 进入该集合 → **权限设置** → 选择「**所有用户可读写**」（公开收集场景）。
  - 若想更严谨，可切到「自定义安全规则」粘贴：`{ "read": true, "write": true }`
- 存储权限：环境 → **存储** → **权限设置** → 选「**所有用户可读写**」（老师上传的文档需要写权限）。
  - 注：公开写权限有被滥传风险，仅建议用于受控的培训现场；日常可改回「仅创建者可读写」。

## 三、填代码

打开 `app-config.js`，把环境 ID 填进去：
```js
const CLOUDBASE_ENV = '你复制的环境ID';  // ← 改成你的 CloudBase 环境 ID
```
其余（`SUMMARY_PW` 汇总密码、`TABLE` 集合名、业务字段）按需修改。

## 四、部署到 GitHub Pages（沿用原流程）

将本目录整体推到仓库的 `training2/` 路径下（覆盖旧版），等 1 分钟生效即可。
- 采集端：`https://yoshiko123fang.github.io/taishan-data-collector/training2/`
- 汇总端：`https://yoshiko123fang.github.io/taishan-data-collector/training2/summary.html`（密码 `rgzn2026`）

## 五、多培训隔离

每场培训用**独立集合名**即可彼此隔离：
1. CloudBase 控制台新建一个集合（如 `submissions_v3`）；
2. `app-config.js` 把 `const TABLE = 'submissions_v3';` 改成同名；
3. 重新推 GitHub Pages 到新路径（如 `training3/`）。
汇总端密码 `SUMMARY_PW` 也可按场独立修改。

## 六、与原 Supabase 版本的区别（给维护者）

| 项 | 原版（Supabase） | 现版（CloudBase） |
|---|---|---|
| 后端 | supabase.co（国际，国内常不稳） | CloudBase（国内稳） |
| 配置项 | `SUPABASE_URL` / `SUPABASE_ANON` | `CLOUDBASE_ENV` |
| 数据表 | Postgres 表 `submissions_v2` | 文档集合 `submissions_v2` |
| SDK | fetch 直连 REST | `vendor/cloudbase.full.js`（已本地化） |
| 文件 | Supabase Storage `uploads` 桶 | CloudBase 存储 `uploads/` 路径 |

> 旧培训（台山送教）的历史数据仍在原 Supabase 项目里；如需要迁移，可手动从 Supabase 导出 CSV/JSON，再导入 CloudBase 集合，一般无需迁移（旧场已结束）。
