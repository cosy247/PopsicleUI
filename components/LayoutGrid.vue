<template>
  <div class="LayoutGrid" :style="style">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { toInt, toSize } from '../utils/props';

const props = defineProps({
  row: toInt([1]),
  column: toInt([1]),
  gap: [String, Number],
  gapRow: [String, Number],
  gapColumn: [String, Number],
});

const style = computed(() => {
  let gapRow0, gapColumn0;
  if (typeof props.gap === 'undefined') {
    gapRow0 = toSize(props.gapRow);
    gapColumn0 = toSize(props.gapColumn);
  } else {
    gapRow0 = gapColumn0 = toSize(props.gap);
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
