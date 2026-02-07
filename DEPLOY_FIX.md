# Исправление проблем с публичным сайтом

## Проблема: Сайт выглядит не так, как локально

### Решение 1: Если сайт на GitHub Pages

Если ваш сайт размещен на GitHub Pages по адресу `https://username.github.io/aqua-call-web-site/`, нужно:

1. **Раскомментировать base path в конфигурации:**

Откройте `.vitepress/config.mts` и раскомментируйте строку:

```typescript
base: '/aqua-call-web-site/',
```

2. **Или использовать автоматическое определение** (уже настроено в конфигурации)

### Решение 2: Если сайт на Vercel/Netlify

Если сайт на Vercel или Netlify, base path должен быть `/` (по умолчанию).

### Решение 3: Проверка Tailwind CSS

Если стили Tailwind не применяются:

1. Убедитесь, что файл `.vitepress/theme/tailwind.css` существует и содержит:
   ```css
   @import "tailwindcss";
   ```

2. Убедитесь, что файл `.vitepress/theme/index.ts` импортирует CSS:
   ```typescript
   import './tailwind.css'
   ```

3. Пересоберите проект:
   ```bash
   npm run docs:build
   ```

### Решение 4: Проверка путей к ресурсам

Если изображения или другие ресурсы не загружаются:

1. Убедитесь, что файлы находятся в папке `public/`
2. Используйте абсолютные пути, начинающиеся с `/` (например, `/logo.svg`)
3. Если на GitHub Pages, используйте пути относительно base path

### Быстрая проверка

1. **Локально:**
   ```bash
   npm run docs:build
   npm run docs:preview
   ```
   Откройте `http://localhost:4173` и проверьте, как выглядит сайт

2. **Сравните с production:**
   - Проверьте консоль браузера на ошибки (F12)
   - Проверьте Network tab - какие файлы не загружаются
   - Проверьте, правильно ли указан base path

### Где размещен ваш сайт?

- **GitHub Pages:** `https://username.github.io/aqua-call-web-site/` → нужен base path
- **Vercel:** `https://project.vercel.app` → base path не нужен
- **Netlify:** `https://project.netlify.app` → base path не нужен

