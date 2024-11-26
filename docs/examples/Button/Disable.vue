<template>
  <div class="main">
    <Button type="plain" @click="sendMessage">非禁用</Button>
    <Button :disable="true" type="plain" @click="sendMessage">禁用</Button>
  </div>
</template>

<script setup>
import { Button } from 'popsicle-ui';

function sendMessage() {
  alert('可以使用');
}
</script>

<style scoped>
.main {
  display: flex;
  gap: 10px;
}
</style>
