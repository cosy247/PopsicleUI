<template>
  <div :style="{ gridArea }">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  row: Array<number>;
  column: Array<number>;
}>();

const gridArea = computed(() => {
  let [rowStart = 1, rowEnd = rowStart] = props.row;
  let [cloumnStart = 1, cloumnEnd = cloumnStart] = props.column;
  return `${rowStart}/${cloumnStart}/${rowEnd + 1}/${cloumnEnd + 1}`;
});
</script>
