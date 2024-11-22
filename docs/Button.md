---
id: 1732257423667 # 文章id
title: 按钮 Button # 文章标题
description: 按钮 Button # 文章描述
archive: 组件 # 文章归档
archiveTitle: 基础 # 文章归档目录标题
archiveTop: 90 # 文章归档排序，数字越大越靠前
top: { top } # 是否zhi置顶，数字越大优先级越高
---

# 按钮 Button

提供点击动作来触发指令或操作。

## 基础使用

不用样式的按钮。

:::Dome

<template v-if="true"> 
  <div class="main">
    <Button shape="square">方形</Button>
    <Button >圆角矩形</Button>
    <Button shape="round">矩圆形</Button>
    <Button shape="circle">圆</Button>
  </div>
  <div class="main">
    <Button type="plain" shape="square">方形</Button>
    <Button type="plain">圆角矩形</Button>
    <Button type="plain" shape="round">矩圆形</Button>
    <Button type="plain" shape="circle">圆</Button>
  </div>
  <div class="main">
    <Button type="rich" shape="square">方形</Button>
    <Button type="rich">圆角矩形</Button>
    <Button type="rich" shape="round">矩圆形</Button>
    <Button type="rich" shape="circle">圆</Button>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  gap: 10px;
}
.main + .main {
  margin-top: 10px;
}
</style>

:::

## 大小设置

通过 `size` 属性设置按钮大小，也可以通过 `font-size` 设置。

:::Dome

<template v-if="true"> 
  <div class="main">
    <Button :size="19"  type="plain">size=19</Button>
    <Button :size="16"  type="plain">size=16</Button>
    <Button class="small" type="plain">font-size: 13px</Button>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  gap: 10px;
}
.small {
  font-size: 13px;
}
</style>

:::

## 禁用状态

`disable` 属性为 `false` 时将不会响应交互操作。

:::Dome

<template v-if="true"> 
  <div class="main">
    <Button type="plain" @click="sendMessage">非禁用</Button>
    <Button :disable="true" type="plain" @click="sendMessage">禁用{{a}}</Button>
  </div>
</template>

<script setup>
  const a = 1;
function sendMessage() {
  alert('可以使用');
} 
</script>

<style scoped>
.main {
  display: flex;
  gap: 10px;
}
</style>

:::

## 加载状态

通过 `loading` 属性控制加载状态，在加载状态中不可再次点击按钮。  
如果存在 `#loading` 插槽，在加载时将替换原本按钮内容。

:::Dome

<template v-if="true"> 
  <div class="main">
    <Button :loading="loading" @click="load" type="plain" >
      加载
      <template #loading>
        加载中...
      </template>
    </Button>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const loading = ref(false);

function load() {
  loading.value = true;
  setTimeout(() => loading.value = false, 2000)
} 
</script>

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
```vue
```
:::
