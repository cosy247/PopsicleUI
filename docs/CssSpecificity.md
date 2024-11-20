---
id: 2404159043318
date: 2024/04/15
title: css选择器优先级
tags: CSS
archive:
recommendations:
description: css选择器优先级
---

# CSS 选择器优先级

## 选择器分类与优先级

CSS 选择器的优先级分为三个等级，由高到低分别是：

| 选择器               | 示例             | 优先级    |
| -------------------- | ---------------- | --------- |
| ID 选择器            | #id              | (1, 0, 0) |
| 类选择器：           | .class           | (0, 1, 0) |
| 属性选择器           | [id] [id="test"] | (0, 1, 0) |
| 伪类选择器           | :hover :empty    | (0, 1, 0) |
| 伪元素               | ::after ::before | (0, 1, 0) |
| 标签选择器           | div p            | (0, 0, 1) |
| 通用选择器（通配符） | \*               | (0, 0, 0) |

> 注意：通配符（\*）本身没有优先级，而关系选择器（+、>、~ 等）对优先级没有影响。

## 权重计算与比较

选择器的优先级权重表示为 (lv1, lv2, lv3)，基于不同类型的选择器，权重的计算方式如下：

```css
div.class           /* (0,1,1) */
*div.class          /* 仍然是 (0,1,1)，因为通配符不影响权重 */
#id.class.class     /* (1,2,0) */
.class::after       /* (0,2,0) */
.class:empty::after /* (0,3,0) */
```

权重的比较是依次按照 lv1、lv2、lv3 进行的。当某个层级的权重分出大小后，就不再比较后续层级。如果权重相同，那么写在 CSS 后面的样式属性会覆盖前面的相同样式属性。

> 继承的属性没有权重，且以 DOM 树中最近的继承属性值为准。

虽然有时人们会将优先级的权重简化为 100、10 和 1，然后相加，这种方法在一般情况下可行，因为很少会有超过 10 个相同类型的选择器导致进位。然而，为了准确理解，建议使用上述的 (lv1, lv2, lv3) 表示法。

```css
/* 100 or (1, 0, 0) */
#test {
  color: red;
}
/* 110 or (0, 11, 0) */
.test.test.test.test.test.test.test.test.test.test.test {
  color: yellow;
}
```

结果为 red

> 相同的选择器可以反复添加来提交权重。

### 查看权重

在浏览器的开发者工具中的元素界面，将鼠标移动到选择器上可以查看选择器的权重信息。

![alt text](assets/CssSpecificity/image-1.png) ![alt text](assets/CssSpecificity/image.png)

### 可能引发混淆的选择器

当选择器中包含伪类时，要注意的是，伪类的存在并不会绝对地覆盖其他选择器，而是要遵循权重的规则。例如：

```css
/* (0, 2, 1) */
div.test.test {
  color: red;
}

/* (0, 2, 1) */
div.test:first-child {
  color: yellow;
}

/* (0, 2, 0) */
.test:hover {
  color: blue;
}
```

在这种情况下，如果有元素同时满足上述三个选择器，颜色将会是 `red` 或 `yellow`（取决于它们在 CSS 中的顺序），而不是 `blue`，因为 `red` 和 `yellow` 的选择器权重更高。

## 样式覆盖

当有多个选择器作用于同一个属性时，以权重高的选择器为准。如果权重相同，则后定义的样式会覆盖先定义的样式。

```css
/* (0,2,0) */
.test.test {
  color: yellow;
}

/* (0,1,0) */
.test {
  color: red;
}

/* (0,1,1) */
div.test {
  color: blue;
}
```

在这种情况下，如果有元素同时满足上述三个选择器，颜色将会是 `yellow`，因为它的选择器权重最高。

### 内联样式

内联样式是直接将样式定义在 HTML 标签的`style`属性中，这种样式的优先级高于任何选择器。例如：

```html
<style>
  div#test.test {
    color: red;
  }
</style>
<div id="test" class="test" style="color: blue;">test</div>
```

在这个例子中，尽管`div#test.test`选择器非常具体，但由于`<div>`标签内定义了`style="color: blue;"`，内联样式优先级更高，因此文字的颜色显示为蓝色。

