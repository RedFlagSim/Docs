# Markdown-Erweiterungen

Diese Seite zeigt einige integrierte Markdown-Erweiterungen von VitePress.

## Syntaxhervorhebung

VitePress nutzt [Shiki](https://github.com/shikijs/shiki) zur Syntaxhervorhebung und bietet etwa die Hervorhebung einzelner Zeilen:

**Eingabe**

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

**Ausgabe**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Eigene Container

**Eingabe**

```md
::: info Information
Dies ist eine Information.
:::

::: tip Tipp
Dies ist ein Tipp.
:::

::: warning Warnung
Dies ist eine Warnung.
:::

::: danger Gefahr
Dies ist eine Gefahrenwarnung.
:::

::: details Details
Dies ist ein Detailblock.
:::
```

**Ausgabe**

::: info Information
Dies ist eine Information.
:::

::: tip Tipp
Dies ist ein Tipp.
:::

::: warning Warnung
Dies ist eine Warnung.
:::

::: danger Gefahr
Dies ist eine Gefahrenwarnung.
:::

::: details Details
Dies ist ein Detailblock.
:::

## Mehr

Siehe die [vollständige Liste der Markdown-Erweiterungen](https://vitepress.dev/guide/markdown).
