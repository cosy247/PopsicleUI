<template>
  <div class="main">
    <ButtonGroup>
      <Button type="plain">编辑</Button>
      <Button type="plain">分享</Button>
      <Button type="plain">还原</Button>
      <Button type="plain">删除</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button type="plain" shape="round">编辑</Button>
      <Button type="plain">分享</Button>
      <Button type="plain">还原</Button>
      <Button type="plain" shape="round">删除</Button>
    </ButtonGroup>
  </div>
</template>

<script setup>
import { Button, ButtonGroup } from 'popsicle-ui';
</script>

<style scoped>
.main {
  display: flex;
  gap: 10px;
}
</style>
