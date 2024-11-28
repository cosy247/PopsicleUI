<template>
  <div class="main">
    <Input value="size=18" :size="18" />
    <Input value="size=18" :size="15" />
    <Input value="font-size: 12px" style="font-size: 12px" />
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
