<!-- 封装消息提示插件 -->
<template>
  <Transition
    enter-active-class="animate__animated animate__bounceInRight"
    leave-active-class="animate__animated animate__bounceOutRight">
    <div v-if="isShow" class="message">{{ tipText }}</div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue';

const isShow = ref(false);
const tipText = ref('默认提示内容');

defineExpose({
  show(str, time) {
    tipText.value = str;
    isShow.value = true;
    setTimeout(() => {
      isShow.value = false;
    }, time);
  },
});
</script>

<style scoped>
.message {
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  border-radius: 5px;
  background-color: rgba(200, 217, 217, 0.5);
  position: fixed;
  top: 50px;
  right: 100px;
}
</style>
