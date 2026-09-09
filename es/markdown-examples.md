# Ejemplos de extensiones Markdown

Esta página muestra algunas extensiones Markdown integradas de VitePress.

## Resaltado de sintaxis

VitePress usa [Shiki](https://github.com/shikijs/shiki) para resaltar sintaxis y ofrece resaltado de líneas:

**Entrada**

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

**Salida**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Contenedores personalizados

**Entrada**

```md
::: info Información
Este es un cuadro informativo.
:::

::: tip Consejo
Este es un consejo.
:::

::: warning Advertencia
Esta es una advertencia.
:::

::: danger Peligro
Esta es una advertencia de peligro.
:::

::: details Detalles
Este es un bloque de detalles.
:::
```

**Salida**

::: info Información
Este es un cuadro informativo.
:::

::: tip Consejo
Este es un consejo.
:::

::: warning Advertencia
Esta es una advertencia.
:::

::: danger Peligro
Esta es una advertencia de peligro.
:::

::: details Detalles
Este es un bloque de detalles.
:::

## Más

Consulte la [lista completa de extensiones Markdown](https://vitepress.dev/guide/markdown).
