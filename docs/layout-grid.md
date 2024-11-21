---
id: 1732157579949 # 文章id
title: 栅格布局 # 文章标题
description: 栅格布局 # 文章描述
tags: { tags } # 文章标签
archive: 组件 # 文章归档
archiveTitle: 布局 # 文章归档目录标题
archiveTop: 100 # 文章归档排序，数字越大越靠前
recommendations: { recommendations } # 相关推荐id
shadow: { shadow } # 是否隐藏
top: { top } # 是否zhi置顶，数字越大优先级越高
---

# 栅格布局

使用栅格对页面进行划分布局。

## 基础使用

:::dome  
<template>
  <div class="demo-row" v-for="row in demoList">
    <bp-row>
      <bp-col v-for="col in row" :span="col">
        <div class="demo">col - {{ col }}</div>
      </bp-col>
    </bp-row>
  </div>
</template>

<script setup lang="ts">
const demoList = [[24], [12, 12], [8, 8, 8], [6, 6, 6, 6], [4, 4, 4, 4, 4, 4]];
</script>

<style scoped></style>

:::

## 属性
