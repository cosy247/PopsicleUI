---
id: 24091011454891
title: vue3生命周期
description: vue3生命周期
tags: vue
archive:
recommendations:
shadow: false
top: 0
---

# vue3 生命周期

在了解 vue3 生命周期前，建议先阅读[vue2 生命周期钩子](/Vue2LifeCycle.html)。

## 生命周期一览

[VUE3 官网生命周期参考](https://cn.vuejs.org/api/composition-api-lifecycle.html)

| 生命周期        | 时机                                     | 说明                                 |
| --------------- | ---------------------------------------- | ------------------------------------ |
| setup           | 实例创建之前                             |                                      |
| beforeCreate    | 实例初始化完成之后                       |                                      |
| created         | 实例处理完所有与状态相关的选项后         |                                      |
| beforeMount     | 被挂载之前                               | 服务端渲染不可用                     |
| mounted         | 被挂载之后                               | 服务端渲染不可用                     |
| beforeUpdate    | 响应式状态变更而更新其 DOM 树之前        | 服务端渲染不可用                     |
| updated         | 响应式状态变更而更新其 DOM 树之后        | 服务端渲染不可用                     |
| beforeUnmount   | 被卸载之前                               | 服务端渲染不可用                     |
| unmounted       | 被卸载之后                               | 服务端渲染不可用                     |
| errorCaptured   | 捕获了后代组件传递的错误时               |                                      |
| renderTracked   | 在一个响应式依赖被组件的渲染作用追踪后   | 仅在开发模式下可用，服务端渲染不可用 |
| renderTriggered | 在一个响应式依赖被组件触发了重新渲染之后 | 仅在开发模式下可用，服务端渲染不可用 |
| activated       | KeepAlive 中，被插入到 DOM 中时          | 服务端渲染不可用                     |
| deactivated     | KeepAlive 中，从 DOM 中被移除时          | 服务端渲染不可用                     |
| serverPrefetch  | 在服务器上被渲染之前                     | 仅会在服务端渲染中执行               |

**生命周期图示：**

![alt text](assets/Vue3LifeCycle/image.png =600x)

## setup

[setup()](https://cn.vuejs.org/api/composition-api-setup.html) 钩子是在组件中使用组合式 API 的入口。

```vue
<template>
  <button @click="count++">{{ count }}</button>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const count = ref(0);
    return {
      count,
    };
  },
};
</script>
```

对于结合单文件组件使用的组合式 API，推荐通过 [\<script setup\>](https://cn.vuejs.org/api/sfc-script-setup.html) 以获得更加简洁及符合人体工程学的语法。

```vue
<template>
  <button @click="count++">{{ count }}</button>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);
</script>
```

## 使用生命周期钩子

`vue3` 中可以使用 `vue2` 的对象属性方式来声明生命周期钩子，但是更加推荐在 `setup` 中完成相关生命周期钩子的注册：

```vue
<script>
// 引入生命周期钩子对应的函数名
import { onBeforeMount, onUpdated, onBeforeUnmount } from "vue";

export default {
  setup() {
    onBeforeMount(() => {
      // ...
    });
    onUpdated(() => {
      // ...
    });
    onBeforeUnmount(() => {
      // ...
    });
  },
};
</script>
```

## 参考

[生命周期选项](https://cn.vuejs.org/api/options-lifecycle.html)
