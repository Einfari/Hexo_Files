title: 如何使用JavaScript在iOS设备中区分微信和微博的浏览器
date: 2016-03-09 16:39:46
categories:
- 技术笔记
tags:
- JavaScript
photos:
- http://lniu.qiniudn.com/images/fancybox/022.jpg
---

今天遇到一个比较坑的问题，因为公司开发了一个新的 iOS APP，我就在页面上添加了一个 APPstore 的下载链接，在 chrome 和我的 Nexus 上测试都没有任何问题，然后就提交给测试了，结果测试说他的 iPhone 上的微信和微博点下载链接都没有反应，查了一下资料，发现是微信和微博屏蔽了 Appstore 的下载链接，微信里面是必须先跳转到应用宝，微博里面没研究，这时候也来不及去应用宝申请微应用了，就干脆做一个简单的需求，当 iOS
用户在微信和微博中点击下载链接的时候，弹出提示：请使用浏览器打开。大概的实现如下：

```js
var is_ios = (/iphone/i).test(navigator.userAgent);

if (is_ios) {
    var isWeixinBrowser = (/micromessenger/i).test(navigator.userAgent);
    var isWeiboBrowser = (/weibo/i).test(navigator.userAgent);
    if (isWeixinBrowser || isWeiboBrowser) {
        $('.download').click(function() {
        alert('请使用浏览器打开链接');
        return false;
    });
    }
}
```

奇怪的是 Android 上并没有这个问题，可以直接下载。所以就有一个好玩的现象：企鹅家的应用宝是做 Android 应用分发的，可是在 Android 并没有强制跳转应用宝，也就起不到引流的作用， 然而 Android 用户并不会去 APPStore 下载应用，A Sad Story。


