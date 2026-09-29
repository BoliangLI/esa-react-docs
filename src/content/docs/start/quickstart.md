---
title: 快速开始
description: Nexus Docs · 快速开始
sidebar:
  order: 1
---

## 准备环境

使用 Node.js 22.12 或更新版本。本项目无需数据库、服务端函数或搜索服务。

## 启动本地开发

```bash
npm ci
npm run dev
```

在 `src/content/docs/` 中编辑 Markdown 文件，浏览器会自动更新。

## 构建生产站点

```bash
npm run build
npm run preview
```

:::tip[搜索在生产构建中验证]
Starlight 的 Pagefind 搜索索引在构建时生成。请执行构建后，在预览站点测试全文搜索。
:::

## 接下来

阅读[内容编写](/start/writing/)或[部署到 ESA](/guides/deployment/)。
