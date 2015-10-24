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

<!-- more -->

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

JavaScript的对象是一组由键-值组成的无序集合，例如：

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

## 变量

JavaScript是动态语言，因为它的变量的类型不固定，变量可以被赋值为任意的数据类型；与之相对的是静态语言，比如Java，再声明变量的时候必须指明变量类型，而且不同类型的变量和数据不能赋值。

例如JavaScript：

```js
var a = 123;  //a现在为数字
a = "abc";  //a现在为字符串
```

例如Java:

```java
int a = 123; //a为整型。用int声明
a = "abc";  //错误，不能把字符串赋值给整型变量
```

## strict 模式

在JavaScript中如果不使用 `var` 声明变量，那么变量自动被声明为全局变量：

```js
i = 10;  //i现在是全局变量
```

在同一个页面的引用的不同的JavaScript文件中，如果都不使用 `var` 进行变量声明，而且恰好都使用了变量 `i` ，那么就会互相影响，产生难以调试的错误。

ECMA在后续的规范中推出了strict模式，强制变量必须通过 `var` 进行声明，不然将导致运行错误。

启用strict模式的方法是在JavaScript代码的第一行加上：

```js
'use strict'
```

这是一个字符串，不支持strict模式的浏览器将会把它当作一个字符串来进行解释，支持strict模式的浏览器将在开启strict模式运行JavaScript。

建议在所有的JavaScript代码中都使用strict模式。

# 字符串

JavaScript的字符串就是通过`''`或者`""`括起来的字符表示。

如果`'`本身也是一个字符，那就可以使用`""`括起来，比如`"I'm OK"`包含的字符就是`I`，`'`，`m`，空格，`O`，`K`这6个字符。

如果字符串内部既包含`'`又包含`"`怎么办？可以使用转义字符`\`来标识，比如：

```js
'I\'m \"OK\"!';
```

表示的字符串内容是`I'm "OK"!`

转义字符`\`可以转义很多字符，比如`\n`表示换行，`\t`表示制表符，字符`\`本身也需要转义，所以`\\`表示的字符就是`\`；

ASCII字符都可以通过`\x##`的十六进制形式表示，比如:

```js
`\x41`; //完全等同于 'A'
```

还可以用`\u####`表示一个Unicode字符：

```js
`\u4e2d\u6587`;  //完全等同于 '中文'
```

由于多行字符串用`\n`写起来麻烦，所以最新的ES6标准新增了一种多行字符串的表示方法，用`` `...` ``表示：

```js
`这是一个
多行
字符串`;
```

## 字符串的常见操作

```js
var s = 'hello, world!';
s.length;  //13
s.length(); //Uncaught TypeError: s.length() is not a function(...), length 是字符串的一个属性，而不是方法
```

要获取字符串某个指定位置的字符，使用类似Array的下标操作，索引号从0开始：

```js
var s = 'Hello, World!';

s[0];  //'H'
s[6];  //' '
s[7];  //'W'
s[12]; //'!'
s[13]; //undefined 超出范围的索引不会报错，但是一律返回undefined
```

*需要特别注意的是* 字符串是不可变的，如果对字符串的某个索引赋值，不会又任何错误，但是，也不会又任何效果:

```
var s = 'Test';
s[0] = 'X';
alert(s); //s仍然为'Test‘
```

JavaScript 为字符串提供了一些常用的方法，注意，调用这些方法并不会改变原来字符串的内容，而是返回一个新的字符串。

### toUpperCase

`toUpperCase`把一个字符串全部变成大写

```js
var s = 'Hello';
s.toUpperCase(); // 返回新的字符串'HELLO',s仍然为'Hello'
```

### toLowerCase

`toLowerCase`把一个字符串全部变成小写

```js
var s = 'Hello';
var lower = s.toLowerCase();  //返回新的字符串'hello'并赋值给lower
alert(lower); //'hello'
```

### indexOf

`indexOf()`返回指定字符串出现的*位置*

```js
var s = 'Hello, World!';
s.indexOf('World'); //返回7
s.indexOf('world'); //没有找到字符串，返回-1
```

### substring

`substring`返回指定索引区间的子串

```js
var s = 'Hello, World!';
s.substring(0, 5); // 从索引0开始到5（不包括5），返回'Hello'
s.substring(7); //从索引7开始到结束，返回'World!'
```

### substr

`substr`返回从指定索引开始的n个字符组成的子串

