---
outline: deep
---

# 运行时 API 示例

本页演示 VitePress 提供的部分运行时 API。

`useData()` API 可读取当前页面的站点、主题和页面数据，适用于 `.md` 和 `.vue` 文件：

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## 结果

### 主题数据
<pre>{{ theme }}</pre>

### 页面数据
<pre>{{ page }}</pre>

### 页面前置数据
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## 结果

### 主题数据
<pre>{{ theme }}</pre>

### 页面数据
<pre>{{ page }}</pre>

### 页面前置数据
<pre>{{ frontmatter }}</pre>

## 更多

请参阅[运行时 API 完整列表](https://vitepress.dev/reference/runtime-api#usedata)。
