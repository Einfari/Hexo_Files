title: "JavaScript笔记"
date: 2015-03-09 21:24:14
categories:
- 技术笔记
tags:
- 技术
- JavaScript
photos:
- http://lniu.qiniudn.com/images/fancybox/010.jpg

---
向下取整:

```js
var a = ~~1.2; //1
```

这个补充一下，还可以用位右移符>>

```js
var a = 3.4>>0; //3 
```

但是两者最好都只用在正整数上，因为只是舍掉了小数部分。Math.floor(-1.2)应该为-2，这两种方法的结果为-1

<!-- more -->

转数字

```js
var time = + new Date();
```

设默认值

```js
function foo(bar){
    var foobar = bar || 'default'; 
//bar 为 undefined, null, "", 0, false, NaN 时最后都得到'default'
}

//坑
[]||"aa"; //[]
{}||"aa"; //SyntaxError
({})||"aa";//Object {}
```

NaN的坑

```js
//NaN - 不是一个数字
isNaN(a);
//检查是不是 "不是一个数字" ..

isNaN(null);//false
//实际上是null被转为0了,表面上"null 不是一个 不是数字 的东西"。wtf...
```

UNICODE 用作变量名

```js
var \u4f60\u597d = "\u4f60\u597d";
var b = {};
b.\u4f60\u597d = \u4f60\u597d;
console.log(b);//Object {你好: "你好"}
console.log(b.你好);// "你好"
console.log(b.\u4f60\u597d);// "你好"

console.log("你"==="\u4f60");//true
```

数组传递和复制

```js
var a = [1,2,3];
var b = a;
delete b[1];
console.log(a);//[1, undefined × 1, 3]

var a = [4,5,6];
var b = a.slice(0);
delete b[1];
console.log(a);//[4,5,6]
console.log(b);//[4, undefined × 1,6]
```

对象与Function

```js
console.log(typeof Function);//"function"
console.log(typeof Object);//"function"
```

函数声明

```js
aa();
function aa(){
    return true;
    } //true

bb();
var bb = function(){
    return true;
    } //TypeError
```

toString()

```js
2.toString();//SyntaxError
2 .toString(); //"2"
2..toString(); //"2"
(2).toString(); //"2"

[1,[2,"abc","",0,null,undefined,false,NaN],3].toString();
//"1,2,abc,,0,,,false,NaN,3"
```

for in 暴露原型链属性

```js
Object.prototype.foo = 1;

var obj = new Object();
obj.bar = 1;
for(var p in obj){
console.log(p);//bar,foo 都遍历出来了。可以用hasOwnProperty()过滤原型链属性
}
```

switch代替if else

```js
switch (true) {  
    case (a > 10):  
                do_something();
                break;
    case (a < 100):  
                others();  
                break;  
    default:
                ;  
                break;  
};  
```
以上内容来自[马铖](http://www.zhihu.com/people/mc-zone),感谢！

##JavaScript中逗号的特性

```js
(1,2,3);
// return 3
```

```js
(1,2,3,alert)("hello wolrd");
// return "hello world"
```

```js
[1,2,3][1];
// return 2
```

```js
[1,2,3][1,2];
// return 3
```

逗号运算符，多个表达式可以用逗号隔开，其中用逗号隔开的表达式的值分别计算，但整个表达式的值时最后一个表达式的值。

##JavaScript的闭包

```js
var foo = ( function() {
    var bar = 'bar';
    // "闭包" 内的函数可以访问 bar 变量，而 bar 变量对于外部却是隐藏的
    return {
        get_bar: function() {
            return foo;
        },
        update_bar: function(new_bar) {
            bar = new_bar;
        }
    };
}() );

foo.get_bar(); // get 'bar'
foo.bar; // Error
foo.update_bar('new bar'); //update bar
foo.get_bar(); // get new bar
```

> 之所以可能通过这种方式在JavaScript种实现公有，私有，特权变量正是因为闭包，闭包是指在JavaScript中，内部函数总是可以访问其所在的外部函数中声明的参数和变量，即使在其外部函数被返回（寿命终结）了之后。

需要注意的一点时，内部函数访问的是被创建的内部变量本身，而不是它的拷贝。所以在闭包函数内加入 loop 时要格外注意。另外当然的是，闭包特性也可以用于创建私有函数或方法。

关于为什么在 JavaScript 中闭包的应用都有关键词“return”，引用 JavaScript 秘密花园中的一段话：
> 闭包是 JavaScript 一个非常重要的特性，这意味着当前作用域总是能够访问外部作用域中的变量。 因为 函数 是 JavaScript 中唯一拥有自身作用域的结构，因此闭包的创建依赖于函数。
