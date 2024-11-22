---
id: 1732157579949 # 文章id
title: 栅格布局 # 文章标题
description: 栅格布局 # 文章描述
archive: 组件 # 文章归档
archiveTitle: 布局 # 文章归档目录标题
archiveTop: 100 # 文章归档排序，数字越大越靠前
top: { top } # 是否zhi置顶，数字越大优先级越高
---

# 栅格布局

使用栅格对页面进行划分布局。

## 基础使用

`LayoutGrid` 默认会将容器分为 10 \* 10 的无间距容器。  
`LayoutGridItem` 的 `row` 和 `column` 属性设置位置。

:::Dome

<template v-if="true">  
  <LayoutGrid class="grid">  
    <LayoutGridItem class="item" :row="[1]" :column="[1,10]">header</LayoutGridItem>  
    <LayoutGridItem class="item" :row="[2,9]" :column="[1]">side</LayoutGridItem>  
    <LayoutGridItem class="item" :row="[2,9]" :column="[2,10]">content</LayoutGridItem>  
    <LayoutGridItem class="item" :row="[10]" :column="[1,10]">footer</LayoutGridItem>  
  </LayoutGrid>  
</template>

<style scoped>
.grid {
  width: 100%;
  height: 300px
}
.item {
  background: #89e8;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px #89e solid;
}
</style>

:::

## 设置间距

通过 `gap`, `gapRow` 和 `gapColumn` 属性设置容器间距。

:::Dome

<template v-if="true">  
  <LayoutGrid class="grid" :gapRow="10" :gapColumn="5">  
    <LayoutGridItem class="item" :row="[1]" :column="[1,10]">header</LayoutGridItem>  
    <LayoutGridItem class="item" :row="[2,9]" :column="[1]">side</LayoutGridItem>  
    <LayoutGridItem class="item" :row="[2,9]" :column="[2,10]">content</LayoutGridItem>  
    <LayoutGridItem class="item" :row="[10]" :column="[1,10]">footer</LayoutGridItem>  
  </LayoutGrid>  
</template>

<style scoped>
.grid {
  width: 100%;
  height: 300px
}
.item {
  background: #89e8;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px #89e solid;
}
</style>

:::

## 栅格密度

通过 `row` 和 `column` 属性设置容器栅格密度，默认为 10。

:::Dome

<template v-if="true">  
  <LayoutGrid class="grid" :row="15" :column="20" :gap="5">  
    <LayoutGridItem class="item" :row="[1, 2]" :column="[1, 20]">header</LayoutGridItem>  
    <LayoutGridItem class="item" :row="[3, 14]" :column="[1, 4]">side</LayoutGridItem>  
    <LayoutGridItem class="item" :row="[3, 14]" :column="[5, 20]">content</LayoutGridItem>  
    <LayoutGridItem class="item" :row="[15]" :column="[1, 20]">footer</LayoutGridItem>  
  </LayoutGrid>  
</template>

<style scoped>
.grid {
  width: 100%;
  height: 300px
}
.item {
  background: #89e8;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px #89e solid;
}
</style>

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

:::Dome title="LayoutGrid.vue" hiddenTemp

<template>
  <div class="LayoutGrid" :style="style">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const { row, column, gap, gapRow, gapColumn } = defineProps<{
  row?: Number;
  column?: Number;
  gap?: Number | String;
  gapRow?: Number | String;
  gapColumn?: Number | String;
}>();

const style = computed(() => {
  let gapRow0, gapColumn0;
  if (typeof gap === 'undefined') {
    gapRow0 = typeof gapRow === 'number' ? `${gapRow}px` : gapRow;
    gapColumn0 = typeof gapColumn === 'number' ? `${gapColumn}px` : gapColumn;
  } else {
    gapRow0 = gapColumn0 = typeof gap === 'number' ? `${gap}px` : gap;
  }
  return {
    grid: `repeat(${row}, minmax(0, 1fr)) / repeat(${column}, minmax(0, 1fr))`,
    gap: `${gapRow0} ${gapColumn0}`,
  };
});
</script>

<style scoped>
.LayoutGrid {
  display: grid;
}
</style>

:::

:::Dome title="LayoutGridItem.vue" hiddenTemp

<template>
    <div :style="{ gridArea }">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const { row, column } = defineProps<{
    row: Array<number>;
    column: Array<number>;
}>();
const gridArea = computed(() => {
    let [rowStart = 1, rowEnd = rowStart] = row;
    let [cloumnStart = 1, cloumnEnd = cloumnStart] = column;
    return `${rowStart}/${cloumnStart}/${rowEnd + 1}/${cloumnEnd + 1}`;
});
</script>

:::
