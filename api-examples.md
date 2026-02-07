---
outline: deep
---

# Примеры API

Эта страница демонстрирует использование некоторых runtime API, предоставляемых VitePress.

## useData() API

Основной API `useData()` может использоваться для доступа к данным сайта, темы и страницы для текущей страницы. Он работает как в `.md`, так и в `.vue` файлах:

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## Результаты

### Данные темы
<pre>{{ JSON.stringify(theme, null, 2) }}</pre>

### Данные страницы
<pre>{{ JSON.stringify(page, null, 2) }}</pre>

### Frontmatter страницы
<pre>{{ JSON.stringify(frontmatter, null, 2) }}</pre>

## Другие API

### useRoute()

```js
import { useRoute } from 'vitepress'

const route = useRoute()
console.log(route.path) // текущий путь
```

### useRouter()

```js
import { useRouter } from 'vitepress'

const router = useRouter()
router.go('/another-page')
```

## Дополнительная информация

Ознакомьтесь с документацией для [полного списка runtime API](https://vitepress.dev/reference/runtime-api#usedata).
