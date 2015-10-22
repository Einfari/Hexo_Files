title: Cannot add or update a child row a foreign key constraint fails
date: 2015-06-24 18:21:51
categories: 
- 技术笔记
tags:
- 技术
- MySQL
photos:
- http://lniu.qiniudn.com/images/fancybox/012.jpg
---

今天在升级数据库的时候，出现报错信息 "Cannot add or update a child row: a foreign key constraint fails"，看起来是外键关联失败的问题，检查了一下数据库表创建的过程，发现创建表的时候没有关联这个外键，那么为什么现在关联的时候会失败呢？按道理不会出现这样的问题，无奈只好祭出我的Google大法。

<!-- more -->

第一条答案是StackOverflow上的一个问题，点进去发现，大概的意思是说，第二张表用来做外键关联的那个键的一些值，在第一张表里面找不到，所以无法关联。我到数据库里面select看了一下，果然，第二个表里面用来关联那个键的一些值是0，而这个键在第一个表里面是id，而id是不能为0的，所以一直关联失败。

由于是测试环境（当然也正是因为测试环境所以才会产生一些“脏数据”）,所以就直接删除了第二个表里面的脏数据，然后就可以成功升级了。

附上StackOverflow答案链接 [cannot-add-or-update-a-child-row-a-foreign-key-constraint-fails](http://stackoverflow.com/questions/5005388/cannot-add-or-update-a-child-row-a-foreign-key-constraint-fails)
