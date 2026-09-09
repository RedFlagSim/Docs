---
outline: deep
---

# Exemples d’API à l’exécution

Cette page présente certaines API à l’exécution de VitePress.

L’API `useData()` donne accès aux données du site, du thème et de la page actuelle dans les fichiers `.md` et `.vue` :

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Résultats

### Données du thème
<pre>{{ theme }}</pre>

### Données de la page
<pre>{{ page }}</pre>

### Métadonnées de la page
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## Résultats

### Données du thème
<pre>{{ theme }}</pre>

### Données de la page
<pre>{{ page }}</pre>

### Métadonnées de la page
<pre>{{ frontmatter }}</pre>

## Pour aller plus loin

Consultez la [liste complète des API à l’exécution](https://vitepress.dev/reference/runtime-api#usedata).
