<template>
  <div class="mdContent">
    <template v-for="content in mdContents">
      <div v-if="content.type === 'markdown'" v-html="content.content" />
      <component v-if="content.type === 'component'" :is="content.name" :rags="content.rags" />
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import '../styles/md.css';
import renderMd from '@/utils/renderMd';

const props = defineProps(['path']);
const mdContents = ref([]);
import(`/docs/use.md?raw`).then((d) => {
  mdContents.value = d.default.split(/(?<!\:)\:{3}(?!\:)/).map((content, index) => {
    if (index % 2) {
      const [name, ...rags] = content.split(' ');
      return { type: 'component', name, rags };
    } else {
      return { type: 'markdown', content: renderMd(content) };
    }
  });
});
</script>

<style scoped>
.mdContent {
  width: var(--article-witdh);
  margin: auto;
}
</style>
