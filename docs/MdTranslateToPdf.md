---
id: 15
date: 2024/01/05
title: md文档转pdf
tags: 文件转换
archive: 
recommendations:
description: md文档转pdf
---

# md文档转pdf

## 原理

通过md查看工具将其在浏览器中渲染出来，再利用浏览器的打印功能将其直接转换为pdf文件。

## 实现

1. 打开md，这里使用vscode并安装了Markdown Preview Enhanced插件。

2. 在浏览器中预览md，不同软件方式不同。vscode中在预览中点击鼠标右键选择Open in Browser。

![Alt text](./assets/MdTranslateToPdf/image-23.png)

3. 在浏览器中右键选择打印

![Alt text](./assets/MdTranslateToPdf/image-20.png)

4. 在弹出的打印页面中选择Microsoft Print to PDF作为打印机

![Alt text](./assets/MdTranslateToPdf/image-21.png)

5. 点击打印，选择保存路径即可

![Alt text](./assets/MdTranslateToPdf/image-22.png)
