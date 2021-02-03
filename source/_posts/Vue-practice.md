---
title: Vue面试题
top: true
cover: false
img: 'http://pc.lzlstudy.top/img/banner/1.jpg'
toc: true
mathjax: true
date: 2021-01-11 12:51:20
summary: 本文为个人准备前端面试过程中的学习笔记。
tags:
- Vue面试题
- 春招
categories:
- 前端面试题
---
# 1.v-show和v-if的区别？

```vue
v-if		创建、删除	（没有元素）
v-show 	 	显示、隐藏	（有元素）
```

**v-if**是“真正的”条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

**v-if**也是惰性的：如果在初始渲染时条件为假，则什么都不做，直到条件第一次变为真时，才会开始渲染条件块。

相比之下，**v-show**就简单得多，不管初始条件是什么，元素总是会被渲染，并且只是简单地基于CSS进行显示隐藏切换。

一般来说，v-if有更高的切换开销，**v-show**有更高的初始渲染开销。因此，如果需要频繁切换，则使用**v-show**较好；如果在运行时条件不太可能改变，则使用v-if较好；

# 2、scss、stylus在vue中的使用，以及如何让css只在当前组件生效

```js
<style scoped>
```

**scss ：**

```js
1、下载
	npm install sass-loader node-sass --save
2、
	<style scoped lang="scss">
3、scss的样式穿透
    父元素 /deep/ 子元素
```

**stylus：**

```js
1、下载
	npm install stylus-loader stylus --save
2、
	<style scoped lang="stylus">
3、scss的样式穿透
    父元素 /deep/ 子元素
    父元素 >>> 子元素
```



Vue

父子组件的通信

Watch一般用来干什么

Vue路由hash history
