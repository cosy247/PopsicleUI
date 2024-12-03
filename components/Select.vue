<template>
  <div class="Select" :class="classList" :style="style">
    <p v-show="props.label" class="label" :style="labelStyle">{{ props.label }}</p>
    <slot name="label" />
    <div class="main">
      <slot name="left" />
      <input v-on="events" class="tag" v-model="showModel" :placeholder="props.placeholder" readonly />
      <div v-show="model && props.clearable" class="clear" @click="model = ''"></div>
      <slot name="right" />
      <div class="options" v-if="props.options">
        <div class="option" v-for="(option, index) in options">
          <slot name="option" :item="option" :index="index">
            <p
              :class="{ active: props.valueKey ? option[props.valueKey] === model : option === model }"
              @click="handleSelect(index, option)">
              {{ props.nameKey ? option[props.nameKey] : option }}
            </p>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

const emits = defineEmits(['change', 'focus', 'blur', 'input']);
const events = {
  change: () => emits('change', model.value),
  focus: () => emits('focus', model.value),
  blur: () => emits('blur', model.value),
  input: () => emits('input', model.value),
};
const props = defineProps<{
  placeholder?: string;
  clearable?: boolean;
  size?: number | string;
  value?: number | string;
  disable?: boolean;
  label?: string;
  labelWidth?: number | string;
  readonly?: boolean;
  options: Array<any>;
  nameKey: string;
  valueKey: string;
  filter?: boolean;
}>();
const model = defineModel({ default: '' });
const showModel = ref('');
if (props.value) {
  model.value = typeof props.value == 'number' ? String(props.value) : props.value;
  const sm = props.options.find((op) => (props.valueKey ? op[props.valueKey] === model.value : op === model.value));
  if (sm) showModel.value = props.nameKey ? sm[props.nameKey] : sm;
}

const classList = computed(() => {
  const classList: Array<string> = [];
  if (props.clearable) classList.push('clearable');
  if (props.disable) classList.push('disable');
  if (props.readonly) classList.push('readonly');
  return classList.join(' ');
});
const style = computed(() => {
  const style: { fontSize?: string } = {};
  if (props.size) {
    style.fontSize = typeof props.size == 'number' ? `${props.size}px` : props.size;
  }
  return style;
});
const labelStyle = computed(() => {
  const style: { width?: string } = {};
  if (props.labelWidth) {
    style.width = typeof props.labelWidth == 'number' ? `${props.labelWidth}px` : props.labelWidth;
  }
  return style;
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
function handleSelect(index: number, option: any) {
  model.value = props.valueKey ? option[props.valueKey] : option;
  showModel.value = props.nameKey ? option[props.nameKey] : option;
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
  padding: 0.2em 0.5em;
  border: 1px solid #aaa;
  border-radius: 3px;
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
  cursor: pointer;
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
.options {
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
.tag:focus ~ .options {
  opacity: 1;
  top: 105%;
  z-index: 999;
  visibility: visible;
}
.option {
  cursor: pointer;
}
.option > * {
  padding: 0.2em 1em;
}
.option.active {
  background-color: #287ef622;
}
.option:hover {
  background-color: #287ef644;
}
</style>
