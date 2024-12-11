<template>
  <div class="Input" :class="classList" :style="style">
    <slot name="label">
      <p v-show="props.label" class="label" :style="labelStyle">{{ props.label }}</p>
    </slot>
    <div class="main">
      <slot name="left" />
      <textarea
        v-if="props.type === 'textarea'"
        class="tag"
        v-on="events"
        v-model="model"
        :placeholder="props.placeholder"></textarea>
      <input
        v-else
        v-on="events"
        class="tag"
        :type="props.type"
        v-model="model"
        :placeholder="props.placeholder"
        :maxlength="props.maxLength" />
      <Icon name="fork" v-show="model && props.clearable" class="clear" @click="model = ''" />
      <div v-show="props.maxLength && showLimit" class="limit">{{ model?.length || 0 }}/{{ props.maxLength }}</div>
      <svg
        class="see"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        v-if="isShowSee"
        @click="handleSeeClick"
        @mouseenter="showHoverPassword"
        @mouseleave="hiddenHoverPassword">
        <path
          v-if="isSeePassword"
          d="M512 258.31640214c-192.79953428 0-339.93602203 81.17875186-446.48313333 253.68359786 106.54711127 172.50484722 253.68359786 253.68359786 446.48313333 253.68359786s339.93602203-81.17875186 446.48313333-253.68359786c-106.54711127-172.50484722-253.68359786-253.68359786-446.48313333-253.68359786z m0 558.10391577c-218.16789491 0-390.67274091-101.4734389-507.36719688-304.42031791 116.69445481-202.94687899 289.199302-304.42031791 507.36719688-304.42031791s390.67274091 101.4734389 507.36719688 304.42031791c-116.69445481 202.94687899-289.199302 304.42031791-507.36719688 304.42031791z m0-202.94687901c55.8103912 0 101.4734389-45.66304769 101.4734389-101.4734389s-45.66304769-101.4734389-101.4734389-101.4734389-101.4734389 45.66304769-101.4734389 101.4734389 45.66304769 101.4734389 101.4734389 101.4734389z m0 50.73672005c-86.25242303 0-152.21015895-65.95773595-152.21015895-152.21015895s65.95773595-152.21015895 152.21015895-152.21015895 152.21015895 65.95773595 152.21015895 152.21015895-65.95773595 152.21015895-152.21015895 152.21015895z"
          fill="#444444"></path>
        <path
          v-else
          d="M303.5795914 771.55811519l40.71499807-40.71499808c50.89374848 15.26812441 111.96624618 25.44687363 173.03874386 25.44687366 193.39624231 0 340.98811251-81.42999732 447.86498347-254.46873999-55.98312249-86.51937133-122.14499539-152.68124422-198.4856175-193.39624349l35.62562286-35.62562285c86.51937133 50.89374848 157.77061943 127.23437058 218.84311712 229.02186634-117.05562018 203.57499271-290.09436403 305.36248845-508.93748116 305.36248846-71.25124691 5.08937521-142.50249501-10.17874922-208.66436672-35.62562405z m-137.4131198-76.34062211c-61.07249769-45.80437327-111.96624618-111.96624618-157.77061943-188.30686829 117.05562018-203.57499271 290.09436403-305.36248845 508.93748116-305.36248846 45.80437327 0 91.60874653 5.08937521 132.3237446 15.26812443l-40.71499807 40.71499925c-30.53624885-5.08937521-55.98312249-5.08937521-91.60874653-5.0893752-193.39624231 0-340.98811251 81.42999732-447.86498347 254.46873998 40.71499806 61.07249769 86.51937133 111.96624618 137.4131198 152.68124423l-40.71499806 35.62562406z m274.82623962-55.9831225l35.62562405-35.62562405c10.17874922 5.08937521 25.44687363 5.08937521 35.62562285 5.08937521 55.98312249 0 101.78749575-45.80437327 101.78749695-101.78749695 0-15.26812441 0-25.44687363-5.08937521-35.62562285l35.62562405-35.62562405c15.26812441 20.35749962 20.35749962 45.80437327 20.35749844 76.34062211 0 86.51937133-66.16187289 152.68124422-152.68124423 152.68124422-20.35749962-5.08937521-45.80437327-15.26812441-71.2512469-25.44687364zM364.65208911 496.73187559c5.08937521-81.42999732 66.16187289-142.50249501 147.59186901-147.59186904 0 5.08937521-147.59186902 147.59186902-147.59186901 147.59186904zM781.98082372 155.74376308l35.62562285 35.62562403-610.72497691 610.72497692-40.71499806-35.62562404L781.98082372 155.74376308z"
          fill="#444444"></path>
      </svg>
      <slot name="right" />
      <div class="prompts" v-if="props.promptList.length">
        <div class="prompt" v-for="(prompt, index) in promptList">
          <slot name="prompt" :item="prompt" :index="index">
            <p
              :class="{ active: props.promptKey ? prompt[props.promptKey] === model : prompt === model }"
              @click="handlePrompt(index, prompt)">
              {{ props.promptKey ? prompt[props.promptKey] : prompt }}
            </p>
          </slot>
        </div>
      </div>
    </div>
    <slot name="rightLabel">
      <p v-show="props.rightLabel" class="label">{{ props.rightLabel }}</p>
    </slot>
  </div>
</template>

