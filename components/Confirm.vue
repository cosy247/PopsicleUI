<template>
  <Transition
    enter-active-class="animate__animated animate__bounceInRight"
    leave-active-class="animate__animated animate__bounceOutRight">
    <div class="p-confirm" v-if="isShow">
      <div class="p-main">
        <svg
          class="p-close"
          @click="showResolve(false)"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em">
          <path
            d="M511.25793607 84.04272557c57.70520453 0 113.64592123 11.28560181 166.27015737 33.54306926 50.86419846 21.51317845 96.55953789 52.32718805 135.8166106 91.5853733 39.25818525 39.2570727 70.0710823 84.95241213 91.58537328 135.81661059 22.25746745 52.62312358 33.54306926 108.56495283 33.54306926 166.27015735s-11.28560181 113.64592123-33.54306926 166.27015737c-21.51317845 50.86419846-52.32718805 96.55953789-91.58537328 135.8166106-39.2570727 39.25818525-84.95241213 70.0710823-135.8166106 91.58537328-52.62312358 22.25746745-108.56495283 33.54306926-166.27015737 33.54306926s-113.64592123-11.28560181-166.27015735-33.54306926c-50.86419846-21.51317845-96.55953789-52.32718805-135.81661059-91.58537328-39.25818525-39.2570727-70.0710823-84.95241213-91.5853733-135.8166106-22.25746745-52.62312358-33.54306926-108.56495283-33.54306926-166.27015737s11.28560181-113.64592123 33.54306926-166.27015735c21.51317845-50.86419846 52.32718805-96.55953789 91.5853733-135.81661059 39.2570727-39.25818525 84.95241213-70.0710823 135.81661059-91.5853733 52.62423612-22.25746745 108.56495283-33.54306926 166.27015735-33.54306926m0-71.20253508c-275.26900063 0-498.41774559 223.14874495-498.41774558 498.41774558s223.14874495 498.41774559 498.41774558 498.4177456 498.41774559-223.14874495 498.4177456-498.4177456-223.14874495-498.41774559-498.4177456-498.41774558z"
            fill="#888"></path>
          <path
            d="M562.34686753 512l163.95830006-163.95830005c13.90340751-13.90340751 13.90340751-36.44457257 0-50.34798008-13.90229498-13.90340751-36.44457257-13.90340751-50.34686754 0L512 461.65313247 348.04169995 297.69483241c-13.90340751-13.90340751-36.44457257-13.90340751-50.34798008 0s-13.90340751 36.44457257 0 50.34798008L461.65313247 512 297.69483241 675.95830005c-13.90340751 13.90229498-13.90340751 36.44457257 0 50.34686754C304.6459799 733.25742761 313.75767931 736.73300136 322.86826619 736.73300136s18.22228628-3.47557375 25.17343376-10.42783377L512 562.34686753l163.95830005 163.95830006C682.90944753 733.25742761 692.02114694 736.73300136 701.13173381 736.73300136s18.22228628-3.47557375 25.17343378-10.42783377c13.90340751-13.90229498 13.90340751-36.44457257 0-50.34686754L562.34686753 512z"
            fill="#888"></path>
        </svg>
        <p class="p-title">{{ title }}</p>
        <div class="p-content">{{ content }}</div>
        <div class="p-ops">
          <Button @click="showResolve(true)">确认</Button>
          <Button type="plain" @click="showResolve(false)">取消</Button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue';
import Button from './Button.vue';

const isShow = ref(false);
const title = ref('');
const content = ref('');

function showResolve(isOK) {
  isShow.value && showResolve(isOK);
  isShow.value = false;
}

defineExpose({
  show(pContent = '是否确认？', pTitle0 = '确认框') {
    isShow.value = true;
    title.value = pTitle0;
    content.value = pContent;
    return new Promise((resolve) => {
      showResolve = resolve;
    });
  },
});
</script>

<style scoped>
.p-confirm {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #8888;
  display: flex;
  z-index: 999;
}
.p-main {
  margin: auto;
  position: relative;
  border-radius: 5px;
  padding: 20px 30px;
  min-width: 400px;
  max-width: 80vw;
  background: white;
}
.p-close {
  position: absolute;
  right: 30px;
  top: 20px;
  cursor: pointer;
}
.p-title {
  font-size: 20px;
}
.p-content {
  margin-top: 25px;
  font-size: 16px;
  color: #444;
}
.p-ops {
  margin-top: 25px;
  display: flex;
  justify-content: end;
  gap: 10px;
}
</style>
