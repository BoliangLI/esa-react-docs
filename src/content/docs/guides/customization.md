---
title: 品牌与主题
description: Nexus Docs · 品牌与主题
sidebar:
  order: 2
---

## 修改品牌

在 `astro.config.mjs` 中修改站点标题、社交链接与导航。首页内容在 `src/content/docs/index.mdx`。

## 明暗主题

Starlight 自带明暗和系统主题切换，直接使用默认组件。

## Tailwind 样式

项目使用官方 `@astrojs/starlight-tailwind` 集成，保持主题样式兼容。需要自定义内容时，可以在 MDX 组件中使用 Tailwind 工具类。

:::tip
先使用框架配置和主题变量，再考虑覆盖组件。主题升级时需要维护的代码越少越好。
:::

## 国际化

Starlight 提供多语言内容、界面翻译与语言切换。当前模板为简体中文；需要英文时添加 locale 和对应文档目录。
