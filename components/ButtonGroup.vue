<template>
  <div class="ButtonGroup">
    <slot />
  </div>
</template>

<style scoped>
.ButtonGroup >>> .Button:first-child {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
.ButtonGroup >>> .Button:last-child {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
.ButtonGroup >>> .Button:nth-child(n + 2):nth-last-child(n + 2) {
  border-radius: 0px;
}
</style>
