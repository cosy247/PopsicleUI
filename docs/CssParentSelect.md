---
id: 6
date: 2023/12/11
title: css控制上级样式
tags: CSS
archive:
recommendations: 2404159043318
description: css控制上级样式
---

# css 控制上级样式

## 引言

正常情况下 css 只可以由父类向下选择子类元素并控制其样式，比如`div > a`、`.main p > a`等。这里的子类元素反向选择父类元素并不是真正意义上的由下向上选择，而是通过`:has`选择器先判断是否有对应子类元素后再设置不同样式以达到等同于子元素选择父元素的效果。

## :has()函数式伪类

`:has` 伪类接受一个参数，如果满足参数类容则其中的样式生效，反之则不生效。

```html
<style>
  div.tempalate:has(> p) {
    background: #888;
  }
  div.tempalate:has(> .title) {
    color: red;
  }
  div.tempalate:has(> .text) {
    color: green;
  }
</style>

<!-- 被 div.tempalate:has(> p) 和 div.tempalate:has(> .title) 选中 -->
<div class="tempalate">
  <p class="title">我是标题</p>
</div>

<!-- 被 div.tempalate:has(> p) 和 div.tempalate:has(> .text) 选中 -->
<div class="tempalate">
  <p class="text">我是类容</p>
</div>
```

在判断是否选中时可以去除`:has()`来判断。如`div.tempalate:has(> p)`选择器只需要判断`div.tempalate > p`是否存在元素，存在时样式作用于`:has`之前的`div.tempalate`部分

## 多个参数

`:has`支持多个参数，参数之间使用逗号隔开。例如`div.tempalate:has(> .title, > .text)`，等同于`div.tempalate:has(> .title), div.tempalate:has(> .text)`，只要满足其中一个条件样式就可生效。

## 优先级

`:has` 本身没有优先级，优先级由其中的参数中的最高优先级决定（与具体生效参数无关）。

```css
/* (0, 1, 2) */
div.tempalate:has(> p) {
  background: #888;
}
/* (1, 1, 1) */
div.tempalate:has(> .title, #text) {
  color: red;
}
```

## 参考

1. [:has() - CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:has)
