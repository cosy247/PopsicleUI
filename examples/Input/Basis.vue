<template>
  <Input v-model="name" placeholder="请输入内容。"/>
</template>

<script setup>
import { Input } from 'popsicle-ui';
import { ref } from 'vue';

const name = ref('');
</script>
