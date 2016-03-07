title: 如何使用CSS创建各种图形形状
date: 2016-03-03 11:17:56
categories: 
- 技术笔记
tags: 
- CSS
photos:
- http://lniu.qiniudn.com/images/fancybox/019.jpg

---
<style>
#square {
    width: 100px;
    height: 100px;
    background-color: lightblue;
}

#rectangle {
    width: 200px;
    height: 100px;
    background-color: lightblue;
}

#triangle-left-top {
    width: 0;
    height: 0;
    border-top: 100px solid lightblue;
    border-right: 100px solid transparent;
}

#triangle-right-top {
    width: 0;
    height: 0;
    border-top: 100px solid lightblue;
    border-left: 100px solid transparent;
}

#triangle-left-bottom {
    width: 0;
    height: 0;
    border-bottom: 100px solid lightblue;
    border-right: 100px solid transparent;
}

#triangle-right-bottom {
    width: 0;
    height: 0;
    border-bottom: 100px solid lightblue;
    border-left: 100px solid transparent;
}

#parallelogram {
    width: 150px;
    height: 100px;
    -webkit-transform: skew(20deg);
    -moz-transform: skew(20deg);
    -o-transform: skew(20keg);
    background-color: lightblue;
    margin-left: 18px;
}

#trapezoid {
	width: 100px;
	height: 0;
	border-bottom: 100px solid lightblue;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
}

#star-six {
	width: 0;
	height: 0;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-bottom: 100px solid lightblue;
	position: relative;
}

#star-six::after {
	width: 0;
	height: 0;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-top: 100px solid lightblue;
	position: absolute;
	content: "";
	top: 30px;
	left: -50px;
}

#star-five {
   margin: 50px 0;
   position: relative;
   display: block;
   color: lightblue;
   width: 0px;
   height: 0px;
   border-right:  100px solid transparent;
   border-bottom: 70px  solid lightblue;
   border-left:   100px solid transparent;
   -moz-transform:    rotate(35deg);
   -webkit-transform: rotate(35deg);
   -ms-transform:     rotate(35deg);
   -o-transform:      rotate(35deg);
}

#star-five::before {
   border-bottom: 80px solid lightblue;
   border-left: 30px solid transparent;
   border-right: 30px solid transparent;
   position: absolute;
   height: 0;
   width: 0;
   top: -45px;
   left: -65px;
   display: block;
   content: '';
   -webkit-transform: rotate(-35deg);
   -moz-transform:    rotate(-35deg);
   -ms-transform:     rotate(-35deg);
   -o-transform:      rotate(-35deg);
}

#star-five::after {
   position: absolute;
   display: block;
   color: lightblue;
   top: 3px;
   left: -105px;
   width: 0px;
   height: 0px;
   border-right: 100px solid transparent;
   border-bottom: 70px solid lightblue;
   border-left: 100px solid transparent;
   -webkit-transform: rotate(-70deg);
   -moz-transform:    rotate(-70deg);
   -ms-transform:     rotate(-70deg);
   -o-transform:      rotate(-70deg);
   content: '';
}

#pentagon {
    position: relative;
    width: 54px;
    border-width: 50px 18px 0;
    border-style: solid;
    border-color: lightblue transparent;
}
#pentagon:before {
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    top: -85px;
    left: -18px;
    border-width: 0 45px 35px;
    border-style: solid;
    border-color: transparent transparent lightblue;
}

#hexagon {
	width: 100px;
	height: 55px;
	background: lightblue;
	position: relative;
}
#hexagon:before {
	content: "";
	position: absolute;
	top: -25px; 
	left: 0;
	width: 0;
	height: 0;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-bottom: 25px solid lightblue;
}
#hexagon:after {
	content: "";
	position: absolute;
	bottom: -25px; 
	left: 0;
	width: 0;
	height: 0;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-top: 25px solid lightblue;
}

