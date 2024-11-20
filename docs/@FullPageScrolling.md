---
id: 1730687008377 # 文章id
title: CSS实现页面的整页滚动 # 文章标题
description: CSS实现页面的整页滚动 # 文章描述
tags: 杂记 # 文章标签
archive: # 文章归档
recommendations: # 相关推荐id
shadow: false # 是否隐藏
top: 0 # 是否置顶，数字越大优先级越高
---

# CSS 实现页面的整页滚动

整页滚动（也称为全屏滚动、单页滚动或视差滚动）是一种网页导航和布局技术，它允许用户通过滚动鼠标滚轮、点击导航链接或触摸移动设备屏幕来在网页的不同部分（通常是全屏高度的“页面”或“部分”）之间平滑过渡。

## 实现

只要依靠 css 中的 `scroll-snap-type` 和 `scroll-snap-align` 属性。

#### scroll-snap-type

设置了在有滚动容器的情形下吸附至吸附点的严格程度。

```shell title="css.scroll-snap-type"
scroll-snap-type = none | [ x | y | block | inline | both ] [ mandatory | proximity ]?
```

| scroll-snap-type | 描述 |
| :-: | --- |
| none | 在滚动此滚动容器的可见视口时，必须忽略吸附点。 |
| x | 滚动容器仅在其横轴上吸附至吸附位置。 |
| y | 滚动容器仅在其纵轴上吸附至吸附位置。 |
| block | 滚动容器仅在其块向轴上吸附至吸附位置。 |
| inline | 滚动容器仅在其行向轴上吸附至吸附位置。 |
| both | 滚动容器在其两轴上独立地吸附至吸附位置（可能在各轴上吸附至不同的元素）。 |
| mandatory | 若滚动容器当前未在滚动，则其可见视口必须吸附至吸附位置。 |
| poximity | 若滚动容器当前未在滚动，则其可见视口可以吸附至吸附位置。是否吸附由用户代理根据滚动参数决定。若指定了吸附轴，则此为默认的吸附程度 |

## 示例

```css title="scroll-snap-type: y mandatory"

```

## 参考

1. [MDN scroll-snap-type](https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-snap-type)
