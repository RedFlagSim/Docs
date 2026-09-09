---
outline: deep
---

# Примеры API времени выполнения

Здесь показано применение некоторых API времени выполнения VitePress.

API `useData()` предоставляет данные сайта, темы и текущей страницы и работает в файлах `.md` и `.vue`:

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Результаты

### Данные темы
<pre>{{ theme }}</pre>

### Данные страницы
<pre>{{ page }}</pre>

### Метаданные страницы
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## Результаты

### Данные темы
<pre>{{ theme }}</pre>

### Данные страницы
<pre>{{ page }}</pre>

### Метаданные страницы
<pre>{{ frontmatter }}</pre>

## Подробнее

См. [полный список API времени выполнения](https://vitepress.dev/reference/runtime-api#usedata).
