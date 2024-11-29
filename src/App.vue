<template>
  <Header />
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
</script>
