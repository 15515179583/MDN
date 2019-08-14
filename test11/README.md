# java script 事件流
[效果展示](https://15515179583.github.io/MDN/test11/index.html)
## 事件
HTML中与javascript交互是通过事件驱动来实现的，例如鼠标点击事件、页面的滚动事件onscroll等等

## 事件流
"DOM2事件流"规定的事件流包括三个阶段：
- 事件捕获阶段
- 处于目标阶段
- 事件冒泡阶段

## 事件绑定
可采用 addEventListener(事件名,事件处理函数,处理方式)
- 事件名：String
- 事件处理函数：function
- 事件处理方式：bool 
    - false 事件冒泡
    - true 事件捕获
