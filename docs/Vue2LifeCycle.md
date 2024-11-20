---
id: 24091011454890
date: 2024/09/10
title: vue2生命周期
description: vue2生命周期
tags: vue
archive:
recommendations:
shadow: false
---

# vue2 生命周期

## 生命周期一览

[VUE2 官网生命周期参考](https://v2.cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90)

| 生命周期      | 时机                          | 注意                                                                   |
| ------------- | ----------------------------- | ---------------------------------------------------------------------- |
| beforeCreate  | 组件实例被创建之初            | 还不可以访问 `this`                                                    |
| created       | 组件实例已经完全创建          | 可以访问到 `this` 和数据等                                             |
| beforeMount   | 组件挂载之前                  | 相关的 `render` 函数首次被调用                                         |
| mounted       | 组件挂载到实例上去之后        | 可以通过 `$el`、`$refs` 等访问元素。不会保证所有的子组件也都被挂载完成 |
| beforeUpdate  | 组件数据发生变化              | dom 还没有更新                                                         |
| updated       | 组件数据更新之后              | dom 已经更新了                                                         |
| beforeDestroy | 组件实例销毁之前              | 在这一步，实例仍然完全可用                                             |
| destroyed     | 组件实例销毁之后              | 所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。     |
| activated     | `keep-alive` 缓存的组件激活时 |                                                                        |
| deactivated   | `keep-alive` 缓存的组件停用时 |                                                                        |
| errorCaptured | 捕获一个来自子孙组件的错误时  |                                                                        |

**生命周期图示：**

![alt text](assets/VueInterviewQuestion1/image.png =500x)

## activated 和 deactivated 钩子

在被 `keep-alive` 包含的组件/路由中，会多出 `activated` 与 `deactivated` 钩子。

**首次进入组件时**：`beforeRouteEnter` → `beforeCreate` → `created` → `mounted` → `activated` → `...` → `beforeRouteLeave` → `deactivated`

**再次进入组件时**：`beforeRouteEnter` → `activated` → `...` → `beforeRouteLeave` → `deactivated`

由于组件被缓存，退出时没有真正的销毁，所以不会调用销毁相关的钩子，作为代替调用 `deactivated`。再次进入组件时不必再创建挂载，作为代替调用 `activated`。

## errorCaptured 钩子

`errorCaptured` 用于捕获子/后代组件的错误并向用户创建警报。发生错误的默认行为是从发生错误的组件传播或“向上冒泡”，最终在控制台中显示为错误消息。`errorCaptured` 钩子返回 `false` 可以结束这种传播（控制台中不会显示错误消息）

另外可以声明 `app.config.errorHandler` 函数用户处理全局的错误信息，函数无论返回什么控制台中都不会显示错误消息，可以使用 `captureError` 函数在控制台中显示错误信息。

```js
Vue.config.errorHandler = (err, vm, info) => {
  console.log("进来啦~");
  // 错误上报到收集报错的平台
  captureError(err);
};
```

## 数据请求在 created 和 mouted 的区别

**created** 在组件实例一旦创建完成的时候立刻调用，这时候页面 dom 节点并未生成。  
**mounted** 在页面 dom 节点渲染完毕之后就立刻执行。

`created` 比 `mounted` 在触发时机上要更早的。两者都能拿到实例对象的属性和方法，但放在 `mounted` 中的请求有可能导致页面闪动（因为此时页面 dom 结构已经生成）。如果在页面加载前完成请求，则不会出现此情况。所以建议对页面内容的改动放在 `created` 生命周期当中。

## 参考

[Vue 生命周期](https://v2.cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90)
