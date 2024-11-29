<template>
  <div class="archive">
    <div class="archive-art" v-for="art in archives">
      <p class="archive-art-title">{{ art.name }}</p>
      <RouterLink class="archive-art-item" v-for="item in art.links" :to="item.to">{{ item.name }}</RouterLink>
    </div>
  </div>
  <MdContent path="/docs/use.md"/>
  <div class="toc"></div>
</template>

<script setup>
import MdContent from '../components/MdContent.vue';

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
</script>

<style scoped>
.archive {
  position: fixed;
  top: calc(5vh + var(--header-height));
  right: calc(50% + var(--article-witdh) / 2);
  height: calc(90vh - var(--header-height));
  border-right: 1px solid #eee;
  margin-right: 20px;
  padding: 20px;
  box-sizing: border-box;
}
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
  transition: 0.1s;
}
.archive-art-item:hover {
  color: var(--theme-color);
}
.md {
  width: var(--article-witdh);
  margin: auto;
}
.toc {
  min-height: 80%;
  width: 0;
  flex: 1;
}
</style>
