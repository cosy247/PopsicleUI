<template>
  <div class="Tree">
    <TreeItem :data="item" :level="0" v-for="(item, index) in props.data" :namePath="[item.name]" :indexPath="[index]">
      <template #="data">
        <slot v-bind="data" />
      </template>
      <template #leftIcon="data">
        <slot name="leftIcon" v-bind="data" />
      </template>
      <template #rightIcon="data">
        <slot name="rightIcon" v-bind="data" />
      </template>
    </TreeItem>
  </div>
</template>

<script setup>
import { provide, toRef } from 'vue';
import { toArray, toString } from '../utils/props';
import TreeItem from './TreeItem.vue';

const emits = defineEmits(['nodeClick']);
const props = defineProps({
  data: toArray(),
  filter: toString(''),
});

provide('emits', emits);
provide('filter', toRef(props, 'filter'));
</script>
