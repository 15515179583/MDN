# call、apply和bind用法

## 介绍

call、apply、bind的作用是改变函数运行时`this`的指向，欲了解函数，首先需知`this`

## this
this到底是什个什么样的东西呢？<br>
`this`即“这个”的意思,在代码中`this`指向调用函数的主体对象。<br><br>
*举个栗子*：在一个代码中，例如：
```
var obj = {
  foo: function(){
    console.log(this)
  }
}
var bar = obj.foo
obj.foo() // 打印出的 this 是 obj
bar() // 打印出的 this 是 window
```
那么为什么会出现这种现象呢？这就得从函数的调用来说起了。<br>在 java script 中说起函数调用你首先想到的肯定是`myFunction(a, b)`,厉害点的可能还会想到`obj.objFunction()`没错，这些都可以实现对函数调用，那么这些调用方式又有什么区别和联系呢？<br>首先我们先列举出来这些个调用方式
- 作为一个函数进行调用`myFunction(a, b)`
- 作为对象的一个方法进行调用`obj.objFunction()`
- 使用构造函数调用`let Bob = new Student('Bob', 18)`
- 作为函数的方法调用`myFunction.call(context, a, b)`

一般情况下，我们都习惯使用前几种方式，殊不知最后一种`myFunction.call(context, a, b)`才是正常的调用形式,其他几种都是语法糖，可以等价转换为此形式。<br>
```
myFunction(a, b) 可等价于 myFunction.call(undefined, a, b)

obj.objFunction() 可等价于 obj.objFunction.call(obj)
```
这样来说`this`就好理解了，`this`其实就是以上式子中的**context**及call中的第一个参数。<br><br>
**注意：**
> 如果你传的 context 是 null 或者 undefined，那么 window 对象就是默认的 context（严格模式下默认 context 是 undefined）

## call
call(打电话)可以实现函数与对象间的交流,使其具有联系<br>
`fun.call(context, arg1, arg2, ...)`
- 参数说明：
  - *context* :在 `fun`函数运行时指定的`this`值,当第一个参数为null、undefined的时候，默认指向window。
  - *arg1, arg2*：...指定的参数列表。
- 返回值：<br>使用调用者提供的 this 值和参数调用该函数的返回值。若该方法没有返回值，则返回undefined。

## apply
与call相似，只是参数不同而已<br>
`fun.apply(context, arr)`
- 参数说明：
  - *context* :在 `fun`函数运行时指定的`this`值,当第一个参数为null、undefined的时候，默认指向window。
  - arr 一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 func 函数。

*举栗子*：将数组添加到另一个数组
```
let array = ['s', 'm', 'i', 'l', 'e']
let elements = [0, 1, 2]
array.push.apply(array, elements);
console.info(array); // ['s', 'm', 'i', 'l', 'e', 0, 1, 2]
```
既然`call`与`apply`没多大区别，那么如何在两者间进行选择呢？<br>
在参数杂乱无章，没有任何关联时建议使用`call`。如若参数存在一个数组中那么使用`apply`更加的合适

## bind
bind会创建一个新绑定函数,它包装了原函数对象<br>
`fun.bind(context, arg1, arg2, ...)`
- 参数说明：
  - *context* :在 `fun`函数运行时指定的`this`值,当第一个参数为null、undefined的时候，默认指向window。
  - *arg1, arg2*：...指定的参数列表。
- 返回值：<br>返回一个原函数的拷贝，并拥有指定的this值和初始参数。

`bind` 方法不会立即执行，而是返回一个改变了上下文 `this` 后的函数。而原函数中的 `this` 并没有被改变，依旧指向全局对象 `window`。

## 主要应用场景
- 求数组中的最大和最小值
```
var arr = [1,2,3,4,5]
var max = Math.max.apply(null,arr)//5
var min = Math.min.apply(null,arr)//1
```
- 数组追加
```
let array = ['s', 'm', 'i', 'l', 'e']
let elements = [0, 1, 2]
array.push.apply(array, elements);
// array['s', 'm', 'i', 'l', 'e', 0, 1, 2]
```
- 判断变量类型
```
function isArray(obj){
  return Object.prototype.toString.call(obj) == '[object Array]';
}
isArray([]) // true
isArray('dcbryant') // false
```
- 使用 log 代理 console.log
```
function log(){
  console.log.apply(console, arguments);
}
// 当然也有更方便的 var log = console.log()
```
- 利用call和apply做继承
```
function Person(name,age){
  // 这里的this都指向实例
  this.name = name
  this.age = age
  this.sayAge = function(){
    console.log(this.age)
  }
}
function Female(){
  Person.apply(this,arguments)//将父元素所有方法在这里执行一遍就继承了
}
var dot = new Female('Dot',2)
```
## 参考
[一次性讲清楚apply/call/bind](https://www.jianshu.com/p/cc7360f8fd1d)