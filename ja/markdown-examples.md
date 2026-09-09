# Markdown 拡張の例

VitePress 組み込みの Markdown 拡張を紹介します。

## 構文ハイライト

VitePress は [Shiki](https://github.com/shikijs/shiki) による構文ハイライトと、行の強調などを提供します：

**入力**

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

**出力**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## カスタムコンテナー

**入力**

```md
::: info 情報
これは情報です。
:::

::: tip ヒント
これはヒントです。
:::

::: warning 警告
これは警告です。
:::

::: danger 危険
これは危険に関する警告です。
:::

::: details 詳細
これは詳細ブロックです。
:::
```

**出力**

::: info 情報
これは情報です。
:::

::: tip ヒント
これはヒントです。
:::

::: warning 警告
これは警告です。
:::

::: danger 危険
これは危険に関する警告です。
:::

::: details 詳細
これは詳細ブロックです。
:::

## 詳細

[Markdown 拡張一覧](https://vitepress.dev/guide/markdown)を参照してください。