#heart {
    position: relative;
    width: 100px;
    height: 90px;
}
#heart:before,
#heart:after {
    position: absolute;
    content: "";
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    background: lightblue;
    -moz-border-radius: 50px 50px 0 0;
    border-radius: 50px 50px 0 0;
    -webkit-transform: rotate(-45deg);
       -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
         -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
    -webkit-transform-origin: 0 100%;
       -moz-transform-origin: 0 100%;
        -ms-transform-origin: 0 100%;
         -o-transform-origin: 0 100%;
            transform-origin: 0 100%;
}
#heart:after {
    left: 0;
    -webkit-transform: rotate(45deg);
       -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
         -o-transform: rotate(45deg);
            transform: rotate(45deg);
    -webkit-transform-origin: 100% 100%;
       -moz-transform-origin: 100% 100%;
        -ms-transform-origin: 100% 100%;
         -o-transform-origin: 100% 100%;
            transform-origin :100% 100%;
}

#infinity {
    position: relative;
    width: 212px;
    height: 100px;
}

 
#infinity:before,
#infinity:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 60px;    
    border: 20px solid lightblue;
    -moz-border-radius: 50px 50px 0 50px;
         border-radius: 50px 50px 0 50px;
    -webkit-transform: rotate(-45deg);
       -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
         -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
}

 
#infinity:after {
    left: auto;
    right: 0;
    -moz-border-radius: 50px 50px 50px 0;
         border-radius: 50px 50px 50px 0;
    -webkit-transform: rotate(45deg);
       -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
         -o-transform: rotate(45deg);
            transform: rotate(45deg);
}

#egg {
   display:block;
   width: 126px; 
   height: 180px;
   background-color: lightblue;
   -webkit-border-radius: 63px 63px 63px 63px / 108px 108px 72px 72px;
   border-radius:        50%   50%  50%  50%  / 60%   60%   40%  40%;
}

#talkbubble {
   width: 120px; 
   height: 80px; 
   background: lightblue;
   position: relative;
   -moz-border-radius:    10px; 
   -webkit-border-radius: 10px; 
   border-radius:         10px;
}
#talkbubble:before {
   content:"";
   position: absolute;
   right: 100%;
   top: 26px;
   width: 0;
   height: 0;
   border-top: 13px solid transparent;
   border-right: 26px solid lightblue;
   border-bottom: 13px solid transparent;
}

#diamond {
    border-style: solid;
    border-color: transparent transparent lightblue transparent;
    border-width: 0 25px 25px 25px;
    height: 0;
    width: 50px;
    position: relative;
    margin: 20px 0 50px 0;
}
#diamond:after {
    content: "";
    position: absolute;
    top: 25px;
    left: -25px;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: lightblue transparent transparent transparent;
    border-width: 70px 50px 0 50px;
    }
    #yin-yang {
	width: 96px;
	height: 48px;
	background: #eee;
	border-color: black;
	border-style: solid;
	border-width: 2px 2px 50px 2px;
	border-radius: 100%;
	position: relative;
}	

#yin-yang {
	width: 96px;
	height: 48px;
	background: #eee;
	border-color: black;
	border-style: solid;
	border-width: 2px 2px 50px 2px;
	border-radius: 100%;
	position: relative;
}

#yin-yang:before {
	content: "";
	position: absolute;
	top: 50%;
	left: 0;
	background: #eee;
	border: 18px solid black;
	border-radius: 100%;
	width: 12px;
	height: 12px;
}	
#yin-yang:after {
	content: "";
	position: absolute;
	top: 50%;
	left: 50%;
	background: black;
	border: 18px solid #eee;
	border-radius:100%;
	width: 12px;
	height: 12px;
} 
</style>

# 1.正方形

<div id="square">
</div>

```css
#square {
    width: 100px;
    height: 100px;
    background-color: lightblue;
}
```
<!-- more -->

# 2.长方形

<div id="rectangle">
</div>

```css
#rectangle {
    width: 200px;
    height: 100px;
    background-color: lightblue;
}
```

# 3.左上三角

<div id="triangle-left-top">
</div>