<script setup>
import { computed, nextTick, ref, watch } from 'vue';
import { toEnum, toSize, toArray, toBoolean, toInt, toString } from '../utils/props';
import Icon from './Icon.vue';

const emits = defineEmits(['change', 'focus', 'blur', 'keydown', 'keyup', 'select', 'input', 'prompt']);
const events = {
  change: () => emits('change', model.value),
  focus: () => emits('focus', model.value),
  blur: () => emits('blur', model.value),
  keydown: () => emits('keydown', model.value),
  keyup: () => emits('keyup', model.value),
  select: () => emits('select', model.value),
  input: () => emits('input', model.value),
};
const props = defineProps({
  placeholder: String,
  clearable: toBoolean(),
  size: [String, Number],
  type: toEnum(['text', 'password', 'textarea', 'number'], 'text'),
  value: [String, Number],
  disable: toBoolean(),
  maxLength: toInt([1]),
  showLimit: toBoolean(),
  label: String,
  rightLabel: String,
  labelWidth: [String, Number],
  passwordWhen: toEnum(['never', 'hover', 'click'], 'never'),
  readonly: toBoolean(),
  promptList: toArray(),
  promptKey: String,
  promptFilter: toBoolean(),
});

// 绑定值
const model = defineModel();
nextTick(() => {
  watch(
    () => props.value,
    () => {
      if (typeof props.value === 'undefined') return;
      model.value = props.value;
    },
    { immediate: true }
  );
});

// 样式处理
const classList = computed(() => {
  const classList = [];
  if (props.clearable) classList.push('clearable');
  if (props.disable) classList.push('disable');
  if (props.readonly) classList.push('readonly');
  return classList.join(' ');
});
const style = computed(() => {
  return { fontSize: toSize(props.size) };
});
const labelStyle = computed(() => {
  return { width: toSize(props.labelWidth) };
});

// password
const isSeePassword = ref(false);
const isShowSee = computed(() => {
  if (!props.password) return;
  return ['click', 'hover'].includes(props.passwordWhen || '');
});
function handleSeeClick() {
  if (props.passwordWhen === 'click') {
    isSeePassword.value = !isSeePassword.value;
  }
}
function showHoverPassword() {
  if (props.passwordWhen === 'hover') isSeePassword.value = true;
}
function hiddenHoverPassword() {
  if (props.passwordWhen === 'hover') isSeePassword.value = false;
}

// prompt
const promptList = computed(() => {
  if (props.promptList && props.promptFilter) {
    return props.promptList.filter((item) => {
      if (props.promptKey) {
        if (typeof item[props.promptKey] == 'string') {
          return item[props.promptKey].includes(model.value);
        }
      } else {
        if (typeof item == 'string') {
          return item.includes(model.value);
        }
      }
    });
  } else {
    return props.promptList;
  }
});
function handlePrompt(index, prompt) {
  model.value = props.promptKey ? prompt[props.promptKey] : prompt;
  emits('prompt', prompt, index);
}
</script>

<style scoped>
.Input {
  display: inline-flex;
  font-size: inherit;
  gap: 10px;
}
.Input.disable .main {
  cursor: not-allowed;
  background: #eee;
  border-color: #eee;
}
.Input.disable .tag {
  pointer-events: none;
  background: #eee;
}
.Input.readonly .main {
  background: #f5f5f5;
  border-color: #f5f5f5;
}
.Input.readonly .tag {
  pointer-events: none;
  background: #f5f5f5;
}
.label {
  padding: 0.25em 0;
}
.main {
  position: relative;
  display: flex;
  align-items: center;
  width: 14em;
  flex: 1;
  padding-right: 1em;
  border: 1px solid #aaa;
  border-radius: 0.25em;
  background: white;
}
.main:has(.tag:focus),
.main:hover {
  border-color: #287ef6;
}
.tag {
  flex: 1;
  width: 0;
  background: white;
  border: none;
  outline: none;
  color: #555;
  font-size: 0.9em;
  transition: border 0.2s;
  box-sizing: border-box;
  font-family: inherit;
  padding: 0.5em 0 0.5em 1em;
  border-radius: 0.25em;
}
.tag[type='password']::-ms-reveal {
  display: none;
}
.clear {
  position: relative;
  margin-left: 0.5em;
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 1em;
}
.limit {
  flex-shrink: 0;
  font-size: 0.8em;
  color: #888;
  margin-left: 0.5em;
}
.see {
  margin-left: 0.5em;
  cursor: pointer;
  user-select: none;
}
.prompts {
  position: absolute;
  left: 0;
  top: 120%;
  border: 1px solid #ddd;
  min-width: 100%;
  background: white;
  padding: 0.2em 0;
  z-index: 999;
  border-radius: 0.2em;
  transition: 0.2s;
  box-shadow: 0 0 5px #8883;
  opacity: 0;
  z-index: -1;
  visibility: hidden;
  max-height: 20em;
  overflow-y: auto;
  white-space: nowrap;
  font-size: 0.9em;
}
.tag:focus ~ .prompts {
  opacity: 1;
  top: 105%;
  z-index: 999;
  visibility: visible;
}
.prompt {
  cursor: pointer;
}
.prompt > * {
  padding: 0.2em 1em;
}
.prompt.active {
  background-color: #287ef622;
}
.prompt:hover {
  background-color: #287ef644;
}
</style>
