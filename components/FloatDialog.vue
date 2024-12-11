<template>
  <div class="FloatDialog" v-show="model" @click.self.left="close($event)" @click.self.right="close($event)">
    <Card class="card" :style="cardPosition">
      <slot />
    </Card>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import Card from './Card.vue';

// 显示隐藏
const model = defineModel();
const { position, center, outClose } = defineProps(['position', 'center', 'outClose']);

// 击外界关闭功能
function close(event) {
  if (outClose) {
    event.preventDefault();
    model.value = false;
  }
}

// 位置
const cardPosition = computed(() => {
  if (center) {
    return {
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    };
  }
  const left = position.left || position.x;
  const top = position.top || position.y;
  return {
    left: isNaN(left) ? left : `${left}px`,
    top: isNaN(top) ? top : `${top}px`,
  };
});
</script>

<style scoped>
.FloatDialog {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: #4444;
}
.card {
  position: absolute;
  width: fit-content;
}
</style>
