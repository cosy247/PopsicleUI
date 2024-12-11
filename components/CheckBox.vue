<template>
  <div class="p-checkBox" @click="handleClick" :class="{ 'psc-active': checked }">
    <svg class="p-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M375.69602782 862.91233863L9.526631 501.82862826l71.19960574-71.19960572 294.96979108 294.96979228L940.20718127 156.00197492l71.19960572 71.19960572L375.69602782 862.91233863z"
        fill="#fff"></path>
    </svg>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue';
import { toInt } from '../utils/props';

const props = defineProps({
  value: {},
  maxCount: toInt(),
});
const modle = defineModel();
if (typeof modle.value === 'undefined') {
  modle.value = props.value;
}

const checked = computed(() => {
  if (!Array.isArray(modle.value)) return modle.value;
  return modle.value.includes(props.value);
});

watch(
  () => props.maxCount,
  () => {
    if (props.maxCount > 0 && modle.value.length > props.maxCount) {
      modle.value.length = props.maxCount;
    }
  }
);

function handleClick() {
  if (Array.isArray(modle.value)) {
    const index = modle.value.findIndex((item) => item === props.value);
    if (index >= 0) {
      modle.value.splice(index, 1);
    } else {
      modle.value.unshift(props.value);
      if (props.maxCount > 0 && modle.value.length > props.maxCount) {
        modle.value.length = props.maxCount;
      }
    }
  } else {
    modle.value = !modle.value;
  }
}
</script>

<style scoped>
.p-checkBox {
  display: inline-flex;
  cursor: pointer;
  gap: 5px;
  color: #444;
}
.p-icon {
  padding: 0.1em;
  box-sizing: border-box;
  margin: auto;
  background: white;
  border-radius: 0.25em;
  border: 1px solid #aaa;
  transition: 0.2s;
  width: 1.1em;
  height: 1.1em;
  vertical-align: auto;
}
.psc-active .p-icon {
  background: #409eff;
}
</style>
