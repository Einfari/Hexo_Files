title: "How does JavaScript closures work"
date: 2015-07-03 19:32:26
categories: 
- 技术
tags:
- 技术
- JavaScript
photos:
- http://lniu.qiniudn.com/images/fancybox/015.jpg
---

```js
function princess() {
    var adventures = [];

    function princeCharming() {/* .. */} //白马王子

    var unicorn = { /* ... */ }, //独角兽
        dragons = { /* ... */ }, //龙
        squirrel = "Hello";  //松鼠

    adventures.push(unicorn, dragons, squirrel, ...);

    return {
        story: function() {
            return adventures[adventures.length - 1];
        };
    }
}

var littleGirl = princess();
littleGirl.story();
```

<!-- more -->

以下内容来自于[龚一峰](http://www.zhihu.com/people/gong-yifeng)，感谢。

内容来源于：[How do JavaScript closures work?](http://stackoverflow.com/questions/111102/how-do-javascript-closures-work)
里面对闭包的讲解让我深受启发，借此分享下~

主旨：

> if you can't explain it to a six-years-old, you really don't understand it yourself.

正文

> 从前：
> 有一位公主......
> ```js
> function princess() {
```
> 她生活在一个充满奇幻冒险的世界里, 她遇到了她的白马王子, 带着他骑着独角兽开始周游这个世界，与巨龙战斗，巧遇会说话的动物，还有其他一些新奇的事物。
```js
var adventures = [];

function princeCharming() {/* .. */} //白马王子

var unicorn = { /* ... */ }, //独角兽
     dragons = { /* ... */ }, //龙
     squirrel = "Hello";  //松鼠

adventures.push(unicorn, dragons, squirrel, ...);
```
> 但是她不得不回到她的王国里，面对那些年老的大臣。
```js
return {
```
> 她会经常给那些大臣们分享她作为公主最近在外面充满奇幻的冒险经历。
```js
story: function() {
    return adventures[adventures.length - 1];
    };
}
}
```
> 但是在大臣们的眼里，总是认为她只是个小女孩......
```js
var littleGirl = princess();
```
> ....讲的是一些不切实际，充满想象的故事
```js
littleGirl.story();
```
> 即便所有大臣们知道他们眼前的小女孩是真的公主，但是他们却不会相信有巨龙或独角兽，因为他们自己从来没有见到过。大臣们只会觉得它们只存在于小女孩的想象之中。

> 但是我们却知道小女孩述说的是事实.......


论编程抽象能力的重要性....
