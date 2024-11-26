<template>
  <Button :loading="loading" @click="load" type="plain">
    加载
    <template #loading>加载中...</template>
  </Button>
</template>

<script setup>
import { Button } from 'popsicle-ui';
import { ref } from 'vue';

const loading = ref(false);

function load() {
  loading.value = true;
  setTimeout(() => (loading.value = false), 2000);
}
</script>
