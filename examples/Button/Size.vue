<template>
  <div class="main">
    <Button :size="19" type="plain">size=19</Button>
    <Button :size="16" type="plain">size=16</Button>
    <Button class="small" type="plain">font-size: 13px</Button>
  </div>
</template>

<script setup>
import { Button } from 'popsicle-ui';
</script>

<style scoped>
.main {
  display: flex;
  gap: 10px;
}
.small {
  font-size: 13px;
}
</style>
