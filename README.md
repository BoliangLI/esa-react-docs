# ESA Pages · Astro Starlight 文档模板

直接使用 **Astro 7 + Starlight + 官方 Tailwind CSS 4 集成**。仓库沿用 `esa-react-docs` 名称，以保持已有导入地址；内部已改为 Astro 静态文档站。

## 框架负责的能力

文件路由、Markdown/MDX、内容字段校验、自动侧栏、标题目录、上一页/下一页、代码高亮与复制、移动导航、主题切换、国际化基础设施、Pagefind 全文搜索及构建索引，全部由 Starlight 提供。

本项目没有自定义页面组件、搜索实现或路由状态。首页卡片、提示框、标签页、步骤条直接使用 Starlight 内置组件。

## 本地运行

使用 Node.js **22.12+**。

```bash
npm ci
npm run dev
npm run build
npm run preview
```

## ESA 部署

导入本仓库的 `main` 分支，根目录 `/`，Node.js 22。`esa.jsonc` 已配置安装 `npm ci`、构建 `npm run build`、输出 `dist`。纯静态站点，函数入口留空。

配置依据：[ESA Pages 构建与路由](https://help.aliyun.com/zh/edge-security-acceleration/esa/user-guide/build-pages)。远端 ESA 部署需在你的账号中验证，本地构建不代表已部署。

静态文章有独立 HTML，`notFoundStrategy` 为 `404Page`。设置 ESA 构建环境变量 `SITE_URL` 为实际域名，以生成正确 canonical 链接。默认 `https://example.com` 仅是占位值，不影响页面预览。

## 新增和维护内容

- 在 `src/content/docs/` 添加 `.md` 或 `.mdx` 文件，填写 `title` 和 `description`。
- `sidebar.order` 控制自动导航顺序，不需要写路由。
- `astro.config.mjs` 配置标题、语言、社交链接和目录。
- `src/styles/global.css` 仅使用官方 Tailwind 样式入口。
- `src/content/docs/start/writing.mdx` 演示 Tabs、Steps 和代码块。

## 验证

`npm run build` 包含 Astro 类型检查、静态构建及 Pagefind 索引生成。搜索请在生产构建后的 `npm run preview` 中测试；开发服务器不生成生产索引。

[Starlight 文档](https://starlight.astro.build/) · [Astro 文档](https://docs.astro.build/)

MIT
