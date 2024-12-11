<template>
  <tr class="STableTr" :class="{ tdr: !isTh }">
    <slot />
  </tr>
</template>

<script setup>
defineProps(['isTh', 'row', 'index']);
</script>

<style scoped>
.tdr.STableTr:hover {
  background: #ebf0f8;
}
.STableTr:nth-child(2n) {
  background: #ebf0f888;
}
</style>
