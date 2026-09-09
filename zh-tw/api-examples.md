---
outline: deep
---

# 執行階段 API 範例

本頁示範 VitePress 提供的部分執行階段 API。

`useData()` API 可讀取目前頁面的網站、主題和頁面資料，適用於 `.md` 和 `.vue` 檔案：

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## 結果

### 主題資料
<pre>{{ theme }}</pre>

### 頁面資料
<pre>{{ page }}</pre>

### 頁面前置資料
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## 結果

### 主題資料
<pre>{{ theme }}</pre>

### 頁面資料
<pre>{{ page }}</pre>

### 頁面前置資料
<pre>{{ frontmatter }}</pre>

## 更多

請參閱[執行階段 API 完整清單](https://vitepress.dev/reference/runtime-api#usedata)。
