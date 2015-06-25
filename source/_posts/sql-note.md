title: "SQL笔记"
date: 2015-03-11 10:56:50
categories:
-  技术笔记
tags: 
- 技术
- SQL
photos: 
- http://lniu.qiniudn.com/images/fancybox/004.jpg

---

外来键是一个(或数个)指向另外一个表格主键的栏位。外键的目的是确定资料的参考完整性 (referential integrity)。换言之，只有被准许的资料值才会被存入资料库内。
<!-- more -->


举例来说，假设我们有两个表格：一个 CUSTOMER 表格，里面记录了所有顾客的资料；另一个 ORDERS 表格，里面记录了所有顾客订购的资料。在这里的一个限制，就是所有的订购资料中的顾客，都一定是要跟在 CUSTOMER 表格中存在。在这里，我们就会在 ORDERS 表格中设定一个外键，而这个外键是指向 CUSTOMER 表格中的主键。这样一来，我们就可以确定所有在 ORDERS 表格中的顾客都存在 CUSTOMER 表格中。换句话说，ORDERS
表格之中，不能有任何顾客是不存在于 CUSTOMER 表格中的资料。

这两个表格的结构将会是如下：


##CUSTOMER 表格 
|栏位|性质|
|---|:---|
|SID|主键|
|Last_Name||
|First_Name||

##ORDERS 表格
|栏位|性质|
|---|:---|
|Order_ID|主键|
|Order_Date||
|Customer_SID|外键|
|Amount||


在以上的例子中，ORDERS 表格中的 `Customer_SID` 栏位是一个指向 CUSTOMER 表格中 `SID` 栏位的外来键。

以下列出几个在建置 ORDERS 表格时指定外来键的方式： 

##MySQL

```sql
CREATE TABLE ORDERS
(Order_ID integer,
Order_Date date,
Customer_SID integer,
Amount double,
PRIMARY KEY (Order_ID),
FOREIGN KEY (Customer_SID) REFERENCES CUSTOMER (SID));
```

##Oracle

```sql
CREATE TABLE ORDERS
(Order_ID integer PRIMARY KEY,
Order_Date date,
Customer_SID integer REFERENCES CUSTOMER (SID),
Amount double);
```

##SQL Server
```sql
CREATE TABLE ORDERS
(Order_ID integer PRIMARY KEY,
Order_Date datetime,
Customer_SID integer REFERENCES CUSTOMER (SID),
Amount double);
```

以下的例子则是借着改变表格架构来指定外键。这里假设 ORDERS 表格已经被建立，而外键尚未被指定： 

##MySQL
```sql
ALTER TABLE ORDERS
ADD FOREIGN KEY (Customer_SID) REFERENCES CUSTOMER (SID);
```

##Oracle
```sql
ALTER TABLE ORDERS
ADD (CONSTRAINT fk_orders1) FOREIGN KEY (Customer_SID) REFERENCES CUSTOMER (SID);
```

##SQL Server
```sql
ALTER TABLE ORDERS
ADD FOREIGN KEY (Customer_SID) REFERENCES CUSTOMER (SID);
```


