<template>
  <div class="Button" :class="className" :style="style" @click="handleClick">
    <slot v-if="loading" name="loading"></slot>
    <slot v-else></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const emits = defineEmits(['click']);
const { shape, type, size, disable, loading } = defineProps<{
  shape?: 'square' | 'round' | 'circle';
  type?: 'plain' | 'rich' | 'text';
  size?: Number;
  disable?: boolean;
  loading?: boolean;
}>();
const className = computed(() => {
  let classList: Array<String> = [];
  if (shape) classList.push(shape);
  if (type) classList.push(type);
  if (disable) classList.push('disable');
  if (loading) classList.push('loading disable');
  return classList.join(' ');
});
const style = computed(() => {
  let style = '';
  if (size) style += `font-size: ${size}px;`;
  return style;
});

function handleClick(...arg: Array<any>) {
  !disable && emits('click', ...arg);
}
</script>

<style scoped>
.Button {
  position: relative;
  display: inline-block;
  border: 1px solid #ddd;
  padding: 1.1em 1.1em;
  background: white;
  cursor: pointer;
  height: 0;
  line-height: 0;
  color: #444;
  border-radius: 0.5em;
  transition: background 0.2s;
}
.Button:hover {
  background: #e6f4ff;
  border-color: #5dadea;
}
.Button.disable::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff8;
  cursor: not-allowed;
  border-radius: inherit;
}
.Button.plain {
  background: #e6f4ff;
  border-color: #bfe1fb;
  color: #2593e7;
}
.Button.plain:hover {
  background: #d9eeff;
  border-color: #bfe1fb;
  color: #0190fd;
}
.Button.rich {
  background: #287ef6;
  border-color: #287ef6;
  color: #fff;
}
.Button.rich:hover {
  background: #539bff;
  border-color: #287ef6;
}
.Button.square {
  border-radius: 0;
}
.Button.round {
  border-radius: 1.5em;
}
.Button.circle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 2.2em;
  height: 2.2em;
  border-radius: 1.1em;
}
</style>
