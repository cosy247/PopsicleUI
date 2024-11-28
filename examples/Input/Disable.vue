<template>
  <div class="main">
    <Input :disable="true" placeholder="禁用状态。" />
    <Input readonly placeholder="只读状态。" />
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