### !important

`!important`是一个强大的工具，但同样是一把双刃剑。它允许开发者为某个属性设置更高的优先级，从而覆盖其他任何选择器定义的样式。然而，过度使用`!important`会导致样式表结构混乱，降低代码的可维护性。

> > 因此，除非在万不得已的情况下，我们应尽量避免使用它。

在计算其优先级时可以将其看作更高一级的权重来方便比较。当多个`!important`规则作用于同一个属性时，它们的优先级将由选择器的权重决定。例如：

```css
/* (0, 0, 1, 0) */
.test {
  color: red;
}

/* (1, 0, 0, 1) */
div {
  color: yellow !important;
}

/* (1, 0, 1, 1) */
div.test {
  color: blue !important;
}
```

在这个例子中，由于`div.test`选择器比`div`选择器更高，所以`color: blue !important;`会覆盖`color: yellow !important;`，最终文本颜色为蓝色。

当需要覆盖内联样式或其他高优先级的样式，可以在属性后添加`!important`来强制覆盖。例如：

```html
<style>
  .test {
    color: red !important;
  }
</style>
<div class="test" style="color: blue;">test</div>
```

尽管`<div>`标签内定义了内联样式`color: blue;`，但由于`div#test.test`选择器使用了`!important`，所以文本颜色最终会显示为红色。

然而，我们应该尽量避免在内联样式中使用`!important`，因为这会使样式更加难以管理和调试。如果确实需要这样做，请务必谨慎，并准备好在未来可能面对自己留下的“坑”。

```html
<style>
  div#test.test {
    color: red !important;
  }
</style>
<div id="test" class="test" style="color: blue !important">test</div>
```

最终显示为蓝色

## 伪类选择器

伪类选择器用于选择处于特定状态的元素。虽然大部分伪类的权重为(0, 1, 0)，但也有一些特殊的伪类选择器，它们的权重计算方式有所不同。

### :where()

`:where()`伪类选择器可以接受一个或多个选择器作为参数，并选择能被这些选择器中的任何一个选中的元素。它的权重始终为最低，即(0, 0, 0)。

```css
/* (0, 0, 1) */
div:where(.test, #test) {
  color: red;
}
```

这个选择器会选择 class 为`test`或 id 为`test`的`div`元素，但由于`:where()`的权重为(0, 0, 0)，因此它的优先级非常低。

### :is()

`:is()`伪类选择器与`:where()`类似，但它会考虑权重。它会采用参数中权重最高的选择器来确定整个伪类的权重，无论选中的是参数中的哪一个选择器。

```css
/* (1, 0, 1) */
div:is(.test, #test) {
  color: red;
}
```

在这个例子中，尽管`.test`和`#test`的权重不同，但`:is()`会选择权重最高的那个选择器来确定其权重。

### :not()

`:not()`伪类选择器用于排除某些元素。它会接受一个或多个选择器作为参数，并选择不满足这些选择器的元素。它的权重计算方式与`:is()`相同。

```css
/* (1, 0, 1) */
div:not(.test, #test) {
  color: red;
}
```

会选择既不是 class 为`test`也不是 id 为`test`的`div`元素。

```css
/* (1, 1, 1) */
div:not(.test):not(#test) {
  color: red;
}
```

选择效果相同，但是优先级更高。

### :has()

`:has()`伪类选择器用于选择满足某个子选择器条件的元素。它的权重计算方式与`:is()`和`:not()`相同。

```css
/* (1, 0, 1) */
div:has(> p, + #test, .test) {
  color: red;
}
```

这个选择器会选择包含直接子元素`p`、相邻兄弟元素 id 为`test`或包含 class 为`test`的子元素的`div`元素。

> > 虽然这些伪类选择器提供了更多的选择和样式控制能力，但过度使用或不当使用它们可能导致样式表变得复杂且难以维护。

## 参考

1. [优先级 - CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity)
2. [CSS 选择器 - CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors)
3. [:where() - CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:where)
4. [:is() - CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:is)
5. [:not() - CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:not)
6. [:has() - CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:has)
