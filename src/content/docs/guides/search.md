---
title: 全文搜索
description: ESA Pages · 全文搜索
sidebar:
  order: 3
---

## 无服务器搜索

默认搜索由 Starlight 集成的 Pagefind 提供。每次生产构建都会扫描最终 HTML，生成分块索引。

## 搜索正文

尝试搜索「canonical」「全文搜索」或「环境变量」。结果会定位到对应文档与章节，而不仅匹配文章标题。

## 自定义与排除

可通过框架支持的 Pagefind 配置和页面元数据调整索引。大量文档需要托管搜索时，再采用 Starlight 官方 Algolia 插件。

## 本地验证

```bash
npm run build
npm run preview
```

打开预览地址后，用页面顶部的搜索按钮或快捷键进入搜索。
