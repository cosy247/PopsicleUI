<template>
  <div class="main">
    <Input label="水果：" v-model="model" :promptList="promptList" placeholder="您喜欢的水果。" />
    <Input label="promptKey：" v-model="model" :promptList="promptList2" promptKey="name" placeholder="您喜欢的水果。" />
    <Input label="插槽：" v-model="model" :promptList="promptList2" placeholder="您喜欢的水果。">
      <template #prompt="scope">
        <p @click="model = scope.item.name">{{ scope.index }}: {{ scope.item.name }}</p>
      </template>
    </Input>
    <Input label="自动筛选：" v-model="model" :promptList="promptList" placeholder="您喜欢的水果。" promptFilter></Input>
  </div>
</template>

<script setup>
import { Input } from 'popsicle-ui';
import { ref } from 'vue';

const promptList = ['西瓜🍉', '苹果🍎', '桃子🍑', '香蕉🍌'];
const promptList2 = [
  { key: 0, name: '西瓜🍉' },
  { key: 1, name: '苹果🍎' },
  { key: 2, name: '桃子🍑' },
  { key: 3, name: '香蕉🍌' },
];
const model = ref('');
</script>

<style>
.main {
  display: flex;
  gap: 10px;
}
</style>
