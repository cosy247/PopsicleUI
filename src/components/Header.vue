<template>
  <div class="Header">
    <div class="main">
      <RouterLink to="/" class="logo">
        <img src="../assets/logo.png" alt="" />
        PopsicleUI
      </RouterLink>
      <RouterLink class="link" to="start">指南</RouterLink>
      <RouterLink class="link" to="component">组件</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.Header {
  border-bottom: 1px solid #eee;
  box-shadow: 0 0 5px #8883;
  position: sticky;
  top: 0;
  background: white;
  height: var(--header-height);
}
.main {
  width: 1000px;
  margin: auto;
  display: flex;
  align-items: center;
}
.logo {
  background: linear-gradient(to right, #da1057, #2b28e5);
  background-clip: text;
  color: #0000;
  margin-right: auto;
  font-size: 25px;
  font-weight: 900;
}
.logo > img {
  height: 1.3em;
  vertical-align: middle;
}
.link {
  font-size: 16px;
  line-height: 60px;
  padding: 0 20px;
  font-weight: 900;
}
.link.active {
  color: var(--theme-color);
}
</style>
