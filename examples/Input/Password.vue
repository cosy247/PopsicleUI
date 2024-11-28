<template>
  <div class="main">
    <Input password placeholder="始终不显示。" />
    <Input password showPasswordType placeholder="点击显示。" />
    <Input password showPasswordType="hover" placeholder="触摸显示。" />
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
