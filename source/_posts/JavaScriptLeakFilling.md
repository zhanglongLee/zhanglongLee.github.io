---
title: JavaScriptLeakFilling
top: true
cover: true
toc: true
mathjax: true
img: 'http://pc.lzlstudy.top/img/banner/0.jpg'
date: 2020-08-14 14:08:43
summary:JavaScript查漏补缺
tags: 
- 前端笔试题
- 牛客网
  categories:
- 前端基础 
---

# 随机数

生成随机数的方法有很多，一般使用Math.random()；时间戳new Date().getTime()

> 生成16位随机数

```
function seed1() {
  return String(Math.random()).split(".")[1].slice(0,16);
}
```

> 输入一个字符串变量str，基于str生成一个16位的随机数，相同的str值生成的随机数相同

这里可以通过1.将str转换成数值 ==str.split('').map(char=>char.charCodeAt()).join('');==其中==charCodeAt()==是获取字符的==unicode==编码；2.使用==Math.sin()==去计算数值的sin值，返回一个保留16位小数的值，再通过截取小数点后面16位达到基于str的16位随机数效果。

```
function seed2(str) {
	// 1.变成数值
	let num = str.split('').map(char=>char.charCodeAt()).join('');
	// 2.变成随机数值
	return String(Math.sin(num)).split('.')[1].slice(0,16)
}
console.log(seed('a'));
console.log(seed('ab'));
console.log(seed('123'));
console.log(seed('abc123'));

结果是：
"3796077390275217"
"5871119596196526"
"9208881390176484"
"6794012943516915"
```



# 数值去重

> 遍历数组法

实现思路：新建一个数组，遍历要去重的数组，当值不在新的数组中（indexOf(n)===-1）就加入新的数组

```
function unique(arr) {
	var newArr = [];
	for(let i=0,len=arr.length;i<len;i++){
		if(newArr.indexOf(arr[i])===-1){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}
```



> ES6的new Set()

基本思路：ES6提供了新的数据结构Set()。它类似数组，但是成员的值都是唯一的，没有重复的值。Set函数可以接受一个数组（或类似数组的对象）作为参数，用来初始化。

> 数组的filter函数

filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。

**注意：** filter() 不会对空数组进行检测。

**注意：** filter() 不会改变原始数组。

函数接收三个参数：

- item （当前遍历的数组项）
- i （当前项索引）
- arr （调用filter数组本身）

基本思路：和第一种方法差不多，设定返回条件：下标与当前索引相等**arr.indexOf(item)===i**，最后返回一个新的数组。补充：indexOf查询元素下标是从前往后查找，且之后返回第一次遇到该元素的下标。

