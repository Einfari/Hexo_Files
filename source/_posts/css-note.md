title: "CSS笔记"
date: 2015-03-09 16:52:59
categories:
- 技术笔记
tags:
- 技术
- CSS
photos:
- http://lniu.qiniudn.com/images/fancybox/006.jpg

---

##用Margin还是用Padding

###何时应当使用margin：
- 需要在border外侧添加空白时。
- 空白处不需要背景（色）时。
- 上下相连的两个盒子之间的空白，需要相互抵消时。如15px + 20px的margin，将得到20px的空白。

<!-- more -->

###何时应当时用padding：
- 需要在border内测添加空白时。
- 空白处需要背景（色）时。
- 上下相连的两个盒子之间的空白，希望等于两者之和时。如15px + 20px的padding，将得到35px的空白。
##margin在块元素、内联元素中的区别

HTML（这里说的是html标准，而不是xhtml）里分两种基本元素，即block和inline。顾名思义，block元素就是以”块”表现的元素（block-like elements），inline元素即是以”行”表现的元素（character level elements and text strings）。二者表现的主要差别在于，在页面文档中block元素另起一行开始，并独占一行。inline元素则同其它inline元素共处一行。


block元素（块元素）大致有：P | H1 | H2 | H3 | H4 | H5 | H6 | UL | OL | PRE | DL | DIV | NOSCRIPT | BLOCKQUOTE | FORM | HR | TABLE | FIELDSET | ADDRESS(随着html5标准的推进，一些元素将被废除，而一些新的元素将被引入)注意的是并非所有的block元素的默认display属性都是block，像table这种display:table的元素也是block元素。


inline元素（内联元素）大致有：#PCDATA（即文本）| TT | I | B | BIG | SMALL|EM | STRONG | DFN | CODE |SAMP | KBD | VAR | CITE | ABBR | ACRONYM|A | IMG | OBJECT | BR | SCRIPT | MAP | Q | SUB | SUP | SPAN | BDO|INPUT | SELECT | TEXTAREA | LABEL | BUTTON


其中有类特殊的元素：如img | input | select | textarea | button | label等，它们被称为可置换元素（Replaced element）。它们区别一般inline元素（相对而言，称non-replaced element）是：这些元素拥有内在尺寸(intrinsic dimensions),它们可以设置width/height属性。它们的性质同设置了display:inline-block的元素一致。


或许有朋友对非置换元素（non-replaced element）有点疑惑，稍微帮助大家理解一下。非置换元素，W3C 中没有给出明确的定义，但我们从字面可以理解到，非置换元素对应着置换元素（replaced element），也就是说我们搞懂了置换元素的含义，就懂了非置换元素。置换元素，W3C中给出了定义：


> An element that is outside the scope of the CSS formatter, such as an image, embedded document, or applet


从定义中我们可以理解到，置换元素（replaced element）主要是指 img, input, textarea, select, object 等这类默认就有 CSS 格式化外表范围的元素。进而可知，非置换元素（non-replaced element）就是除了 img, input, textarea, select, object 等置换元素以外的元素。


margin在块级元素下，它的性能可以完全体现，上下左右任你设定。且记住块级元素的margin的参照基准是前一个元素即相对于自身之前的元素有margin距离。如果元素是第一个元素，则就是相对于父元素的margin距离（但第一个元素相对于父元素margin-top而父元素又没有设定padding-top/border-top的话要需要印证上面的垂直外边距合并的知识）


margin也能用于内联元素，这是规范所允许的，但是margin-top和margin-bottom对内联元素（对行）的高度没有影响，并且由于边界效果(margin效果)是透明的，它也没有任何的视觉影响。


这是因为边界应用于内联元素时不改变元素的行高度，如果你要改变内联元素的行高即类似文本的行间距，那么你只能使用这三个属性：line-height，fong-size，vertical-align。请记住，这个影响内联元素高度的是line-height而不是height，因为内联元素是一行行的，定一个height的话，那这到底是整段inline元素的高呢？还是inline元素一行的高呢？这都说不准，所以统一都给每行定一个高，只能是line-height了。


margin-top/margin-bottom对内联元素没有多大实际效果，不过margin-left/margin-right还是能够对内联元素产生影响的。应用margin:10px 20px 30px 40px;，左边这个css如果写在inline元素上，它的效果大致是，上下无效果，左边离它相邻元素或者文本距离为40px，右边离它相邻元素或者文本距离为20px。你可以自行尝试一番。


