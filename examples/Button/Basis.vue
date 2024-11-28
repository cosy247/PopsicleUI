<template>
  <div class="main">
    <Button shape="square">方形</Button>
    <Button>圆角矩形</Button>
    <Button shape="round">矩圆形</Button>
    <Button shape="circle">圆</Button>
  </div>
  <div class="main">
    <Button type="plain" shape="square">方形</Button>
    <Button type="plain">圆角矩形</Button>
    <Button type="plain" shape="round">矩圆形</Button>
    <Button type="plain" shape="circle">圆</Button>
  </div>
  <div class="main">
    <Button type="rich" shape="square">方形</Button>
    <Button type="rich">圆角矩形</Button>
    <Button type="rich" shape="round">矩圆形</Button>
    <Button type="rich" shape="circle">圆</Button>
  </div>
</template>

<script setup>
import { Button } from 'popsicle-ui';
</script>

<style scoped>
.main {
  display: flex;
  gap: 10px;
}
.main + .main {
  margin-top: 10px;
}
</style>
