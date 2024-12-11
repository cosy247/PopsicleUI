<template>
  <div class="Dialog" :center="true" v-if="model" :outClose="false">
    <div class="main" :style="{ minWidth: toSize(props.minWidth) }">
      <slot name="header" v-if="!props.hiddenHeader">
        <div class="title">
          <p>
            <slot name="icon" />
            {{ props.title }}
          </p>
          <svg
            @click="handleClose"
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
        </div>
      </slot>
      <div class="content">
        <slot />
      </div>
      <div class="footer flexRowContent" v-if="!props.hiddenFooter">
        <slot name="footer">
          <slot name="footerLeft">
            <div style="flex: 1"></div>
          </slot>
          <Button @click="handleConfirm">确认</Button>
          <Button @click="handleClose" type="plain" theme="gray">取消</Button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from './Button.vue';
import { toBoolean, toSize } from '../utils/props';

const emits = defineEmits(['confirm', 'close']);
const model = defineModel();
const props = defineProps({
  title: toString(),
  minWidth: [String, Number],
  hiddenHeader: toBoolean(),
  hiddenFooter: toBoolean(),
});

function handleConfirm() {
  emits('confirm');
}

function handleClose(yes = false) {
  model.value = false;
  emits('close');
}
</script>

<style scoped>
.Dialog {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #3338;
  z-index: 999;
  display: flex;
}
.main {
  margin: auto;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 10px #8888;
}
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 350px;
  padding: 10px 20px;
  font-size: 18px;
  border-bottom: 1px solid #d8d9d7;
}
.title svg {
  cursor: pointer;
}
.content {
  padding: 20px;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 20px;
}
</style>
