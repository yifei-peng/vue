import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器',
    },
  },
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      {
        text: '首页',
        link: '/',
      },
    ],
    sidebar: [
      {
        text: '代码规范',
        children: [
          {
            text: 'markdown',
            link: '/coding/markdown.md'
          }
        ]
      },
    ],
  }),
});
