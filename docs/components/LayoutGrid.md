# 栅格布局 LayoutGrid

使用栅格对页面进行划分布局。

## 基础使用

`LayoutGrid` 默认会将容器分为 10 \* 10 的无间距容器。  
`LayoutGridItem` 的 `row` 和 `column` 属性设置位置。

:::Dome file="/examples/LayoutGrid/Basis.vue"  
:::

## 设置间距

通过 `gap`, `gapRow` 和 `gapColumn` 属性设置容器间距。

:::Dome file="/examples/LayoutGrid/Gap.vue"  
:::

## 栅格密度

通过 `row` 和 `column` 属性设置容器栅格密度，默认为 10。

:::Dome file="/examples/LayoutGrid/RowAndColumn.vue"  
:::

## LayoutGrid 属性

| 名称      | 类型              | 必填 | 默认值 | 说明                                                                   |
| --------- | ----------------- | :--: | :----: | ---------------------------------------------------------------------- |
| row       | `Number`          |  否  |   10   | 栅格行密度。                                                           |
| column    | `Number`          |  否  |   10   | 栅格列密度。                                                           |
| gap       | `Number` `String` |  否  |   0    | 行与列的间距，`Number` 时自动加上 `px`，覆盖 `gapRow` 和 `gapColumn`。 |
| gapRow    | `Number` `String` |  否  |   0    | 行的间距，`Number` 时自动加上 `px`。                                   |
| gapColumn | `Number` `String` |  否  |   0    | 列的间距，`Number` 时自动加上 `px`。                                   |

## LayoutGridItem 属性

| 名称   | 类型            | 必填 | 默认值 | 说明                                          |
| ------ | --------------- | ---- | ------ | --------------------------------------------- |
| row    | `Array<number>` | 是   |        | 行占位，如`[1, 3]` 占位 1 到 3，`[2]`占位 2。 |
| column | `Array<number>` | 是   |        | 列占位。                                      |

## 源码

:::Dome title="LayoutGrid.vue" file="/ui/components/LayoutGrid.vue" hiddenTemp  
:::

:::Dome title="LayoutGridItem.vue" file="/ui/components/LayoutGridItem.vue" hiddenTemp  
:::
