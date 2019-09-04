# 构建行星数据

本项目表格的使用，项目参考于：[MDN Web Docs](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Tables/Structuring_planet_data)<br>
点击[此处](https://15515179583.github.io/MDN/test4/index.html)查看效果

## 任务介绍

- 为你的表格添加我们提供的标题。
- 在表格的 header 中添加一行，用来包括所有列的标题。
- 在表格的 body 部分创建所有内容行，记住要让所有是行标题的单元格语义化。
- 确保所有内容都插入了正确的单元格，在原始数据中，每行行星数据都显示在其相关行星的旁边。
- 添加一些属性，让行标题和列标题更加明确地与和它们有关的单元格进行关联
- 为包含所有行星标题的行标题的那一列数据，添加一个黑色边框

## 知识点

- table 创建表格
  - caption 为你的表格增加一个标题
  - thead 放置在头部的位置，因为它通常代表第一行
  - tbody 存放表数据
  - tfoot 一般放在最后一行，往往是对前面所有行的总结
  - tr 表格行
    - th 数据标题
    - scope 可添加在th标签，用来指明是行标题还是列标题
    - td 表格数据
    - colspan,rowspan 属性接受一个没有单位的数字值，数字决定了它们的宽度或高度是几个单元格
  - 为表格中的列提供共同的样式
    - colgroup 一个colgroup标签含有多个col标签
    - col 用于定义列的样式
    - span 需要一个无单位的数字值，用来制定你想要让这个样式应用到表格中多少列
- css
  - border-collapse 边框合并
    - separate（默认） 边框会被分开
    - collapse 如果可能，边框会合并为一个单一的边框。
    - inherit 规定应该从父元素继承 border-collapse 属性的值。
