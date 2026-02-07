import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  lang: 'ru-RU',
  title: 'AquaCall ♥',
  description: 'Сайт документации AquaCall',

  vite: {
    plugins: [tailwindcss()],
    server: {
      host: '0.0.0.0',
      port: 5173
    }
  },

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'AquaCall',
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Руководство', link: '/guide/getting-started' },
      { text: 'Markdown', link: '/markdown-examples' },
      { text: 'API', link: '/api-examples' }
    ],
    sidebar: [
      {
        text: 'Руководство',
        items: [
          { text: 'Начало работы', link: '/guide/getting-started' }
        ]
      },
      {
        text: 'Примеры',
        items: [
          { text: 'Примеры Markdown', link: '/markdown-examples' },
          { text: 'Примеры API', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],
    footer: {
      message: 'Создано с ❤️ используя VitePress',
      copyright: 'Copyright © 2026 AquaCall'
    },
    search: {
      provider: 'local'
    }
  }
})
