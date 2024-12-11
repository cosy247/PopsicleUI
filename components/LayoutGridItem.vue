<template>
  <div :style="{ gridArea }">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { toArray } from '../utils/props';

const { row, column } = defineProps({
  row: toArray(Number),
  column: toArray(Number),
});
const gridArea = computed(() => {
  let [rowStart = 1, rowEnd = rowStart] = row;
  let [cloumnStart = 1, cloumnEnd = cloumnStart] = column;
  return `${rowStart}/${cloumnStart}/${rowEnd + 1}/${cloumnEnd + 1}`;
});
</script>
