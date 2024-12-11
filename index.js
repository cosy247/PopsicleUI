import { default as PLayoutGrid } from './components/LayoutGrid.vue';
import { default as PLayoutGridItem } from './components/LayoutGridItem.vue';
import { default as PButton } from './components/Button.vue';
import { default as PButtonGroup } from './components/ButtonGroup.vue';
import { default as PInput } from './components/Input.vue';
import { default as PSelect } from './components/Select.vue';
import { default as PCard } from './components/Card.vue';
import { default as PTree } from './components/Tree.vue';
import { default as PTable } from './components/Table.vue';
import { default as PTableCol } from './components/TableCol.vue';
import { default as PDialog } from './components/Dialog.vue';
import { default as PCheckBox } from './components/CheckBox.vue';
import { default as PCheckBoxGroup } from './components/CheckBoxGroup.vue';
import { default as PDatePicker } from './components/DatePicker.vue';
import { createVNode, render } from 'vue';
import Toast from './components/Toast.vue';
import Confirm from './components/Confirm.vue';
import Message from './components/Message.vue';
import Prompt from './components/Prompt.vue';

function mount(component) {
  const Vnode = createVNode(component);
  const div = document.createElement('div');
  div.style = 'display: contents;position: fixed;width: 0;height: 0;';
  document.body.append(div);
  render(Vnode, div);
  return Vnode;
}

function confirm(content, title) {
  const Vnode = mount(Confirm);
  confirm = (...arg) => Vnode.component.exposed.show(...arg);
  return confirm(content, title);
}

const message = (() => {
  const Vnode = mount(Message);
  return {
    info: (content) => Vnode.component.exposed.show(content, 'info'),
    success: (content) => Vnode.component.exposed.show(content, 'success'),
    warning: (content) => Vnode.component.exposed.show(content, 'warning'),
    error: (content) => Vnode.component.exposed.show(content, 'error'),
  };
})();

function prompt(content, title) {
  const Vnode = mount(Prompt);
  confirm = (...arg) => Vnode.component.exposed.show(...arg);
  return confirm(content, title);
}

function toast(content) {
  const Vnode = createVNode(Toast);
  render(Vnode, document.body);
  toast = (...arg) => Vnode.component.exposed.show(...arg);
  return toast(content);
}

export {
  // 全局注册组件
  confirm,
  message,
  toast,
  prompt,
  // 普通组件
  PLayoutGrid,
  PLayoutGridItem,
  PButton,
  PButtonGroup,
  PInput,
  PSelect,
  PCard,
  PTree,
  PTable,
  PTableCol,
  PDialog,
  PCheckBox,
  PCheckBoxGroup,
  PDatePicker,
};
