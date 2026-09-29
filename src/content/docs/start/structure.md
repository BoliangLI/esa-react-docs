---
title: 项目结构
description: ESA Pages · 项目结构
sidebar:
  order: 2
---

## 内容与配置分离

```text
astro.config.mjs          # 站点、导航、语言与主题配置
esa.jsonc                 # ESA 构建与静态资源配置
src/content.config.ts    # Starlight 内容集合与字段校验
src/content/docs/        # Markdown / MDX 文档
src/styles/global.css   # 官方 Tailwind 集成
```

## 自动生成页面

`src/content/docs/guides/example.md` 对应 `/guides/example/`。无需添加路由组件。

## 自动生成导航

侧栏根据目录生成，文章 frontmatter 的 `sidebar.order` 决定顺序。

:::note
标题目录、上一篇和下一篇由 Starlight 生成，避免维护两份数据。
:::
