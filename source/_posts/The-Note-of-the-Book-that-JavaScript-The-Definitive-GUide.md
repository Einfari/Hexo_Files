title: "The Note of the Book <JavaScript: The Definitive GUide>"
date: 2015-08-10 11:06:45
categories: 
- 技术
tags:
- JavaScript
photos:
- http://lniu.qiniudn.com/images/fancybox/017.jpg
---

## 函数作用域和变量声明

在一些類似於C語言的編程語言中，花括號中的每一段代碼都具有各自的作用域，而且變量聲明在聲明它們的代碼段之前是不可見的，我們稱之爲塊級作用域（block scope），而 JavaScript 中沒有塊級作用域。JavaScript 中取而代之的使用了函數作用域（function scope）：變量在聲明它們的函數體以及這個函數體嵌套的任意函數體內都是有定義的。

<!-- more -->

{% gist 9ba81a813c4fa9bbdafe %}

JavaScript 
的函數作用域是指函數內聲明的所有變量在函數體內始終是可見的。有意思的是，這意味着變量在聲明之前已經可以使用。JavaScript 的這個特性被非正式的稱爲聲明提前（hoisting），即 JavaScript 函數里聲明的所有變量（但不涉及賦值）都被“提前”至函數的頂部（聲明提前這步操作是在 JavaScript 引擎的“預編譯”時進行的，是在代碼開始運行之前),看一下如下代碼：

{% gist 6ba9265a1b613aa297ec %}

在 JavaScript 中,函數內的變量聲明會被“提前”至函數頂部，同時變量初始化留在原來的位置：

{% gist d6f8c7b4d0ecc4c869c0 %}

由於 JavaScript 沒有塊級作用域， 所以將變量聲明寫在函數的頂部，而不是將聲明靠在使用變量的地方，這是一個好習慣，很好的反映了真實的變量作用域。


## 作爲屬性的變量

當聲明一個 JavaScript 變量時，實際上是定義了全局對象的一個屬性。當使用 var 聲明一個變量時，這個變量是不可配置的，也就是說這個變量不能通過 delete 運算符刪除。

## in 運算符

in 運算符希望它的左操作數是一個字符串或者可以轉換爲字符串，希望它的右操作數是一個對象。如果右側的對象擁有一個名爲左操作數的屬性名，那麼這個表達式返回 true ，例如：

{% gist ac29e00b24a211b682ab %}

## instanceof 運算符

instanceof 運算符希望它的左操作數是一個對象，右操作數是標識對象的類。如果左側的對象是右側的類的實例，返回true， 否則返回false。JavaScript 中對象的類是通過初始化它們的構造函數來定義的。 這樣的話，instanceof 的右操作數應當是一個函數。比如：

{% gist 2b6d01396f06d7839cba %}
