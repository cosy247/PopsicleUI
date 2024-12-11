<template>
  <div class="CheckBoxGroup" :style="style">
    <p class="label" :style="{ width: toSize(labelWidth) }">{{ props.label }}</p>
    <CheckBox v-model="model" v-for="option in options" :value="option">{{ option }}</CheckBox>
  </div>
</template>

<script setup>
import { computed, nextTick, watch } from 'vue';
import { toArray, toBoolean, toSize } from '../utils/props';
import CheckBox from './CheckBox.vue';

const props = defineProps({
  size: [String, Number],
  value: [String, Number],
  disable: toBoolean(),
  label: String,
  labelWidth: [String, Number],
  readonly: toBoolean(),
  options: toArray(),
});

// 绑定值
const model = defineModel();
nextTick(() => {
  watch(
    () => props.value,
    () => {
      if (typeof props.value === 'undefined') return;
      model.value = props.value;
    },
    { immediate: true }
  );
});

const style = computed(() => {
  return {
    fontSize: toSize(props.size),
  };
});
</script>

<style scoped>
.CheckBoxGroup {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
