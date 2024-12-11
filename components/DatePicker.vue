<template>
  <div class="DatePicker" :style="style">
    <slot name="label">
      <p v-show="props.label" class="label" :style="{ width: toSize(labelWidth) }">{{ props.label }}</p>
    </slot>
    <div class="main">
      <!-- <Icon class="main-icon" name="calendar" /> -->
      <input class="tag" :type="props.type" v-model="model" @focus="showCalendar" />
      <!-- <div class="calendar"></div> -->
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, ref, watch } from 'vue';
import { toBoolean, toEnum, toSize } from '../utils/props';
import Icon from './Icon.vue';

const props = defineProps({
  size: [String, Number],
  value: [String, Number],
  disable: toBoolean(),
  label: String,
  labelWidth: [String, Number],
  readonly: toBoolean(),
  type: toEnum(['date', 'time', 'datetime'], 'date'),
  range: toBoolean(),
});

// 绑定值
const model = defineModel();
nextTick(() => {
  watch(
    () => props.value,
    () => {
      if (typeof props.value === 'undefined') return;
      model.value = new Date(props.value);
    },
    { immediate: true }
  );
});

const style = computed(() => {
  return {
    fontSize: toSize(props.size),
  };
});

const isShowCalendat = ref(false);
function showCalendar() {
  isShowCalendat.value = true;
}
</script>

<style scoped>
.DatePicker {
  display: flex;
  align-items: center;
  gap: 10px;
}
.main {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  width: 14em;
  gap: 10px;
  border: 1px solid #aaa;
  border-radius: 0.25em;
  background: white;
  color: #555;
  transition: border 0.2s;
  box-sizing: border-box;
  padding: 0 0.5em;
}
.main:has(.tag:focus),
.main:hover {
  border-color: #287ef6;
}
.main-icon {
  position: relative;
  top: -2px;
}
.tag {
  flex: 1;
  width: 0;
  background: white;
  border: none;
  outline: none;
  color: #555;
  font-size: 0.9em;
  transition: border 0.2s;
  box-sizing: border-box;
  font-family: inherit;
  padding: 0.5em 0;
  border-radius: 0.25em;
}
.main-value {
  flex: 1;
  color: #666;
}
.calendar {
  position: absolute;
  left: 0px;
  top: 105%;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 0.4em;
  background: white;
  box-shadow: 0 0 10px #8883;
}
</style>
