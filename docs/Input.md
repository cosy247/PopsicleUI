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

:::Dome file="../examples/Input/Basis.vue"  
:::

## 大小设置

通过 `size` 属性设置按钮大小，也可以通过 `font-size` 设置。

:::Dome file="../examples/Input/Size.vue"  
:::

## 可清空的

通过 `clearable` 属性控制是否可以清空。

:::Dome file="../examples/Input/Clearable.vue"  
:::

## 禁用和只读状态

通过 `disable` 属性控制是否为禁用状态，通过 `readonly` 属性控制是否为只读状态。禁用状态会有鼠标指针提示。

:::Dome file="../examples/Input/Disable.vue"  
:::

## 字数限制

通过 `maxLength` 属性设置可输入的最大字符数。当启动限制时 `showLimit` 可实时显示输入字符数。

:::Dome file="../examples/Input/MaxLength.vue"  
:::

## 密码框

通过 `password` 属性使输入框隐藏数据输入数据。当设置为密码模式时可通过 `showPasswordType` 属性设置显示密码的方式。

:::Dome file="../examples/Input/Password.vue"  
:::

## 标签提示

通过 `label` 属性设置标签文字。当设置标签文字时可以通过 `labelWidth` 固定标签宽度。

:::Dome file="../examples/Input/Label.vue"  
:::

## 额外显示

输入框中的额外显示内容可以通过 `#left` 和 `#right` 两个插槽进行补充。

:::Dome file="../examples/Input/Extra.vue"  
:::

## 可选输入

在聚焦时自动带出提示内容，通过 `promptList` 指定提示的数据列表;  
通过 `promptKey` 指定显示名称的字段名。  
使用 `@prompt` 处理选择提示事件，返回 `false` 将不替换绑定值。  
设置 `promptFilter` 属性可以在输入时自动过滤。

:::Dome file="../examples/Input/Prompt.vue"  
:::

## 属性

| 名称             | 类型                  | 默认值  | 说明                            |
| ---------------- | --------------------- | :-----: | ------------------------------- |
| value/v-model    | `number` `string`     |    -    | 绑定值                          |
| placeholder      | `string`              |    -    | 输入提示                        |
| clearable        | `boolean`             |  false  | 是否显示清空按钮                |
| size             | `number` `string`     | inherit | 控件大小，与 font-size 绑定     |
| disable          | `boolean`             |  false  | 是否为禁用状态                  |
| maxLength        | `number`              |    -    | 输入字符数限制                  |
| showLimit        | `boolean`             |  false  | 是否显示字符数限制              |
| label            | `string`              |    -    | 标签提示文字                    |
| labelWidth       | `number` `string`     |    -    | 标签提示文字宽度，数字单位为 px |
| password         | `boolean`             |  false  | 是否为密码模式                  |
| showPasswordType | `string[hover,click]` |    -    | 显示密码的方式                  |
| readonly         | `boolean`             |    -    | 是否为只读模式                  |
| promptList       | `boolean`             |    -    | 输入提示的数据列表              |
| promptKey        | `string`              |    -    | 输入提示数据的显示字段名        |
| promptFilter     | `boolean`             |    -    | 是否自动筛选提示数据列表        |

## 事件

| 名称   |  回调参数  | 说明                     |
| ------ | :--------: | ------------------------ |
| prompt | 选中行数据 | 选中输入提示行数据时触发 |

## 插槽

| 名称   |   插槽参数    | 说明                 |
| ------ | :-----------: | -------------------- |
| label  |       -       | 输入框外左侧标签插槽 |
| left   |       -       | 输入框内，左侧插槽   |
| right  |       -       | 输入框内，右侧插槽   |
| prompt | {index, item} | 输入提示行数据插槽   |

## 源码

:::Dome title="Input.vue" file="../ui/components/Input.vue" hiddenTemp :::
