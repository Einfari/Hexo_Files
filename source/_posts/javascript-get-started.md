title: Javascript 快速入门笔记
date: 2015-10-22 17:48:17
categories: 
- 技术笔记
tags:
- JavaScript
photos:
- http://lniu.qiniudn.com/images/fancybox/018.jpg
---

# 基本语法

JavaScript 引擎会自动在每个语句的结尾补上 `;`, 但是自动添加分号有些情况下会改变程序的语义，导致运行结果与期望的不一致。所以，在代码编写的时候最好不要省略任何一个分号。

# 数据类型与变量

## 比较运算符

JavaScript 中一共有5种基本的数据类型(也叫简单数据类型)，分别是Number，String，Boolean，Null，Undefined，和一种复杂数据类型Object。

要特别注意相等运算符`==`。JavaScript 在设计的时候，有两种比较运算符：

第一种是`==`比较，它会自动转换数据类型再2比较，很多时候，会得到非常诡异的结果；

第二种是`===`比较，它不会自动转换数据类型，如果数据类型不一致，返回`false`，如果一致，再进行比较。

由于JavaScript这个设计缺陷，__不要__ 使用`==`比较，始终坚持使用`===`进行比较是一个好习惯。

## NaN

另一个例外的是`NaN`，这个特殊的`Number`与所有其它值都不相等，包括它自己；

```js
NaN === NaN; //false
```

唯一能判断`NaN`的方法是通过`isNaN()`函数：

```js
isNaN(NaN); //true
```

最后要注意的是浮点数的相等比较：

```js
1 / 2 === (1 - 2 / 3); //false
```

这不是JavaScript的设计缺陷。浮点数在运算的过程中会产生误差，因为计算机无法精确表示无限不循环小数，要判断两个浮点数是否相等，只能计算它们之差的绝对值，看是否小于某个阈值：

```js
Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001; //true
```

## null 和 undefined

`null`表示一个“空”的值，它和`0`以及空字符串`''`不同，`0`表示一个数值，`''`表示一个长度为0的字符串，而`null`表示为“空”。

JavaScript 中的`null`类似于Java中的`null`，Python中的`None`。但是，在JavaScript中，还有一个和`null`类似的`undefined`，它表示未定义。

JavaScript的设计者希望用`null`表示一个空的值，而`undefined`表示值未定义。事实证明，这并没有什么卵用，区分两者的意义不大。大多数情况下，我们都应该使用`null`。`undefined`仅仅在判断函数参数是否传递的情况下有用。

## 数组

数组是一种按顺序排列的集合，可以包含任何数据类型。

有两种创建数组的方法：

```js
var arr1 = [1, 2, 3, "Microsoft", null, true];

var arr2 = new Array(1, 2, 3);
```
出于代码的可读性考虑，强烈建议使用`[]`来创建数组。

数组的访问通过索引来实现，索引的起始值为`0`：

```js
var arr1 = [1, 2, 3, "Microsoft", null, true];
arr[0];  // 返回索引为0的元素，即1
arr[1];  // 2
arr[5]; // true
arr[6]; // 超出了索引范围，返回undefined
```

## 对象

JavaScript的对象是一组右键-值组成的无序集合，例如：

```js
var person = {
    name: "saturn",
    age: "24",
    tag: ["js", "web", "mobile"],
    city: "Shanghai",
    zipcode: null
}
```

JavaScript的对象的键都是__字符串__类型，值可以是任意数据类型，对象的键又称为对象的属性；

要获取一个对象的属性，我们使用`对象变量.属性名`的方式：

```js
person.name;  // "saturn"
person.zipcode; // null
```



