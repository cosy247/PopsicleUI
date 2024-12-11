<template>
  <div
    class="name"
    :class="{ hadChild: hadChild, active: isShowChildren, nofilter: !checkFilter() }"
    @click="handClick"
    :style="{ paddingLeft: level + 'em' }">
    <slot name="leftIcon" v-bind="slotParams">
      <svg
        class="name-defaultIcon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="0.6em"
        height="0.6em">
        <path
          d="M591.03932871 201.31081482l399.75341828 523.780541A99.42053925 99.42053925 0 0 1 911.67056782 884.82702222H112.28800695a99.42053925 99.42053925 0 0 1-79.03932871-159.7356664L433.00209651 201.31081482a99.42053925 99.42053925 0 0 1 158.0372322 0z"
          fill="#222"
          p-id="2238"></path>
      </svg>
    </slot>
    <div class="name-text" :title="props.data.name">
      <slot v-bind="slotParams">
        {{ props.data.name }}
      </slot>
    </div>
    <slot name="rightIcon" v-bind="slotParams"></slot>
  </div>
  <div class="children" :class="{ noactive: !isShowChildren }" v-if="hadChild">
    <TreeItem
      v-for="(item, index) in props.data.children"
      :data="item"
      :level="props.level + 1"
      :namePath="[...props.namePath, item.name]"
      :indexPath="[...props.indexPath, index]">
      <template #="data">
        <slot v-bind="data" />
      </template>
      <template #leftIcon="data">
        <slot name="leftIcon" v-bind="data" />
      </template>
      <template #rightIcon="data">
        <slot name="rightIcon" v-bind="data" />
      </template>
    </TreeItem>
  </div>
</template>

<script setup>
import { computed, inject, ref } from 'vue';

const props = defineProps(['data', 'level', 'namePath', 'indexPath']);
const hadChild = computed(() => props.data.children?.length > 0);

const isShowChildren = ref(false);
const emits = inject('emits');
function handClick() {
  isShowChildren.value = !isShowChildren.value;
  emits('nodeClick', {
    level: props.level,
    isOpen: hadChild.value && isShowChildren.value,
    namePath: props.namePath,
    indexPath: props.indexPath,
    data: props.data,
  });
}

const slotParams = computed(() => ({
  level: props.level,
  namePath: props.namePath,
  indexPath: props.indexPath,
  data: props.data,
}));

// 筛选功能
const filter = inject('filter');
function checkFilter(node = props.data) {
  if (node.name?.includes(filter.value)) return true;
  if (!Array.isArray(node.children)) return false;
  return node.children.some((item) => checkFilter(item));
}
</script>

<style scoped>
.name {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5em;
  height: 1.5em;
  transition: height 0.2s;
  user-select: none;
  border-left: 10px solid #0000;
  border-right: 10px solid #0000;
  border-radius: 4px;
}
.name.hadChild {
  cursor: pointer;
}
.name-defaultIcon {
  transition: 0.2s;
  transform: rotate(90deg);
}
.name.active .name-defaultIcon {
  transform: rotate(180deg);
}
.name:not(.hadChild) .name-defaultIcon {
  opacity: 0;
}
.name:hover {
  background: #299f69;
  color: white;
}
.name-text {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.childrenContent {
  overflow: hidden;
  transition: 0.2s;
}
.children {
  overflow: hidden;
}
.children.noactive .name {
  height: 0em;
}
.nofilter.name {
  height: 0em;
  overflow: hidden;
}
</style>
