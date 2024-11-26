<template>
  <div class="main">
    <Input :disable="true" placeholder="请输入内容。" />
    <Input disable placeholder="请输入内容。" />
    <Input :disable="false" placeholder="请输入内容。" />
  </div>
</template>

<script setup>
import { Input } from 'popsicle-ui';
</script>

<style>
.main {
  display: flex;
  gap: 10px;
}
</style>
