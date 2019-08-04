# form表单

## 任务介绍

复习表单的使用

## 知识点

- form 创建表单<br>
当您想要创建一个HTML表单时，都必须从这个元素开始，然后把所有内容都放在里面。
  - 主要属性
    - action 定义了在提交表单时,应该把所收集的数据送给谁
    - method 定义了发送数据的HTTP方法(它可以是“get”或“post”).
  - 子元素
    - fieldset<br>
    一种方便的用于创建具有相同目的的小部件组的方式
    - legend<br>
    正式地描述了 fieldset 里所含有部件的用途。
    - label 元素上使用for属性；它是将标签链接到表单小部件的一种正规方式。这个属性引用对应的小部件的id
    - input
      - type 最重要的属性,定义了 input 的行为方式
        - text 基本的单行文本框
        - email 输入有效的电子邮件地址
        - password 会模糊输入到字段中的值
        - search 通常，搜索框是渲染成圆角的，并且/可能给定一个“x”来清除输入的值。
        - tel 更适合输入电话号码。
        - url 如果输入无效的url，浏览器就会报告错误。
        - checkbox 创建复选框
        - radio 创建单选框
        - number 只允许浮点数<br>
          通过设置min和max属性来约束该值。<br>
          通过设置step属性来指定增加和减少按钮更改小部件的步进值大小。
        - range 使用滑块选择数字,它们被用来选择一个确切值并不重要的数字。
        - datetime-local 本地时间
        - month 显示和挑选一个月。
        - time 显示并选择一个时间值
        - week 显示并挑选一个星期号和它的年份
        - color 允许用户在文本和可视的方式中选择颜色。
        - file 文件选择器
        - hidden 隐藏内容
      - name 作为HTTP请求中包含的3个键
      - required 输入是必需的
      - pattern 使用正则表达式校验
      - minlength,maxlength 限制输入的长度<br>
        点击[此处](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Forms/Data_form_validation)查看更多验证
      
    - section<br>
      下拉菜单
      - option 为其子标签
    - textarea 多行文本框
      - cols 文本控件的可见宽度，平均字符宽度。
      - rows 控制的可见文本行数。
      - wrap 表示控件是如何包装文本的
    - button 
      - type:submit(提交数据),reset(重新设置为它们的默认值),button(普通按钮)