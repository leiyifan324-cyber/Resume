# 在线简历 / 个人主页

与 [lhy621.pages.dev](https://lhy621.pages.dev/) 同类型的 React 单页简历站：**改 JSON 即可更新全站**，部署到 Cloudflare Pages 后获得 `*.pages.dev` 域名。

## 技术栈

- React 19 + TypeScript + Vite
- Tailwind CSS v4
- Framer Motion（滚动动画）
- Hash 路由（`#/`、`#/projects`，适合静态托管）

## 自定义内容（最重要）

编辑 **`src/data/resume.json`**：

| 字段 | 说明 |
|------|------|
| `profile` | 姓名、标题、自我介绍 |
| `competencies` | 核心能力列表 |
| `techStack` | 技术标签 |
| `projects` | 项目卡片（STAR：情境 / 任务 / 行动 / 成果） |
| `contact` | 联系方式 |

保存后本地 `npm run dev` 刷新即可预览，无需改组件代码。

## 本地运行

需安装 [Node.js LTS](https://nodejs.org/)（含 npm），然后在项目目录执行：

```bash
cd D:\my-resume
npm install
npm run dev
```

浏览器打开终端里显示的地址（一般为 `http://localhost:5173`）。

构建生产版本：

```bash
npm run build
```

产物在 `dist/` 目录。

## 部署到 Cloudflare Pages

1. 将本项目推送到 **GitHub** 仓库。
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**。
3. 选择仓库，构建配置：

   | 配置项 | 值 |
   |--------|-----|
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Production branch | `main` |

4. 部署完成后获得 `https://<你的用户名>.pages.dev`。
5. 之后每次 `git push` 会自动重新构建并上线。

## 项目结构

```
src/
  data/resume.json    ← 改这里
  types/resume.ts     ← 类型定义
  components/         ← 页面区块（一般不用改）
  App.tsx
```

## 隐私提示

公开部署前请检查 `resume.json` 中的电话、微信等是否愿意对外展示。
