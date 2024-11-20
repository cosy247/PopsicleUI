---
id: 21
date: 2024/02/01
title: 格式化配置文件editorConfig属性说明
tags: 配置文件
description: Vscode格式化配置文件editorConfig属性说明
---

# 格式化配置文件 editorConfig 属性说明

## editorConfig 文件

文件名为`.editorConfig`。其中属性为键值对形式`key = value`，结尾不用分号，注释使用井号`#`。当文件使用 editorConfig 格式化时会以当前文件同级开始由下向上查找，直到根目录或者配置 root 为 true 为止，多个配置文件为属性追加不覆盖形式合并。例如第一个文件配置 a=1、第二个文件配置 a=2，b=3，合并后为 a=1，b=3，这只是做解释而不是真实的配置。

## Vscode 中使用

Vscode 可以安装`EditorConfig for VS Code`插件，也可以安装其他组件。 ![Alt text](assets/VscodeEditorConfig/image.png)

这里使用`Prettier - Code formatter`插件为例。 ![Alt text](assets/VscodeEditorConfig/image-1.png)

其中配置`Use Editor Config`即可启动 editorConfig 文件中的格式化配置 ![Alt text](assets/VscodeEditorConfig/image-2.png)

## 属性配置

### [*]

使用中括号时表明匹配的文件，[*]表示匹配全部文件，[\*.js]表示匹配全部 js 文件

### root = true

告诉 EditorConfig 插件，这是根文件，不用继续往上查找

### charset = utf-8

设置字符集为 utf-8

### indent_style = space

缩进风格，space 为空格缩进、tab 为制表符缩进

### indent_size = 2

缩进的空格数

### end_of_line = lf

结尾换行符，可选 lf、cr、crlf

### insert_final_newline = true

在文件结尾插入新行

### max_line_length = 120

换内最大列数，超过时换行

### trim_trailing_whitespace = true

删除一行中的前后空格

## 配置示例

```
[*]
root = true
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
max_line_length = 120
```
