---
title: 前端笔试题错题总结（二）
top: true
cover: true
toc: true
mathjax: true
img: 'http://pc.lzlstudy.top/img/banner/5.jpg'
date: 2020-08-12 22:50:17
summary: "牛客网前端笔试题错题总结"
tags: 
- 前端刷题
- 牛客网
categories:
- 前端面试题
---

> JavaScript的保留字有哪些？

![关键字1](1.jpg)

![关键字2](2.jpg)

> 原生JS阻止冒泡

```
假设DOM结构为：
<div id="a"><div id="b"></div></div>
JS代码为：
document.getElementById('a').addEventListener('click', e => {console.log(1)});
document.getElementById('b').addEventListener('click', e => {e.preventDefault();console.log(2)});
当点击id为b的div时，控制台输出的内容是：
2
1
```

e.preventDefault() 是用来阻止默认事件的，不是阻止事件冒泡

事件冒泡应该是 e.stopPropagation()



> 转换成整数的方法

```
对于代码 var a = 10.42; 取出 a 的整数部分，以下代码哪些是正确的？
parseInt(a); √
Math.floor(a);√
Math.ceil(a);X
a.split('.')[0];X
```

A. ==parseInt==转换为整数，默认为10进制，结果为10

B. ==floor==向下取整，结果为10 

C. ==ceil==向上取整，结果为11

D. ==split==操作数必需为正则或字符串，结果为TypeError



> JS中children 和 childNodes

1. children 
   **children**：返回父元素所有的直系子节点的集合，注意，children**只返回HTML元素节点**，不包括文本节点和属性节点。
2. childNodes 
   **childNodes**：返回父元素所有的直系子节点的集合，注意，与children不同的是，childNodes会返回**HTML元素节点**，属性节点，**文本节点**。

有时候需要获取指定元素的第一个HTML子节点（非属性/文本节点），最容易想到的就是firstChild 属性。代码中第一个HTML节点前如果有换行，空格，那么firstChild返回的就不是你想要的了。可以使用nodeType来判断下。

```
function getFirst(elem){
    for(var i=0,e;e=elem.childNodes[i++];){
        if(e.nodeType==1)
            return e;
    }
}
```