```css
#triangle-left-top {
    width: 0;
    height: 0;
    border-top: 100px solid lightblue;
    border-right: 100px solid transparent;
}
```

# 4.右上三角

<div id="triangle-right-top">
</div>

```css
#triangle-right-top {
    width: 0;
    height: 0;
    border-top: 100px solid lightblue;
    border-left: 100px solid transparent;
}
```

# 5.左下三角

<div id="triangle-left-bottom">
</div>

```css
#triangle-left-bottom {
    width: 0;
    height: 0;
    border-bottom: 100px solid lightblue;
    border-right: 100px solid transparent;
}
```

# 6.右下三角

<div id="triangle-right-bottom">
</div>

```css
#triangle-right-bottom {
    width: 0;
    height: 0;
    border-bottom: 100px solid lightblue;
    border-left: 100px solid transparent;
}
```

# 7.平行四边形
<div id="parallelogram">
</div>

```css
#parallelogram {
    width: 150px;
    height: 100px;
    -webkit-transform: skew(20deg);
    -moz-transform: skew(20deg);
    -o-transform: skew(20keg);
    background-color: lightblue;
}
```

# 8.梯形
<div id="trapezoid">
</div>

```css
#trapezoid {
	width: 100px;
	height: 0;
	border-bottom: 100px solid lightblue;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
}
```

# 9.六角星

<div id="star-six">
</div>

```css
#star-six {
	width: 0;
	height: 0;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-bottom: 100px solid lightblue;
	position: relative;
}

#star-six::after {
	width: 0;
	height: 0;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-top: 100px solid lightblue;
	position: absolute;
	content: "";
	top: 30px;
	left: -50px;
}
```

# 10.五角星

<div id="star-five">
</div>

```css
#star-five {
   margin: 50px 0;
   position: relative;
   display: block;
   color: lightblue;
   width: 0px;
   height: 0px;
   border-right:  100px solid transparent;
   border-bottom: 70px  solid lightblue;
   border-left:   100px solid transparent;
   -moz-transform:    rotate(35deg);
   -webkit-transform: rotate(35deg);
   -ms-transform:     rotate(35deg);
   -o-transform:      rotate(35deg);
}

#star-five::before {
   border-bottom: 80px solid lightblue;
   border-left: 30px solid transparent;
   border-right: 30px solid transparent;
   position: absolute;
   height: 0;
   width: 0;
   top: -45px;
   left: -65px;
   display: block;
   content: '';
   -webkit-transform: rotate(-35deg);
   -moz-transform:    rotate(-35deg);
   -ms-transform:     rotate(-35deg);
   -o-transform:      rotate(-35deg);
}

#star-five::after {
   position: absolute;
   display: block;
   color: lightblue;
   top: 3px;
   left: -105px;
   width: 0px;
   height: 0px;
   border-right: 100px solid transparent;
   border-bottom: 70px solid lightblue;
   border-left: 100px solid transparent;
   -webkit-transform: rotate(-70deg);
   -moz-transform:    rotate(-70deg);
   -ms-transform:     rotate(-70deg);
   -o-transform:      rotate(-70deg);
   content: '';
}
```

# 11.五边形

<div id="pentagon">
</div>

```css
#pentagon {
    position: relative;
    width: 54px;
    border-width: 50px 18px 0;
    border-style: solid;
    border-color: lightblue transparent;
}
#pentagon:before {
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    top: -85px;
    left: -18px;
    border-width: 0 45px 35px;
    border-style: solid;
    border-color: transparent transparent lightblue;
}
```

# 12.六边形

<div id="hexagon">
</div>

```css
#hexagon {
	width: 100px;
	height: 55px;
	background: lightblue;
	position: relative;
}
#hexagon:before {
	content: "";
	position: absolute;
	top: -25px; 
	left: 0;
	width: 0;
	height: 0;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-bottom: 25px solid lightblue;
}
#hexagon:after {
	content: "";
	position: absolute;
	bottom: -25px; 
	left: 0;
	width: 0;
	height: 0;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-top: 25px solid lightblue;
}
```

