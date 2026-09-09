# Markdown 확장 예제

VitePress의 내장 Markdown 확장 일부를 보여 줍니다.

## 구문 강조

VitePress는 [Shiki](https://github.com/shikijs/shiki) 기반 구문 강조와 줄 강조 기능을 제공합니다:

**입력**

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

**출력**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 사용자 정의 컨테이너

**입력**

```md
::: info 정보
정보 상자입니다.
:::

::: tip 팁
팁입니다.
:::

::: warning 경고
경고입니다.
:::

::: danger 위험
위험 경고입니다.
:::

::: details 상세
상세 내용 블록입니다.
:::
```

**출력**

::: info 정보
정보 상자입니다.
:::

::: tip 팁
팁입니다.
:::

::: warning 경고
경고입니다.
:::

::: danger 위험
위험 경고입니다.
:::

::: details 상세
상세 내용 블록입니다.
:::

## 더 보기

[Markdown 확장 전체 목록](https://vitepress.dev/guide/markdown)을 참조하십시오.
