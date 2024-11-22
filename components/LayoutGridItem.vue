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
