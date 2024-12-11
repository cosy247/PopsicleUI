<template>
  <component class="STableCol" :is="scop.isTh ? 'th' : 'td'" @contextmenu="handleContextmenu($event)" :style="style">
    <slot v-if="scop.isTh" name="th">
      {{ props.label }}
    </slot>
    <slot v-else v-bind="{ row: scop.row, index: scop.index }">
      {{ scop.row[props.prop] }}
    </slot>
  </component>
</template>

<script setup>
import { computed, getCurrentInstance, inject, toRef } from 'vue';

const emits = inject('emits');
const rootTAlign = inject('tAlign');
const rootThAlign = inject('thAlign');
const rootTdAlign = inject('tdAlign');
const props = defineProps(['label', 'prop', 'thAlign', 'tdAlign', 'tAlign']);
const scop = toRef(getCurrentInstance().parent.props);

const style = computed(() => {
  return {
    textAlign:
      (scop.value.isTh ? props.thAlign : props.tdAlign) ||
      props.tAlign ||
      (scop.value.isTh ? rootThAlign.value : rootTdAlign.value) ||
      rootTAlign.value ||
      'left',
  };
});

function handleContextmenu(event) {
  emits('contextmenu', { event, label: props.label, prop: props.prop, isTh: scop.isTh, row: scop.row, index: scop.index });
}
</script>

<style scoped>
.STableCol {
  padding: 0.5em;
  color: #383739;
}
.STableCol + .STableCol {
  border-left: 1px solid #eee;
}
td.STableCol + .STableCol {
  border-top: 1px solid #eee;
}
th.STableCol {
  white-space: nowrap;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #eee;
  background: white;
  z-index: 9;
}
</style>
