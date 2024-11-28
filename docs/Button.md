---
id: 1732257423667 # 文章id
title: 按钮 Button # 文章标题
description: popsicle-ui 按钮 Button # 文章描述
archive: 组件 # 文章归档
archiveTitle: 基础 # 文章归档目录标题
archiveTop: 90 # 文章归档排序，数字越大越靠前
---

# 按钮 Button

提供点击动作来触发指令或操作。

## 基础使用

不用样式的按钮。

:::Dome file="../examples/Button/Basis.vue"  
:::

## 大小设置

通过 `size` 属性设置按钮大小，也可以通过 `font-size` 设置。

:::Dome file="../examples/Button/Size.vue"  
:::

## 禁用状态

`disable` 属性为 `false` 时将不会响应交互操作。

:::Dome file="../examples/Button/Disable.vue"  
:::

## 加载状态

通过 `loading` 属性控制加载状态，在加载状态中不可再次点击按钮。  
如果存在 `#loading` 插槽，在加载时将替换原本按钮内容。

:::Dome file="../examples/Button/Loading.vue"  
:::

## 按钮组

通过 `ButtonGroup` 组件将多个按钮包揽在一起。

:::Dome file="../examples/Button/Group.vue"  
:::

## Button 属性

| 名称    | 类型                          | 默认值 | 说明                   |
| ------- | ----------------------------- | :----: | ---------------------- |
| shape   | `String[square,round,circle]` |   -    | 形状。                 |
| type    | `String[plain,rich,text]`     |   -    | 样式。                 |
| size    | `Number`                      |   -    | 尺寸，与字体大小有关。 |
| disable | `Boolean`                     |  true  | 是否可用               |
| loading | `Boolean`                     | false  | 是否处于加载状态       |

## Button 插槽

| 名称    | 参数 | 说明                             |
| ------- | :--: | -------------------------------- |
| loading |  -   | 如果存在，在加载时替换先前内容。 |

## 源码

:::Dome title="Button.vue" file=".../ui/components/Button.vue" hiddenTemp  
:::

:::Dome title="ButtonGroup.vue" file=".../ui/components/ButtonGroup.vue" hiddenTemp  
:::