`substr`与`substring`相似，都是返回字符串的子串，不同的是，`substring`的参数是两个索引值（如果只有一个的话，默认第二个为字符串的长度), `substr`的第一个参数为起始索引值，第二个参数为要截取的子串的长度，例如:

```js
var s = 'Hello, World!';
s.substr(7, 5); //从索引7开始，截取5个字符，返回'World'
```

# 数组

JavaScript的数组可以包含任意数据类型，并通过索引来访问每个元素。

要获得数组的长度，直接访问`length`属性：

```js
var arr = [1, 2, 3.14, 'Hello', null, true];
arr.length;  //6
```

请注意，如果直接给`Array`的`length`属性赋一个新值会导致`Array`的大小发生变化：

```js
var arr = [1, 2, 3];
arr.length;  //3
arr.length = 6; 
arr; //arr变为[1, 2, 3, undefined, undefined, undefined]
arr.length = 2;
arr; //arr变为[1, 2]
```

`Array`可以通过索引把对应的元素修改为新的值， 因此，对`Array`的索引进行赋值会直接修改这个`Array`：

```js
var arr = ['A', 'B', 'C'];
arr[1] = 99;
arr; //arr现在变为['A', 99, 'C']
```

请注意，通过索引赋值时，如果索引超过了范围，同样会引起`Array`大小的变化：

```js
var arr = [1, 2, 3];
arr[5] = 'X';
arr; //arr变为[1, 2, 3, undefined, undefined, 'X']
```

大多数的编程语言不允许直接修改数组的大小，越界访问索引会报错。但是，JavaScript的`Array`不会有任何报错。在编写代码时，不建议直接修改`Array`的大小，访问索引时要确保索引不会越界。

### indexOf

与`String`类似，`Array`也可以通过`indexOf`返回一个指定元素的*位置*

```js
var arr = [1, 2, 3, '30', 'xyz'];
arr.indexOf(1);  //返回0
arr.indexOf(2);  //返回1
arr.indexOf(4);  //没有找到元素4，返回-1
arr.indexOf('30'); //'30'的索引为3， 返回3
```

### slice

`slice`对应`String`的`substring`版本，它截取`Array`的部分元素，返回一个新的`Array`：

```js
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
arr.slice(1,3);  //返回['B', 'C'],从索引1开始，到索引3结束，不包括索引3
arr.slice(5);  //返回['F', 'G']，从索引5开始，到数组结束
```

如果不给`slice`传递任何参数，它就会从头到尾截取所有的元素。利用这一点，我们可以很容易的复制一个`Array`：

```js
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
var acopy = arr.slice();
acopy; //['A', 'B', 'C', 'D', 'E', 'F', 'G']
acopy === arr; //false
```

### push和pop

`push()`向`Array`的末尾添加若干元素，`pop`把`Array`末尾的若干元素删掉：

```js
var arr = [1, 2];
arr.push('A', 'B'); // 返回Array新的长度: 4
arr; // [1, 2, 'A', 'B']
arr.pop(); // pop()返回'B'
arr; // [1, 2, 'A']
arr.pop(); arr.pop(); arr.pop(); // 连续pop 3次
arr; // []
arr.pop(); // 空数组继续pop不会报错，而是返回undefined
arr; // []
```

### unshift和shift

`unshift`向`Array`的头部添加*若干*元素，`shift`从`Array`的头部删除*第一个*元素：

```js
var arr = [1, 2];
arr.unshift('A', 'B'); // 返回Array新的长度: 4
arr; // ['A', 'B', 1, 2]
arr.shift(); // 'A'
arr; // ['B', 1, 2]
arr.shift(); arr.shift(); arr.shift(); // 连续shift 3次
arr; // []
arr.shift(); // 空数组继续shift不会报错，而是返回undefined
arr; // []
```

### sort

`sort()`可以对当前`Array`进行排序，它会直接修改当前`Array`的元素位置，直接调用时，按照默认顺序排序：

```js
var arr = ['B', 'C', 'A'];
arr.sort();
arr; //['A', 'B', 'C']
```

### splice

`splice()`是修改`Array`的“万能方法”，它可以从指定的位置开始删除若干元素，然后再从该位置添加若干元素：

```js
var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
// 从索引2开始删除3个元素,然后再添加两个元素:
arr.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
// 只删除,不添加:
arr.splice(2, 2); // ['Google', 'Facebook']
arr; // ['Microsoft', 'Apple', 'Oracle']
// 只添加,不删除:
arr.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
```

