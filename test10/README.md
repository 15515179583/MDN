# CSS 布局

项目参考至 MDN<br>
[效果展示](https://15515179583.github.io/MDN/test10/index.html)

## 任务介绍

练习js

## 知识点
- javascript
JavaScript 是轻量级解释型语言
  - 定义：是一种脚本语言，可以用来创建动态更新的内容，控制多媒体，制作图像动画...
  - api 通常分为两类
    - 浏览器 API 内建于 web 浏览器中
      - 文档对象模型 API（DOM（Document Object Model）API）
      - 地理位置 API（Geolocation API）
      - 画布(Canvas)
      - 影音类 API 
    - 第三方 API
  - 浏览器安全
  - 脚本调用策略
    - 内部：<br>
    ```HTML 文档体加载、解释完毕事件。事件触发时将调用 " . . ." 处的代码
    document.addEventListener("DOMContentLoaded", function() {
      . . .
    });
    ```
    - 外部：<br>
    使用async “异步”属性
    `<script src="script.js" async></script>`
    - 策略：
      - 如果脚本无需等待页面解析，且无依赖独立运行，那么应使用 async。
      - 如果脚本需要等待解析，且依赖于其它脚本，调用这些脚本时应使用 defer,将关联的脚本按所需顺序置于 HTML 中。


