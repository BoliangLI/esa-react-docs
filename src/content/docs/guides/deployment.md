---
title: 部署到 ESA
description: ESA Pages · 部署到 ESA
sidebar:
  order: 1
---

## 导入仓库

在 ESA 函数和 Pages 中导入 `BoliangLI/esa-react-docs`，选择 `main` 分支，项目根目录保持 `/`，Node.js 选择 22。

## 构建配置

```json title="esa.jsonc"
{
  "installCommand": "npm ci",
  "buildCommand": "npm run build",
  "assets": {
    "directory": "./dist",
    "notFoundStrategy": "404Page"
  }
}
```

## 静态站点路由

Starlight 为每篇文章生成独立 HTML。ESA 可以直接处理目录索引；不存在的页面使用生成的 `404.html`。本模板无需函数入口。

## 设置站点地址

站点域名在 `astro.config.mjs` 中固定配置为 `site: 'https://example.com'`，不使用环境变量。它用于 canonical 等绝对地址；更换域名时直接修改该配置并重新构建。

## 发布后检查

- 首页和文档详情可直接访问。
- 刷新文档详情仍能显示当前文章。
- 搜索能找到正文内容。
- 不存在的路径显示 404 页面。

参阅 [ESA 官方构建与路由文档](https://help.aliyun.com/zh/edge-security-acceleration/esa/user-guide/build-pages)。
