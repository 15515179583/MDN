# string

## 介绍

java script 中字符串可分为字符串对象和基本字符串两种。<br>
通过单引号或双引号定义 和 直接调用`String`方法的字符串都是基本字符串。<br>
>JavaScript会自动将基本字符串转换为字符串对象，只有将基本字符串转化为字符串对象之后才可以使用字符串对象的方法。
## 转义字符

|字符 | 输出|
| :---: | :---: |
| `\0` | 空字符 |
| `\'` | 单引号 |
| `\"` | 双引号 |
| `\\` | 反斜杠 |
| `\n` | 换行 |
| `\r` | 回车 |
| `\v` | 垂直制表符 |
| `\t` | 水平制表符 |
| `\b` | 退格 |
| `\f` | 换页 |
## 从字符串获取单个字符

在实际操作中，我们经常会遇到从给定字符串获取某个位置字符的需求，那么我们应该如何实现呢？<br>
获取字符的方式有两种：
- 第一种，我们可以把字符串当成一个数组，采用下标的方式进行获取.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如：`string[5]`，`string[0]`
- 第二种，我们可以使用字符串`charAt`方法<br>
  *举个栗子*：我们要获取字符串中的第5个字符我们可以用`string.charAt(4)`表示<br>
  *注意*：无论是第一种还是第二种，下标都是从**0**开始的
## 字符串的比较

可以使用**比较运算符**进行字符串的比较<br>

>比较规则：比较的时候，从字符串左边开始，依次比较每个字符，直到出现差异、或者其中一个串结束为止。

>长度不能直接决定大小，字符串的大小是由左边开始最前面的字符决定的。
## 属性

- `String.prototype`
- `String.length` 获取字符串长度
## 常用方法

- `String.prototype.charAt()` 返回特定位置的字符。
- `String.prototype.concat()` 连接两个字符串文本，并返回一个新的字符串。
- `String.prototype.includes()` 判断一个字符串里是否包含其他字符串。
- `String.prototype.endsWith()` 判断一个字符串的是否以给定字符串结尾，结果返回布尔值。
- `String.prototype.indexOf()` 从字符串对象中返回首个被发现的给定值的索引值，如果没有找到则返回-1。
- `String.prototype.lastIndexOf()` 从字符串对象中返回最后一个被发现的给定值的索引值，如果没有找到则返回-1。
- `String.prototype.padEnd()` 在当前字符串尾部填充指定的字符串， 直到达到指定的长度。 返回一个新的字符串。
- `String.prototype.padStart()` 在当前字符串头部填充指定的字符串， 直到达到指定的长度。 返回一个新的字符串。
- `String.prototype.repeat()` 返回指定重复次数的由元素组成的字符串对象。
- `String.prototype.replace()` 被用来在正则表达式和字符串直接比较，然后用新的子串来替换被匹配的子串。
- `String.prototype.search()` 对正则表达式和指定字符串进行匹配搜索，返回第一个出现的匹配项的下标。
- `String.prototype.slice()` 摘取一个字符串区域，返回一个新的字符串。
- `String.prototype.split()` 通过分离字符串成字串，将字符串对象分割成字符串数组。
- `String.prototype.substr()` 通过指定字符数返回在指定位置开始的字符串中的字符。
- `String.prototype.toLocaleLowerCase()` 根据当前区域设置，将符串中的字符转换成小写。
- `String.prototype.toLocaleUpperCase()` 根据当前区域设置，将字符串中的字符转换成大写
- `String.prototype.toLowerCase()` 将字符串转换成小写并返回。
- `String.prototype.toString()` 返回用字符串表示的特定对象。
- `String.prototype.toUpperCase()` 将字符串转换成大写并返回。
- `String.prototype.trim()` 从字符串的开始和结尾去除空格
- `String.prototype.valueOf()` 返回特定对象的原始值
- `String.prototype[@@iterator]()` 返回一个新的迭代器对象，该对象遍历字符串值的索引位置，将每个索引值作为字符串值返回。