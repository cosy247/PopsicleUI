---
id: 3
date: 2023/11/21
title: CSS圆角borderRadius的内容溢出问题
tags: css
description: css属性中的圆角borderRadius和溢出overflow的之间可能存在的冲突情况
---

# CSS圆角borderRadius的内容溢出问题

在 CSS 中[border-radius](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius)属性可以为元素添加圆角。行为圆角矩形或者椭圆（圆）。[overflow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow)属性可以设置元素溢出时所需的行为。一般设置为 auto，自动显示或者隐藏滚动条。

## 问题描述

当一个元素设置了圆角但是其没有设置 padding，又恰好其子元素存在背景颜色，那么可能出现以下的情况：

![Alt text](assets/borderRadiusAndOverflow/image-1.png)

```html
<style>
    .s-outer {
        border-radius: 10px;
        background: yellowgreen;
        width: 100px;
        height: 40px;
        margin: 20px auto;
    }
    .s-inner {
        background: wheat;
        width: 20px;
        height: 20px;
    }
</style>
<div class="s-outer">
    <div class="s-inner"></div>
</div>
```

其中左上角的圆角被子元素覆盖。

## 解决方案

其中问题出现的原因是子元素位置是正确的，但是圆角是在元素内容区域下进行收缩的，导致内容区域的圆角区域缺失，但是其子元素并不会去检测这一信息，导致了这种情况的发生。

解决方式：

1. 给父元素添加 overflow 属性，只要计算属性出不为 visible 即可。auto，scroll，clip，hidden 都是可行的，都会将移除内容区域的部分隐藏掉。但是如果是文字溢出的话文字也会被隐藏超出部分。

2. 给父元素添加 padding，父元素的内容区域与圆角有一定的距离。

3. 给可能溢出圆角的子元素添加 margin 或者 margin，让子元素自身与圆角有一定的距离。

4. 给可能溢出圆角的子元素添加对应方向对应大小的圆角，但是如果是文字溢出的话是不能解决的。

5. 如果是背景颜色溢出，可以考虑让父元素设置背景颜色，子元素取消背景颜色的设置。

其中原理就是添加内容与圆角的距离让内容不影响圆角，或者将影响的部分隐藏掉。
