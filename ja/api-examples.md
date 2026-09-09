---
outline: deep
---

# ランタイム API の例

VitePress が提供するランタイム API の一部を紹介します。

`useData()` API は現在のサイト、テーマ、ページのデータを取得でき、`.md` と `.vue` で使用できます：

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## 結果

### テーマデータ
<pre>{{ theme }}</pre>

### ページデータ
<pre>{{ page }}</pre>

### ページのフロントマター
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## 結果

### テーマデータ
<pre>{{ theme }}</pre>

### ページデータ
<pre>{{ page }}</pre>

### ページのフロントマター
<pre>{{ frontmatter }}</pre>

## 詳細

[ランタイム API 一覧](https://vitepress.dev/reference/runtime-api#usedata)を参照してください。
