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
console.log(style);
</script>

<style scoped>
.LayoutGrid {
  display: grid;
}
</style>
