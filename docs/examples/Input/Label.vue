<template>
  <div class="main">
    <Input label="用户名:" labelWidth="60px" />
    <Input>
      <template #label>插槽形式：</template>
    </Input>
  </div>
</template>

<script setup>
import { Input } from 'popsicle-ui';
</script>

<style>
.main {
  display: flex;
  gap: 10;
}
</style>