# 13.桃心

<div id="heart">
</div>

```css
#heart {
    position: relative;
    width: 100px;
    height: 90px;
}
#heart:before,
#heart:after {
    position: absolute;
    content: "";
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    background: lightblue;
    -moz-border-radius: 50px 50px 0 0;
    border-radius: 50px 50px 0 0;
    -webkit-transform: rotate(-45deg);
       -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
         -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
    -webkit-transform-origin: 0 100%;
       -moz-transform-origin: 0 100%;
        -ms-transform-origin: 0 100%;
         -o-transform-origin: 0 100%;
            transform-origin: 0 100%;
}
#heart:after {
    left: 0;
    -webkit-transform: rotate(45deg);
       -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
         -o-transform: rotate(45deg);
            transform: rotate(45deg);
    -webkit-transform-origin: 100% 100%;
       -moz-transform-origin: 100% 100%;
        -ms-transform-origin: 100% 100%;
         -o-transform-origin: 100% 100%;
            transform-origin :100% 100%;
}
```

# 14.无限大符号

<div id="infinity">
</div>

```css
#infinity {
    position: relative;
    width: 212px;
    height: 100px;
}

 
#infinity:before,
#infinity:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 60px;    
    border: 20px solid lightblue;
    -moz-border-radius: 50px 50px 0 50px;
         border-radius: 50px 50px 0 50px;
    -webkit-transform: rotate(-45deg);
       -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
         -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
}

 
#infinity:after {
    left: auto;
    right: 0;
    -moz-border-radius: 50px 50px 50px 0;
         border-radius: 50px 50px 50px 0;
    -webkit-transform: rotate(45deg);
       -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
         -o-transform: rotate(45deg);
            transform: rotate(45deg);
}
```

# 15.蛋

<div id="egg">
</div>

```css
#egg {
   display:block;
   width: 126px; 
   height: 180px;
   background-color: lightblue;
   -webkit-border-radius: 63px 63px 63px 63px / 108px 108px 72px 72px;
   border-radius:        50%   50%  50%  50%  / 60%   60%   40%  40%;
}
```

# 16.提示对话框

<div id="talkbubble">
</div>

```css
#talkbubble {
   width: 120px; 
   height: 80px; 
   background: lightblue;
   position: relative;
   -moz-border-radius:    10px; 
   -webkit-border-radius: 10px; 
   border-radius:         10px;
}
#talkbubble:before {
   content:"";
   position: absolute;
   right: 100%;
   top: 26px;
   width: 0;
   height: 0;
   border-top: 13px solid transparent;
   border-right: 26px solid lightblue;
   border-bottom: 13px solid transparent;
}
```

# 17.钻石

<div id="diamond">
</div>

```css
#diamond {
    border-style: solid;
    border-color: transparent transparent lightblue transparent;
    border-width: 0 25px 25px 25px;
    height: 0;
    width: 50px;
    position: relative;
    margin: 20px 0 50px 0;
}
#diamond:after {
    content: "";
    position: absolute;
    top: 25px;
    left: -25px;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: lightblue transparent transparent transparent;
    border-width: 70px 50px 0 50px;
}
```

# 18.八卦

<div id="yin-yang">
</div>


```css
#yin-yang {
	width: 96px;
	height: 48px;
	background: #eee;
	border-color: black;
	border-style: solid;
	border-width: 2px 2px 50px 2px;
	border-radius: 100%;
	position: relative;
}	
#yin-yang:before {
	content: "";
	position: absolute;
	top: 50%;
	left: 0;
	background: #eee;
	border: 18px solid black;
	border-radius: 100%;
	width: 12px;
	height: 12px;
}	
#yin-yang:after {
	content: "";
	position: absolute;
	top: 50%;
	left: 50%;
	background: black;
	border: 18px solid #eee;
	border-radius:100%;
	width: 12px;
	height: 12px;
} 
```
