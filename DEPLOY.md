# Публикация сайта в интернете

Есть несколько способов опубликовать ваш VitePress сайт в интернете:

## 🚀 Вариант 1: Vercel (Рекомендуется - самый простой)

### Шаги:

1. **Зарегистрируйтесь на [Vercel](https://vercel.com)** (можно через GitHub)

2. **Подключите репозиторий:**
   - Нажмите "New Project"
   - Выберите ваш GitHub репозиторий
   - Vercel автоматически определит VitePress

3. **Настройки сборки:**
   - Build Command: `npm run docs:build`
   - Output Directory: `.vitepress/dist`
   - Install Command: `npm install`

4. **Нажмите "Deploy"**

Сайт будет доступен по адресу: `https://ваш-проект.vercel.app`

---

## 🌐 Вариант 2: Netlify

### Шаги:

1. **Зарегистрируйтесь на [Netlify](https://www.netlify.com)**

2. **Подключите репозиторий:**
   - Нажмите "Add new site" → "Import an existing project"
   - Выберите ваш Git провайдер и репозиторий

3. **Настройки сборки:**
   - Build command: `npm run docs:build`
   - Publish directory: `.vitepress/dist`

4. **Нажмите "Deploy site"**

Сайт будет доступен по адресу: `https://ваш-проект.netlify.app`

---

## 📦 Вариант 3: GitHub Pages

### Шаги:

1. **Создайте GitHub Actions workflow:**

Создайте файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy VitePress site to Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run docs:build
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: .vitepress/dist
      - id: deployment
        uses: actions/deploy-pages@v4
```

2. **Включите GitHub Pages:**
   - Перейдите в Settings → Pages
   - Source: GitHub Actions

Сайт будет доступен по адресу: `https://ваш-username.github.io/ваш-репозиторий`

---

## ⚡ Быстрый старт через Vercel CLI

Если у вас установлен Vercel CLI:

```bash
npm i -g vercel
vercel
```

Следуйте инструкциям в терминале.

---

## 🔧 Настройка базового пути (если нужно)

Если ваш сайт будет размещен не в корне домена, добавьте в `.vitepress/config.mts`:

```typescript
export default defineConfig({
  base: '/ваш-путь/', // например '/aqua-call-web-site/'
  // ... остальная конфигурация
})
```

---

## ✅ Рекомендация

**Vercel** - самый простой и быстрый способ для VitePress. Он автоматически определяет настройки и предоставляет бесплатный хостинг с автоматическим деплоем при каждом push в репозиторий.

