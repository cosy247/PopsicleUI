<template>
  <div class="psc-button" :class="className" :style="style" @click="handleClick">
    <slot v-if="props.loading" name="loading"></slot>
    <slot v-else></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { toBoolean, toEnum, toSize } from '../utils/props';

const emits = defineEmits(['click']);
const props = defineProps({
  /** 形状(roundRect)：rect, roundRect, round */
  shape: toEnum(['rect', 'roundRect', 'round'], 'roundRect'),
  /** 样式类型(rich)：plain, rich, text */
  type: toEnum(['plain', 'rich', 'text'], 'rich'),
  /** 样式主题(blue)：white, blue, green, yellow, gray, grey, red */
  theme: toEnum(['white', 'blue', 'green', 'yellow', 'gray', 'grey', 'red'], 'blue'),
  /** 尺寸 */
  size: [String, Number],
  /** 是否禁用 */
  disable: toBoolean(),
  /** 是否处于加载中 */
  loading: toBoolean(),
});
const className = computed(() => {
  let classList = [`psc-${props.shape}`, `psc-${props.type}`, `psc-${props.theme}`];
  if (props.loading) classList.push('psc-loading psc-disable');
  else if (props.disable) classList.push('psc-disable');
  return classList.join(' ');
});
const style = computed(() => {
  return { fontSize: toSize(props.size) };
});

function handleClick(...arg) {
  !props.disable && emits('click', ...arg);
}
</script>

<style scoped>
.psc-button {
  position: relative;
  display: inline-block;
  border-width: 1px;
  border-style: solid;
  padding: 0.9em 1.1em;
  cursor: pointer;
  height: 0;
  line-height: 0;
  color: #444;
  transition: background 0.2s;
  text-align: center;
  white-space: nowrap;
}
.psc-button:hover {
  background: var(--psc-button-hover-background);
  color: var(--psc-button-hover-color);
  border-color: var(--psc-button-hover-border-color);
}
.psc-button.psc-disable {
  filter: grayscale(1);
  cursor: not-allowed;
}
/* shape */
.psc-button.psc-roundRect {
  border-radius: 0.25em;
}
.psc-button.psc-rect {
  border-radius: 0;
}
.psc-button.psc-round {
  border-radius: 1.5em;
}
/* type */
.psc-button.psc-plain {
  background: #e6f4ff;
  border-color: #bfe1fb;
  color: #2593e7;
}
.psc-button.psc-rich {
  background: #287ef6;
  border-color: #287ef6;
  color: #fff;
}
.psc-button.psc-text {
  padding: 0;
  height: auto;
  line-height: auto;
  border: none;
  color: #2593e7;
}
/* theme */
.psc-button.psc-white {
}
.psc-button.psc-white:hover {
}
.psc-button.psc-green {
}
</style>
