---
outline: deep
---

# 런타임 API 예제

VitePress가 제공하는 일부 런타임 API 사용법을 보여 줍니다.

`useData()` API는 현재 사이트, 테마, 페이지 데이터를 읽으며 `.md`와 `.vue` 파일에서 사용할 수 있습니다:

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## 결과

### 테마 데이터
<pre>{{ theme }}</pre>

### 페이지 데이터
<pre>{{ page }}</pre>

### 페이지 프런트매터
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## 결과

### 테마 데이터
<pre>{{ theme }}</pre>

### 페이지 데이터
<pre>{{ page }}</pre>

### 페이지 프런트매터
<pre>{{ frontmatter }}</pre>

## 더 보기

[런타임 API 전체 목록](https://vitepress.dev/reference/runtime-api#usedata)을 참조하십시오.