最后在内联元素中还有上文我们提到的非可置换inline元素（non-replaced element），这些个元素img|input|select|textarea|button|label虽然是内联元素，但margin依旧可以影响到它的上下左右！


总结下来margin 属性可以应用于几乎所有的元素，除了表格显示类型（不包括 table-caption, table and inline-table）的元素，而且垂直外边距对非置换内联元素（non-replaced inline element）不起作用。


##常见的浏览器下margin出现的bug

总结一些浏览器中常见的margin Bug吧，以后遇到margin下的布局问题可以查看这里找到解决的方案，如果你还发现其它关于浏览器下margin的Bug你可以发表留言，核对采纳后我会及时添加进去，感谢你的分享：


###IE6中双边距Bug：
发生场合：当给父元素内第一个浮动元素设置margin-left（元素float:left）或margin-right（元素float:right）时margin加倍。
解决方法：是给浮动元素加上display:inline;CSS属性；或者用padding-left代替margin-left。
原理分析：块级对象默认的display属性值是block，当设置了浮动的同时，还设置了它的外边距就会出现这种情况。也许你会问：“为什么之后的对象和第一个对象之间就不存在双倍边距的Bug”？因为浮动都有其相对应的对象，只有相对于其父对象的浮动对象才会出现这样的问题。第一个对象是相对父对象的，而之后对象是相对第一个对象的，所以之后对象在设置后不会出现问题。为什么display:inline可以解决这个双边距bug，首先是inline元素或inline-block元素是不存在双边距问题的。然后，float:left等浮动属性可以让inline元素haslayout，会让inline元素表现得跟inline-block元素的特性一样，支持高宽，垂直margin和padding等，所以div
class的所有样式可以用在这个display inline的元素上。

###IE6中浮动元素3px间隔Bug：
发生场合：发生在一个元素浮动，然后一个不浮动的元素自然上浮与之靠近会出现的3px的bug。
解决方法：右边元素也一起浮动；或者为右边元素添加IE6 Hack \_margin-left:-3px;从而消除3px间距。
原理分析：IE6浏览器缺陷Bug。

###IE6/7负margin隐藏Bug：
发生场合：当给一个有hasLayout的父元素内的非hasLayout元素设置负margin时，超出父元素部分不可见。
解决方法：去掉父元素的hasLayout；或者赋hasLayout给子元素,并添加position:relative;
原理分析：IE6/7独有的hasLayout产生问题。

###IE6/7下ul/ol标记消失bug：
发生场合：当ul/ol触发了haslayout并且是在ul/ol上写margin-left，前面默认的ul/ol标记会消失。
解决方法：给li设置margin-left，而不是给ul/ol设置margin-left。
原理分析：IE6/7浏览器Bug

###IE6/7下margin与absolute元素重叠bug：
发生场合：双栏自适应布局中，左侧元素absolute绝对定位，右侧的margin撑开距离定位。在IE6/7下左侧应用了absolute属性的块级元素与右边的自适应的文字内容重叠。
解决方法：把左侧块级元素更改为内联元素，比如把div更换为span。
原理分析：这是由于IE6/IE7浏览器将inline水平标签元素和block水平的标签元素没有加以区分一视同仁渲染了。属于IE6/7浏览器渲染Bug。

###IE6/7/8下auto margin居中bug：
发生场合：给block元素设置margin auto无法居中
解决方法：出现这种bug的原因通常是没有Doctype，然后触发了ie的quirks mode，加上Doctype声明就可以了。在《打败IE的葵花宝典》里给出的方法是给block元素添加一个width能够解决，但根据本人亲测，加with此种方法是无效的，如果没有Doctype即使给元素添加width也无法让block元素居中。
原理分析：缺少Doctype声明。

###IE8下input[button | submit] 设置margin:auto无法居中
发生场合：ie8下，如果给像button这样的标签（如button input[type="button"] input[type="submit"]）设置{ display: block; margin:0 auto; }如果不设置宽度的话无法居中。
解决方法：可以给为input加上宽度
原理分析：IE8浏览器Bug。

###IE8百分比padding垂直margin bug：
发生场合：当父元素设置了百分比的padding，子元素有垂直的margin的时候，就好像父元素被设置了margin一样。
解决方法：给父元素加一个overflow:hidden/auto。
原理分析：IE8浏览器Bug。
