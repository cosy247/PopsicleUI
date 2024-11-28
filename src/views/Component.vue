<template>
  <div class="Component">
    <div class="archive">
      <div class="archive-art" v-for="art in archives">
        <p class="archive-art-title">{{ art.name }}</p>
        <RouterLink class="archive-art-item" v-for="item in art.links" :to="item.to">{{ item.name }}</RouterLink>
      </div>
    </div>
    <div class="md" v-html="result"></div>
    <div class="toc"></div>
  </div>
</template>

<script setup>
import markdownit from 'markdown-it';
import mdtext from '../../docs/Button.md?raw';

const archives = [
  {
    name: '布局',
    links: [
      { name: '网格布局 LayoutGrid', to: 'layoutGrid' },
      { name: '弹性布局 LayoutFlex', to: 'layoutFlex' },
    ],
  },
  {
    name: '基础',
    links: [{ name: '按钮 Button', to: 'button' }],
  },
  {
    name: '表单',
    links: [{ name: '输入框 Input', to: 'input' }],
  },
];
const md = markdownit({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }
    return ''; // use external default escaping
  },
});
const result = md.render(mdtext);
</script>

<style scoped>
.archive-art + .archive-art {
  margin-top: 20px;
}
.archive-art-title {
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 20px;
}
.archive-art-item {
  display: block;
  margin-bottom: 10px;
  white-space: nowrap;
}
.toc {
  min-height: 80%;
  width: 0;
  flex: 1;
}
.md {
  width: 750px;
  flex-shrink: 0;
  height: 100%;
}
.archive {
  border-right: 1px solid #eee;
  min-height: 80%;
  width: 0;
  flex: 1;
  padding-right: 20px;
}
.Component {
  display: flex;
  align-items: center;
  width: 1100px;
  gap: 10px;
  margin: auto;
}
</style>
