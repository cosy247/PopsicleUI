<template>
  <LayoutGrid class="grid">
    <LayoutGridItem class="item" :row="[1]" :column="[1, 10]">header</LayoutGridItem>
    <LayoutGridItem class="item" :row="[2, 9]" :column="[1]">side</LayoutGridItem>
    <LayoutGridItem class="item" :row="[2, 9]" :column="[2, 10]">content</LayoutGridItem>
    <LayoutGridItem class="item" :row="[10]" :column="[1, 10]">footer</LayoutGridItem>
  </LayoutGrid>
</template>

<script setup>
import { LayoutGrid, LayoutGridItem } from 'popsicle-ui';
</script>

<style scoped>
.grid {
  width: 100%;
  height: 300px;
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
