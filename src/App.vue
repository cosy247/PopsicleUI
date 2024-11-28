<template>
  <div class="main">
    <Header />
    <RouterView class="content" />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
</script>

<style scoped>
.main {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.content {
  flex: 1;
  height: 0;
  overflow: auto;
}
</style>