### concat

`concat()`方法把当前的的`Array`和另一个`Array`连接起来，返回一个新的`Array`：

```js
var arr = ['A', 'B', 'C'];
var added = arr.concat([1, 2, 3]);
added; //['A', 'B', 'C', 1, 2, 3]
arr; //['A', 'B', 'C']
```

请注意，`concat()`方法并没有修改当前`Array`，而是返回了一个新的`Array`。

实际上，`concat()`可以接收任意个元素和`Array`，并且自动把`Array`拆开，然后全部添加到新的`Array`里:

```js
var arr = ['A', 'B', 'C'];
arr.concat(1, 2, [3, 4]);
arr; //['A', 'B', 'C', 1, 2, 3, 4]
```

### join

`join()`方法把当前`Array`的每个元素使用指定的字符串连接起来，然后返回连接后的字符串：

```js
var arr = ['A', 'B', 'C', 1, 2, 3];
arr.join('-'); //A-B-C-1-2-3
```

如果`Array`的元素不是字符串，将自动转换为字符串后再连接。


## 多维数组

如果数组的某个元素又是一个`Array`，则可以组成多维数组，例如：

```js
var arr = [[1, 2, 3], [400, 500, 600], '-'];
```

上述`Array`包含3个元素，其中头两个元素本身也是`Array`。

练习：如何通过索引取到500这个值：


```js
'use strict';
var arr = [[1, 2, 3], [400, 500, 600], '-'];
var x = arr[1][1];
alert(x); //500
```

`Array`提供了一种顺序存储一组元素的功能，并且可以按照索引来读写。

练习：在新生欢迎晚会上，你已经拿到了新同学的名单，请排序后显示：`欢迎XXX，XXX，XXX，和XXX同学！`：

```js
'use strict';
var arr = ['小明', '小红', '大军', '阿黄'];
var sorted = arr.sort();
alert('欢迎' + sorted.slice(0,3) + '和' + sorted[3] + '同学!');
// alert('欢迎' + sorted.slice(0,3) + '和' + sorted.splice(3,1) + '同学!');
var last = arr.pop();
alert('欢迎' + arr + '和' + last + '同学!'); //Array在输出元素时会自动使用逗号分割
```

# 对象

JavaScript的对象时一种无序的集合数据类型，它由若干键值对构成。

JavaScript的对象用于描述现实世界中的对象。例如，我们可以用下面的对象表示“小明”

```js
var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};
```

访问属性是通过`.`操作符完成的，但这要求属性名必须是一个有效的变量名。如果属性名包含有特殊字符，就必须使用`''`括起来：

```js
var xiaohong = {
    name: '小红',
    'middle-school`: 'NO.1 Middle School'
}
```

`xiaohong`的属性名`middle-school`不是一个有效的变量，就需要使用`''`括起来。访问这个属性也不能使用`.`操作符，必须使用`['xxx']`的形式来访问：

```js
xiaohong['middle-school']; //'NO.1 Middle School'
xiaohong['name'];  //'小红'
xiaohong.name; //'小红'
```

访问不存在的属性不会报错，而是返回undefined;


由于JavaScript的对象是动态类型，你可以自由地给一个对象添加或者删除属性：

```js
var xiaoming = {
    name: '小明'
};
xiaoming.age; // undefined
xiaoming.age = 18; // 新增一个age属性
xiaoming.age; // 18
delete xiaoming.age; // 删除age属性
xiaoming.age; // undefined
delete xiaoming['name']; // 删除name属性
xiaoming.name; // undefined
delete xiaoming.school; // 删除一个不存在的school属性也不会报错，并且返回true
```

如果我们要检测`xiaoming`是否拥有某一属性，可以用`in`操作符：

```js
var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};
'name' in xiaoming; // true
'grade' in xiaoming; // false
```

不过要小心，如果`in`判断一个属性存在，这个属性不一定是`xiaoming`的，它可能是`xiaoming`继承得到的：

```js
'toString' in xiaoming;  //true
```

因为`toString`定义在`object`对象中，而所有的对象最终都会在原型链上指向`object`，所以`xiaoming`也拥有`toString`属性。

要判断一个属性是`xiaoming`自身拥有的，而不是继承得到的，可以使用`hasOwnProperty()`方法：

```js
var xiaoming = {
    name: '小明';
}

xiaoming.hasOwnProperty('name');  //true
xiaoming.hasOwnProperty('toString');  //false
```
