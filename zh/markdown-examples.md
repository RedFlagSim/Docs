# Markdown 扩展示例

本页演示 VitePress 内置的部分 Markdown 扩展。

## 语法高亮

VitePress 使用 [Shiki](https://github.com/shikijs/shiki) 提供语法高亮，并支持行高亮等功能：

**输入**

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

**输出**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 自定义容器

**输入**

```md
::: info 信息
这是一条信息。
:::

::: tip 提示
这是一条提示。
:::

::: warning 警告
这是一条警告。
:::

::: danger 危险
这是一条危险警告。
:::

::: details 详情
这是详情内容。
:::
```

**输出**

::: info 信息
这是一条信息。
:::

::: tip 提示
这是一条提示。
:::

::: warning 警告
这是一条警告。
:::

::: danger 危险
这是一条危险警告。
:::

::: details 详情
这是详情内容。
:::

## 更多

请参阅 [Markdown 扩展完整列表](https://vitepress.dev/guide/markdown)。
