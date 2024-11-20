---
id: 1729751422783 # 文章id
title: npm 代理与镜像配置 # 文章标题
description: npm 代理与镜像配置 # 文章描述
tags: npm # 文章标签
archive: # 文章归档
recommendations: # 相关推荐id
shadow: false # 是否隐藏
top: 0 # 是否置顶，数字越大优先级越高
---

# npm 代理与镜像配置

## 代理配置

```shell
# 设置代理
npm config set proxy 127.0.0.1:7890         # http
npm config set https-proxy 127.0.0.1:7890   # https

# 取消代理
npm config delete proxy
npm config delete https-proxy

# 查看代理
npm config get proxy
npm config get https-proxy
```

## 镜像配置

**设置镜像源**

```shell
# 设置镜像源
npm config set registry https://registry.npmjs.org/       # 官方地址
npm config set registry https://registry.npm.taobao.org   # 淘宝镜像

# 取消镜像源
npm config delete registry

# 查看镜像源
npm config get registry
```

**单次使用镜像源**

```shell
npm install --registry=https://registry.npm.taobao.org
```
