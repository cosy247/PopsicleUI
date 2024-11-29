<template>
  <div class="mdContent">
    <template v-for="content in mdContents">
      <div v-if="content.type === 'markdown'" v-html="content.content"></div>
      <component class="component" v-if="content.type === 'component'" :is="content.name" :rags="content.rags" />
    </template>
  </div>
</template>

<script setup>
import '../styles/md.css';
import { ref, watch } from 'vue';
import renderMd from '@/utils/renderMd';
import { docsRaws } from '@/utils/modules';

const props = defineProps(['path']);
const mdContents = ref([]);
watch(
  () => props.path,
  async () => {
    if (docsRaws[props.path]) {
      const raw = await docsRaws[props.path]();
      mdContents.value = raw.split(/(?<!\:)\:{3}(?!\:)/).map((content, index) => {
        if (index % 2) {
          const [name, ...rags] = content.split(' ');
          return { type: 'component', name, rags: rags?.join(' ') };
        } else {
          return { type: 'markdown', content: renderMd(content) };
        }
      });
    } else {
      console.log('🍩🍩没有路径:', props.path);
    }
  },
  { immediate: true }
);
</script>

<style scoped>
.mdContent {
  width: var(--article-witdh);
  margin: auto;
}
.component {
  margin: 20px 0;
}
</style>
