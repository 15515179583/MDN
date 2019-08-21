# Map 与 Set
在javaScript 中`Map` 和 `Set`可以用容器来理解记忆，类似的`Array`可以当作**队列容器**和**栈容器**

## Map
`Map`对象以键值对的形式存在，任何值都可以作为一个建或一个值
在`Map`中，键和值呈一一对应的关系
**注意：键值具有唯一性**
### `Map`的创建与使用
可以用`let myMap = new Map()`来创建一个`Map`对象
通过`myMap.set(key, value)`方法来向`Map`中添加新的值，
通过`myMap.get(key)`方法来获取`key`所对应的值，
### 迭代获取`Map`内容
- 可以使用`for..of`方法来获取<br>
  *举个栗子*：<br>
  ```
  for (let [key, value] of myMap) {
    console.log(ker + " --> " + value)
  }
  ```
- 可以使用`forEach()`方法来获取<br>
*举个栗子*：<br>
  ```
  myMap.forEach((value,key) => {
    console.log(ker + " --> " + value)
  }
  })
  ```
### 常用函数
- `Map.prototype.clear()` 移除Map对象的所有键/值对 。
- `Map.prototype.delete(key)` 如果 Map 对象中存在该元素，则移除它并返回 true；否则如果该元素不存在则返回 false
- `Map.prototype.entries()` 返回一个新的 Iterator 对象，它按插入顺序包含了Map对象中每个元素的 [key, value] 数组。
- `Map.prototype.get(key)` 返回键对应的值，如果不存在，则返回`undefined`。
- `Map.prototype.has(key)` 返回一个布尔值，表示Map实例是否包含键对应的值。
- `Map.prototype.keys()` 返回一个新的 Iterator对象， 它按插入顺序包含了Map对象中每个元素的键 。
- `Map.prototype.set(key, value)` 设置Map对象中键的值。返回该Map对象。
- `Map.prototype.values()` 返回一个新的Iterator对象，它按插入顺序包含了Map对象中每个元素的值 

## Set
与`Map`类似，但`Set`只能存储唯一值
### 创建和使用`Set`
我们可以通过`let mySet = new Set()`来创建一个`Set`对象，
通过`mySet.add(value)`向其中添加新值
通过`mySet.delete(value)`删除某个值
通过`mySet.has(value)`判断是否含有某个值
### 迭代
与`Map`相同，其同样可以使用`for..of`或`forEach()`来实现迭代，此地直接同时写出。
```
// for..of 方法迭代
for (let item of mySet) {
  console.log(item);
}

// forEach() 迭代
mySet.forEach(function(value) {
  console.log(value);
})
```
### 应用
最简单的，`Set`可以实现对数组的去重
```
const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]
console.log([...new Set(numbers)]) // [2, 3, 4, 5, 6, 7, 32]
```
### 常用方法
- `Set.prototype.add(value)` 在Set对象尾部添加一个元素。返回该Set对象。
- `Set.prototype.clear()` 移除Set对象内的所有元素。
- `Set.prototype.delete(value)` 移除Set的中与这个值相等的元素
- `Set.prototype.has(value)` 返回一个布尔值，表示该值在Set中存在与否。
- `Set.prototype.values()` 返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值。