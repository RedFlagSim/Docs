---
outline: deep
---

# Beispiele der Laufzeit-API

Diese Seite zeigt einige Laufzeit-APIs von VitePress.

Die API `useData()` liefert Daten zu Website, Theme und aktueller Seite und funktioniert in `.md`- und `.vue`-Dateien:

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Ergebnisse

### Theme-Daten
<pre>{{ theme }}</pre>

### Seitendaten
<pre>{{ page }}</pre>

### Seitenmetadaten
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## Ergebnisse

### Theme-Daten
<pre>{{ theme }}</pre>

### Seitendaten
<pre>{{ page }}</pre>

### Seitenmetadaten
<pre>{{ frontmatter }}</pre>

## Mehr

Siehe die [vollständige Liste der Laufzeit-APIs](https://vitepress.dev/reference/runtime-api#usedata).
