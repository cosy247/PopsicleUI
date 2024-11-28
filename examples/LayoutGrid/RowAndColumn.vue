<template>
  <LayoutGrid class="grid" :row="15" :column="20" :gap="5">
    <LayoutGridItem class="item" :row="[1, 2]" :column="[1, 20]">header</LayoutGridItem>
    <LayoutGridItem class="item" :row="[3, 14]" :column="[1, 4]">side</LayoutGridItem>
    <LayoutGridItem class="item" :row="[3, 14]" :column="[5, 20]">content</LayoutGridItem>
    <LayoutGridItem class="item" :row="[15]" :column="[1, 20]">footer</LayoutGridItem>
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
