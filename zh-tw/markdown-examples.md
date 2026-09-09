# Markdown 擴充範例

本頁示範 VitePress 內建的部分 Markdown 擴充。

## 語法醒目提示

VitePress 使用 [Shiki](https://github.com/shikijs/shiki) 提供語法醒目提示，並支援行醒目提示等功能：

**輸入**

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

**輸出**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 自訂容器

**輸入**

```md
::: info 資訊
這是一則資訊。
:::

::: tip 提示
這是一則提示。
:::

::: warning 警告
這是一則警告。
:::

::: danger 危險
這是一則危險警告。
:::

::: details 詳細內容
這是詳細內容。
:::
```

**輸出**

::: info 資訊
這是一則資訊。
:::

::: tip 提示
這是一則提示。
:::

::: warning 警告
這是一則警告。
:::

::: danger 危險
這是一則危險警告。
:::

::: details 詳細內容
這是詳細內容。
:::

## 更多

請參閱 [Markdown 擴充完整清單](https://vitepress.dev/guide/markdown)。
