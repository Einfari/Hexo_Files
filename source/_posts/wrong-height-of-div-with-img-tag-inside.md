title: "div块与内部的img元素高度不一致问题"
date: 2015-07-07 11:08:52
categories: 
- 技术笔记
tags:
- 技术
- CSS
photos:
- http://lniu.qiniudn.com/images/fancybox/016.jpg
---
今天在做页面的时候遇到一个问题，类似于下面的页面结构：

```html
<div>
    <img src="foo.jpg" alt=" ">
</div>
```

整个div块的高度比img的高度高了一些，比如img的高度是10px，但是div块的高度却可能是16px，img元素未主动设置任何margin或者padding值，很奇怪的表现。

去stackoverflow上找了一下，原来是因为image是行内元素，image的自然样式会给image默认添加一些margin-bottom值，解决方法也很简单：

```css
div img {
    display: block;
    float: left; /*可选*/
    margin: 0 auto; /*可选*/
}
```

以上。
