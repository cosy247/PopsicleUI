<template>
  <div class="Prompt" v-if="isShow">
    <div class="Prompt-main" :style="mainStyle">
      <svg
        class="Prompt-close"
        @click="handleClose(false)"
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
      <p class="Prompt-title">{{ config.title }}</p>
      <div class="Prompt-content">
        <template v-for="content in contents">
          <Input :label="content.label" :labelWidth="getLabelWidth(content)" v-model="fromData[content.key]" :value="content.value"/>
        </template>
      </div>
      <div class="Prompt-ops">
        <Button @click="handleClose(true)">确认</Button>
        <Button type="plain" @click="handleClose(false)">取消</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import Button from './Button.vue';
import Input from './Input.vue';
import { toSize } from '../utils/props';
import { message } from '..';

let resolve = null;
const isShow = ref(false);
const contents = ref([
  // { type: 'input', key: 'name', label: '名称' }
]);
const config = ref({
  // title: '请输入',
  // labelWidth: 200,
});
const fromData = ref({});
const mainStyle = computed(() => {
  return {
    width: toSize(config.value.width),
  };
});

function getLabelWidth(content) {
  return toSize(content.labelWidth || config.value.labelWidth);
}

function handleClose(yes) {
  if (!yes) {
    isShow.value = false;
    resolve && resolve(false);
    resolve = null;
  } else {
    let errorMsg = '';
    contents.value.some((content) => {
      if (typeof content.rule === 'function') {
        const msg = content.rule(fromData.value[content.key]);
        if (typeof msg === 'string') {
          errorMsg = msg;
          return true;
        }
      }
    });
    if (errorMsg) {
      message.error(errorMsg);
    } else {
			isShow.value = false;
      resolve && resolve(fromData.value);
      resolve = null;
    }
  }
}

defineExpose({
  show(pContents = [], pConfig = { title: '请输入' }) {
    contents.value = pContents;
    config.value = pConfig;
    fromData.value = {};
    isShow.value = true;
    return new Promise((rs) => (resolve = rs));
  },
});
</script>

<style scoped>
.Prompt {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #8888;
  display: flex;
  z-index: 990;
}
.Prompt-main {
  margin: auto;
  position: relative;
  border-radius: 5px;
  padding: 20px 30px;
  background: white;
}
.Prompt-close {
  position: absolute;
  right: 30px;
  top: 20px;
  cursor: pointer;
}
.Prompt-title {
  font-size: 20px;
}
.Prompt-content {
  margin-top: 25px;
  font-size: 16px;
  color: #444;
}
.Prompt-content > * {
	width: 100%;
}
.Prompt-ops {
  margin-top: 25px;
  display: flex;
  justify-content: end;
  gap: 10px;
}
</style>
