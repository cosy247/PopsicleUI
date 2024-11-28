<template>
  <div class="ButtonGroup">
    <slot />
  </div>
</template>

<style scoped>
.ButtonGroup {
  display: inline-block;
}
.ButtonGroup:deep(> .Button:first-child) {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
.ButtonGroup:deep(> .Button:last-child) {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
.ButtonGroup:deep(> .Button:nth-child(n + 2):nth-last-child(n + 2)) {
  border-radius: 0px;
}
</style>
