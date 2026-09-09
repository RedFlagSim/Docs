# Exemples d’extensions Markdown

Cette page présente certaines extensions Markdown intégrées à VitePress.

## Coloration syntaxique

VitePress utilise [Shiki](https://github.com/shikijs/shiki) pour la coloration syntaxique et propose notamment la mise en évidence de lignes :

**Entrée**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Sortie**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Conteneurs personnalisés

**Entrée**

```md
::: info Information
Ceci est une information.
:::

::: tip Astuce
Ceci est une astuce.
:::

::: warning Avertissement
Ceci est un avertissement.
:::

::: danger Danger
Ceci est un avertissement de danger.
:::

::: details Détails
Ceci est un bloc de détails.
:::
```

**Sortie**

::: info Information
Ceci est une information.
:::

::: tip Astuce
Ceci est une astuce.
:::

::: warning Avertissement
Ceci est un avertissement.
:::

::: danger Danger
Ceci est un avertissement de danger.
:::

::: details Détails
Ceci est un bloc de détails.
:::

## Pour aller plus loin

Consultez la [liste complète des extensions Markdown](https://vitepress.dev/guide/markdown).
