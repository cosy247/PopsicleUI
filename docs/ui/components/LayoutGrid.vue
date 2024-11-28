<template>
  <div class="LayoutGrid" :style="style">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  row?: number;
  column?: number;
  gap?: number | string;
  gapRow?: number | string;
  gapColumn?: number | string;
}>();

const style = computed(() => {
  let gapRow0: string, gapColumn0: string;
  if (typeof props.gap === 'undefined') {
    gapRow0 = typeof props.gapRow === 'number' ? `${props.gapRow}px` : props.gapRow || '0';
    gapColumn0 = typeof props.gapColumn === 'number' ? `${props.gapColumn}px` : props.gapColumn || '0';
  } else {
    gapRow0 = gapColumn0 = typeof props.gap === 'number' ? `${props.gap}px` : props.gap;
  }
  return {
    grid: `repeat(${props.row}, minmax(0, 1fr)) / repeat(${props.column}, minmax(0, 1fr))`,
    gap: `${gapRow0} ${gapColumn0}`,
  };
});
</script>

<style scoped>
.LayoutGrid {
  display: grid;
}
</style>
