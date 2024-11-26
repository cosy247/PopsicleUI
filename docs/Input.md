---
id: 1732590675728 # 文章id
title: 输入框 Input # 文章标题
description: popsicle-ui 输入框 Input # 文章描述
archive: 组件 # 文章归档
archiveTitle: 表单 # 文章归档目录标题
archiveTop: 80 # 文章归档排序，数字越大越靠前
---

# 输入框

## 基础使用

输入框的值通过 `v-modle` 进行绑定。

:::Dome file="../docs/examples/Input/Basis.vue"  
:::

## 大小设置

通过 `size` 属性设置按钮大小，也可以通过 `font-size` 设置。

:::Dome file="../docs/examples/Input/Size.vue"  
:::

## 可清空的

通过 `clearable` 属性控制是否可以清空。

:::Dome file="../docs/examples/Input/Clearable.vue"  
:::

## 禁用状态

通过 `disable` 属性控制是否可以手动输入。

:::Dome file="../docs/examples/Input/Disable.vue"  
:::

## 字数限制

通过 `maxLength` 属性设置可输入的最大字符数。当启动限制时 `showLimit` 可实时显示输入字符数。

:::Dome file="../docs/examples/Input/MaxLength.vue"  
:::

## 标签提示

通过 `label` 属性设置标签文字。当设置标签文字时可以通过 `labelWidth` 固定标签宽度。

:::Dome file="../docs/examples/Input/Label.vue"  
:::

## 密码框

通过 `password` 属性使输入框隐藏数据输入数据。当设置为密码模式时可通过 `showPassword` 属性设置显示密码的方式。

:::Dome file="../docs/examples/Input/Password.vue"  
:::

## 属性
