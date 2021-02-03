---
title: 前端笔试题错题总结（一）
top: true
cover: true
toc: true
mathjax: true
img: 'http://pc.lzlstudy.top/img/banner/4.jpg'
date: 2020-08-11 21:54:17
summary: "牛客网前端笔试题错题总结"
tags: 
- 前端刷题
- 牛客网
categories:
- 前端面试题
---

# 1、静态语言和动态语言是什么？

#### 静态语言（强类型语言）

静态语言是在编译时变量的数据类型即可确定的语言，多数静态类型语言要求在使用变量之前**必须声明数据类型**。 
例如：C++、Java、Delphi、C#等。

#### 动态语言（弱类型语言）

动态语言是在运行时确定数据类型的语言。变量使用之前**不需要类型声明**，通常变量的类型是**被赋值的那个值的类型**。 
例如PHP/ASP/Ruby/Python/Perl/ABAP/SQL/JavaScript/Unix Shell等等。



# 2、在JS里判断一个对象oStringObject是否为String？

！！**这题有一个陷阱**：要判断的变量**oStringObject**是一个`对象`。

- JS 中值的类型分为原始值类型和对象类型。**原始值类型包括 number, string, boolean, null 和 undefined；对象类型即 object。首先原始值类型它就不是对象**。
- 另外，要**注意 'hello' 和 new String('hello') 的区别，前者是字符串字面值，属于原始类型，而后者是对象**。用 **typeof 运算符**返回的值也是完全不一样的：

```js
typeof 'hello'; // 'string'
typeof new String('hello'); // 'object'
```

- 之所以很多人分不清**字符串字面值**和 String 对象，归根结底就是 JavaScript的语法对你们太过纵容了。当执行 `'helle'.length` 时，发现可以意料之中的返回 5，你们就觉得 `'hello'` 就是 String 对象，不然它怎么会有 String 对象的属性。**其实，这是由于 JS 在执行到这条语句的时候，内部将 'hello' 包装成了一个 String 对象，执行完后，再把这个对象丢弃了，这种语法叫做 “装箱”**，在其他面向对象语言里也有（如 C#）。



# 3、以下代码的输出是什么？

```
以下代码执行后，console 的输出是？
function Foo(){'use strict'
console.log(this.location);
}
Foo()

输出：
Uncaught TypeError: Cannot read property 'location' of undefined
at Foo (<anonymous>:3:18)
at <anonymous>:5:1
```

`'use strict'`是严格模式

**严格模式下禁止this关键字指向全局对象**

此时this为undefined。

因为undefined不存在location属性，undefined.location 就会报错，**TypeError 类型**错误。



```
1、由于javascript的动态特性，常常直接采取key= val的形式赋值 错误！
2、var carname="Volvo";var carname; 顺序执行后，caranme的值依然为Volvo 正确！
```

第一题解释：JavaScript **一般**使用`var key = val`；的形式复制，声明变量的时候也要用`var key`； 如果不用**var**关键字，声明的就是**全局变量**，一般不要这么做；

**第二题解释**：JavaScript代码执行时候，先**扫一遍**JavaScript代码，进行**变量定义**，定义时候**不赋值**，结束完成后，开始执行JavaScript代码，当执行到**赋值语句**的时候，开始给变量**赋值**。**如果两次声明都有赋值**，如：`var a=10; var a=100; `则**变量a的值是100**；

