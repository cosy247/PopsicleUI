<template>
  <div class="main">
    <Input :clearable="true" placeholder="可清空的。" />
    <Input clearable placeholder="可清空的。" />
    <Input :clearable="false" placeholder="不可清空的。" />
  </div>
</template>

<script setup>
import { Input } from 'popsicle-ui';
</script>

<style>
.main {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
