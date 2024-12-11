<template>
  <div class="Select" :class="classList" :style="style">
    <p v-show="props.label" class="label" :style="labelStyle">{{ props.label }}</p>
    <slot name="label" />
    <div class="main">
      <slot name="left" />
      <input
        v-on="events"
        class="tag"
        v-model="showModel"
        :placeholder="props.placeholder"
        readonly
        @focus="showOptions"
        @blur="hiddenOptions" />
      <div v-show="model && props.clearable" class="clear" @click="model = ''"></div>
      <slot name="right">
        <Icon class="right" name="arrow" />
      </slot>
      <div class="options" :class="{ show: isShowOptions }" v-if="props.options">
        <div
          class="option"
          v-for="(option, index) in options"
          :class="{ active: props.valueKey ? option[props.valueKey] === model : option === model }"
          @click="handleSelect(index, option)">
          <slot name="option" :item="option" :index="index">
            {{ props.nameKey ? option[props.nameKey] : option }}
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, ref } from 'vue';
import { toArray, toBoolean, toSize } from '../utils/props';
import Icon from './Icon.vue';

const emits = defineEmits(['change', 'focus', 'blur', 'input']);
const events = {
  change: () => emits('change', model.value),
  focus: () => emits('focus', model.value),
  blur: () => emits('blur', model.value),
  input: () => emits('input', model.value),
};
const props = defineProps({
  placeholder: String,
  clearable: toBoolean,
  size: [Number, String],
  value: {},
  disable: toBoolean,
  label: String,
  labelWidth: [Number, String],
  readonly: toBoolean(),
  options: toArray(),
  nameKey: String,
  valueKey: String,
  filter: toBoolean,
});
const model = defineModel();
if (props.value) {
  model.value = typeof props.value == 'number' ? String(props.value) : props.value;
}

const isShowOptions = ref(false);
function showOptions() {
  isShowOptions.value = true;
}

function hiddenOptions() {
  setTimeout(() => (isShowOptions.value = false), 200);
}

const showModel = computed(() => {
  const sm = props.options.find((op) => (props.valueKey ? op[props.valueKey] === model.value : op === model.value));
  if (sm) return props.nameKey ? sm[props.nameKey] : sm;
});

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

// options
const options = computed(() => {
  if (props.options && props.filter) {
    return props.options.filter((item) => {
      if (props.valueKey) {
        if (typeof item[props.valueKey] == 'string') {
          return item[props.valueKey].includes(model.value);
        }
      } else {
        if (typeof item == 'string') {
          return item.includes(model.value);
        }
      }
    });
  } else {
    return props.options;
  }
});
function handleSelect(index, option) {
  isShowOptions.value = false;
  model.value = props.valueKey ? option[props.valueKey] : option;
}
</script>

<style scoped>
.Select {
  display: inline-flex;
  align-items: center;
  font-size: inherit;
  gap: 10px;
}
.Select.disable .main {
  cursor: not-allowed;
  background: #eee;
  border-color: #eee;
}
.Select.disable .tag {
  pointer-events: none;
  background: #eee;
}
.Select.readonly .main {
  background: #f5f5f5;
  border-color: #f5f5f5;
}
.Select.readonly .tag {
  pointer-events: none;
  background: #f5f5f5;
}
.main {
  position: relative;
  display: flex;
  align-items: center;
  width: 14em;
  flex: 1;
  border: 1px solid #aaa;
  border-radius: 0.25em;
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
.clear {
  position: relative;
  margin-left: 0.5em;
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  cursor: pointer;
  border-radius: 1em;
}
.clear::after,
.clear::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  display: block;
  width: 0.1em;
  height: 0.8em;
  background: #aaa;
  border-radius: 0.5em;
  transform-origin: center center;
  transform: translate(-50%, -50%) rotate(45deg);
}
.clear::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}
.right {
  transition: 0.2s;
  margin: 0 0.5em;
}
.tag:focus ~ .right {
  transform: rotate(180deg);
}
.options {
  position: absolute;
  left: 0;
  top: 120%;
  border: 1px solid #ddd;
  box-sizing: border-box;
  min-width: 100%;
  max-height: 20em;
  background: white;
  padding: 0.2em 0;
  border-radius: 0.2em;
  transition: 0.2s;
  box-shadow: 0 0 5px #8883;
  opacity: 0;
  z-index: -1;
  visibility: hidden;
  overflow-y: auto;
  white-space: nowrap;
  font-size: 0.9em;
}
.show.options {
  opacity: 1;
  top: 105%;
  z-index: 999;
  visibility: visible;
  transition-delay: 0.1s;
}
.option {
  cursor: pointer;
  padding: 0.5em 1em;
  height: 1em;
  border: solid 2px #0000;
}
.option.active {
  background-color: #287ef622;
}
.option:hover {
  background-color: #287ef644;
}
</style>
