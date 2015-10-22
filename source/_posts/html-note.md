title: "HTML学习笔记"
date: 2015-03-08 21:29:06
categories: 
- 技术笔记
tags:
- 技术 HTML
tags: 
- html
- 技术
photos:
- http://lniu.qiniudn.com/images/fancybox/007.jpg

---
# 《Head First HTML CSS And XHTML》
- - -
* 如果有多个<code>&lt;a&gt;</code>元素含有对象(target),如果<code>target</code>的值都为 <code>\_blank</code>,那么所有的页面都在单独的新页面中打开；如果<code>target</code>的值不是<code>\_target</code>,而是一个统一的值,比如<code>foo</code>,那么第一个点击的链接将在新页面中打开,记作页面__a__,其余的`target`值为`foo`的页面都将在页面__a__中打开.因为<code>\_blank</code>是一个特例,它总是告诉浏览器打开一个新的窗口.

<!-- more -->

* 可以使用<code>&lt;a id="foo"&gt;Foo&lt;/a&gt;</code>为Foo字符串定义一个目标锚,然后通过<code>&lt;a href="url#foo"&gt;Bar&lt;/a&gt;</code>来进行跳转;
* 为<code>&lt;a&gt;</code>元素添加<code>&lt;title&gt;</code>属性,帮助浏览器和屏幕阅读器识别;
