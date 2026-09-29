import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: process.env.SITE_URL || 'https://example.com',
  output: 'static',
  integrations: [starlight({
    title: 'Nexus Docs',
    description: '使用 Starlight 编写、搜索和发布技术文档。',
    defaultLocale: 'root',
    locales: { root: { label: '简体中文', lang: 'zh-CN' } },
    social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/BoliangLI/esa-react-docs' }],
    customCss: ['./src/styles/global.css'],
    sidebar: [
      { label: '开始使用', items: [{ autogenerate: { directory: 'start' } }] },
      { label: '构建与部署', items: [{ autogenerate: { directory: 'guides' } }] },
    ],
  })],
  vite: { plugins: [tailwindcss()] },
});
