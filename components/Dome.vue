<template>
  <div class="Dome">
    <div class="show" v-if="!hiddenTemp">
      <template v-if="AsyncComp">
        <AsyncComp />
      </template>
    </div>
    <div class="tools">
      <div class="tool-text">{{ text }}</div>
      <div class="tool" :class="{ active: isShowCode }" @click="isShowCode = !isShowCode">&#xec83;</div>
      <div class="tool" @click="copyToClip">&#xec7a;</div>
    </div>
    <div class="code" :style="{ height: isShowCode ? codeHeight : '0px' }">
      <highlight ref="highlightDom" class="highlight" :code="content" />
    </div>
  </div>
</template>

<script setup>
import 'highlight.js/lib/common';
import 'highlight.js/styles/github.css';
import hljsVuePlugin from '@highlightjs/vue-plugin';
import { defineAsyncComponent, nextTick, ref } from 'vue';

const highlight = hljsVuePlugin.component;
const { params } = defineProps(['params', 'contents']);
const text = params.match(/(?<=\btitle=(['|"])).*?(?=\1)/)?.[0] || '';
const file = params.match(/(?<=\bfile=(['|"])).*?(?=\1)/)?.[0] || '';
const hiddenTemp = !!params.match(/\bhiddenTemp\b/);
const content = ref('');
const isShowCode = ref(false);
const highlightDom = ref(null);
const codeHeight = ref('0px');

const AsyncComp = defineAsyncComponent(() => import(file));

import(`${file}?raw`).then((d) => {
  content.value = d.default;
  nextTick(() => {
    codeHeight.value = getComputedStyle(highlightDom.value.$el).height;
  });
});

function copyToClip() {
  navigator.clipboard.writeText(content.value).then(() => {});
}
</script>

<style scoped>
.Dome {
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: hidden;
}
.show {
  padding: 20px;
  margin: auto;
}
.tools {
  padding: 10px 20px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: flex-end;
  gap: 15px;
}
.tool-text {
  margin-right: auto;
}
.tool {
  border: 1px solid #eee;
  color: #666;
  width: 1.5em;
  line-height: 1.5em;
  text-align: center;
  border-radius: 3px;
  cursor: pointer;
}
.tool.active {
  background: var(--color-theme);
  color: white;
}
.code {
  transition: 0.5s;
  overflow: hidden;
  border-top: 1px solid #eee;
}
.highlight {
  padding: 0 10px;
}
</style>
