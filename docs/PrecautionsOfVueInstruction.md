---
id: 24091011392450
date: 2024/09/10
title: vue指令的注意事项
description: vue指令的注意事项
tags: vue
archive:
recommendations:
shadow: false
---

# vue 指令的注意事项

## v-if 和 v-show 的区别

|          | v-if                                       | v-show                  |
| -------- | ------------------------------------------ | ----------------------- |
| 控制手段 | dom 元素整个添加或删除                     | `css` 中 `display:none` |
| 编译过程 | `v-if` 切换有一个局部编译/卸载的过程       | 简单的基于 `css` 切换   |
| 编译条件 | 渲染条件为假时，并不做操作，直到为真才渲染 | 始终渲染                |
| 性能消耗 | 更高的切换消耗                             | 更高的初始渲染消耗      |

**v-if** 变为`true` 时，触发 `beforeCreate`、`create`、`beforeMount` 和 `mounted` 钩子。  
**v-if** 变为 `false` 时，触发 `beforeDestory` 和 `destoryed` 钩子。

当 `v-if` 中表达式的值为 `false` 时，不会渲染其中的 dom。所以其中可能出现的问题也不会出现。

```vue
<template>
  <div v-if="false">{{ data.a }}</div>
</template>
```

不存在 `data.a` 时不报错

```vue
<template>
  <div v-show="false">{{ data.a }}</div>
</template>
```

不存在 `data.a` 时报错

## 为什么 v-if 和 v-for 不建议一起用

**优先级问题**：当 `v-if` 和 `v-for` 同时用在同一个元素上时，`v-for` 有更高的优先级。这意味着 `v-if` 将分别重复运行于每个 `v-for` 循环中，即先进行循环，然后在每个循环中再进行条件判断。这会导致即使某些元素因为 `v-if` 的条件不满足而不会被渲染，Vue 仍然会先遍历整个列表，这会带来性能方面的浪费。

**性能考虑**：如果列表很长，但只有少数几项满足 `v-if` 的条件，每次渲染时仍然需要遍历整个列表，这会增加不必要的计算量。例如，如果有一个包含 1000 个用户的列表，但只有 10 个用户是活跃的，并且你只想显示这些活跃用户，使用 `v-if` 和 `v-for` 一起会导致每次都遍历 1000 个用户，而不是只处理那 10 个活跃用户。

#### 解决方案

- 当 `v-if` 用于控制部分渲染时：使用计算属性（`computed`）来预先过滤列表，这样 `v-for` 可以直接迭代过滤后的数组。

```vue
<template>
  <ul>
    <li v-for="user in activeUsers" :key="user.id">...</li>
  </ul>
</template>

<script>
  export default {
    computed: {
      activeUsers() {
        return this.users.filter((user) => user.isActive);
      },
    },
  };
</script>
```

- 当 `v-if` 用于控制全部数据渲染时：将 `v-if` 放在包含 `v-for` 的 `<template>` 标签上，这样可以先进行条件判断，再渲染列表。

```vue
<template v-if="todos.length">
  <TodoItem v-for="todo in todos" :key="todo.id" />
</template>
```
