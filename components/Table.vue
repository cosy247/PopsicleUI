<template>
  <div class="STable">
    <table>
      <tbody>
        <STableTr :isTh="true">
          <slot />
        </STableTr>
        <STableTr v-for="(row, index) in props.data" :isTh="false" :row="row" :index="index">
          <slot />
        </STableTr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { provide, ref, toRef } from 'vue';
import STableTr from './TableTr.vue';

const emits = defineEmits(['contextmenu']);
const props = defineProps(['data', 'thAlign', 'tdAlign', 'tAlign']);
const data = toRef(props, 'data');

provide('emits', emits);
provide('tAlign', toRef(props, 'tAlign'));
provide('thAlign', toRef(props, 'thAlign'));
provide('tdAlign', toRef(props, 'tdAlign'));
</script>

<style scoped>
.STable {
  width: 100%;
  border: 1px solid #eee;
  border-radius: 4px;
  overflow: auto;
  box-sizing: border-box;
}
.STable::-webkit-scrollbar {
  width: 6px;
  border-left: 1px solid #eee;
}
.STable::-webkit-scrollbar-track {
  border-radius: 10px;
}
.STable::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px #2453b988;
  background-color: #fff8;
}
table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}
</style>
