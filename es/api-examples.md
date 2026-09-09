---
outline: deep
---

# Ejemplos de API en ejecución

Esta página muestra algunas API en ejecución de VitePress.

La API `useData()` accede a datos del sitio, tema y página actual, tanto en archivos `.md` como `.vue`:

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Resultados

### Datos del tema
<pre>{{ theme }}</pre>

### Datos de página
<pre>{{ page }}</pre>

### Metadatos de página
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## Resultados

### Datos del tema
<pre>{{ theme }}</pre>

### Datos de página
<pre>{{ page }}</pre>

### Metadatos de página
<pre>{{ frontmatter }}</pre>

## Más

Consulte la [lista completa de API en ejecución](https://vitepress.dev/reference/runtime-api#usedata).
