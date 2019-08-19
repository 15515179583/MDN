## 介绍
JavaScript的`Array`对象是用于构造数组的全局对象，数组是类似于列表的高阶对象<br>
那么如何创建一个数组，又怎么使用数组呢？下文中会详细介绍。

## 创建数组
在 js 中，我们用`[]`来表示一个数组元素，我们可以通过`let arr = []`的方式来创建一个空的数组，当然我们也可以通过`let arr = new Array()`的方法来创建一个数组对象。

## 数组的一些简单操作
- 向数组内添加元素
  - 末尾：我们使用`arr.push()`方法向数组末尾添加元素
  - 头部：我们使用`arr.unshift()`方法向数组头部添加元素
- 删除数组元素
  - 末尾：我们使用`arr.pop()`方法从数组末尾删除元素
  - 头部：我们使用`arr.shift()`方法从数组头部删除元素
- 删除特定元素<br>
  我们通过`arr.splice(begin,end)`方式来删除从下标为`begin`到`end`的元素，特别的当`begin ==  end`时，删除下标为`begin`的元素
- 查找数组元素
  - 可以通过下标法访问`arr[0]`,`arr[34]`,`arr[arr.length-1]`
  - 可以通过`arr.indexOf(item)`获取`item`的下标值
- 遍历数组
  - 方式一
  ```
    arr.forEach((item,index) => {
      console.log(item, index);
    })
  ```
  - 方式二
  ```
    for(let i=0; i < arr.length; i++){
      console.log(arr[i]);
    }
  ```
- 数组复制<br>
  可以通过`newarr = arr.slice()`将`arr`中的元素复制到`newarr`中

## 属性
- `Array.length` Array 构造函数的 length 属性，其值为1（注意该属性为静态属性，不是数组实例的 length 属性）。
- `get Array[@@species]` 返回 Array 构造函数。
- `Array.prototype` 通过数组的原型对象可以为所有数组对象添加属性。

## 常用方法
- `Array.from()` 从类数组对象或者可迭代对象中创建一个新的数组实例。
- `Array.isArray()` 用来判断某个变量是否是一个数组对象。
- `Array.of()` 根据一组参数来创建新的数组实例，支持任意的参数数量和类型。
- `Array.prototype.reverse()` 颠倒数组中元素的排列顺序
- `Array.prototype.sort()` 对数组元素进行排序
- `Array.prototype.splice()` 在任意的位置给数组添加或删除任意个元素。

- `Array.prototype.concat()` 返回一个由当前数组和其它若干个数组或者若干个非数组值组合而成的新数组
- `Array.prototype.join()` 连接所有数组元素组成一个字符串。
- `Array.prototype.slice()` 抽取当前数组中的一段元素组合成一个新数组。
- `Array.prototype.toString()` 返回一个由所有数组元素组合而成的字符串。
- `Array.prototype.indexOf()` 返回数组中第一个与指定值相等的元素的索引
- `Array.prototype.lastIndexOf()` 返回数组中最后一个与指定值相等的元素的索引

- `Array.prototype.forEach()` 为数组中的每个元素执行一次回调函数。
- `Array.prototype.every()` 如果数组中的每个元素都满足测试函数，则返回 true，否则返回 false。
- `Array.prototype.some()` 如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false。
- `Array.prototype.filter()` 将所有在过滤函数中返回 true 的数组元素放进一个新数组中并返回。
- `Array.prototype.map()` 返回一个由回调函数的返回值组成的新数组。
- `Array.prototype.reduce()` 从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。