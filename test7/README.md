# 排版社区大学首页

项目参考至[MDN](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/%E4%B8%BA%E6%96%87%E6%9C%AC%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F/Typesetting_a_homepage)<br>
[效果展示](https://15515179583.github.io/MDN/test7/index.html)

## 任务介绍
123<table><tr><td bgcolor=orange> 背景色是orange</td></tr></table>456
练习：设置字体、粗细、斜体、行还有字符间距、阴影以及文本的其他特征。
- 字体
  - 首先，下载一些免费的字体。因为这是一所大学，字体应该严肃，正式，给人信任的感觉 —— 主体使用serif字体，对标题结合使用sans-serif 或者 slab serif会是不错的选择。
  - 使用合适的服务对着两种字体生成无死角的@font-face代码。
  - 将你的body字体应用到body，heading字体应用到heading。
- 文本样式化
  - 设置全站网页 font-size 为 10px。
  - 使用相对单位（relative unit）为标题和其他元素的font-sizes设置合适的值。
  - 为body文本设置合适的line-height。
  - 居中页面顶级标题。
  - 为标题设置 letter-spacing 避免字间太过拥挤。
  - 为body文本设置合适的 letter-spacing 和 word-spacing。
  - 在 section 元素中，每个标题后的第一段文字设置20px的文本缩进。
- 链接
  - 设置 link, visited, focus, 和 hover 状态设置颜色，与页面顶部和底部的水平线颜色相匹配。
  - 设置链接默认带下划线，但hover和focus时下划线消失。
  - 取消页面中所有链接focus时默认的外边线。
  - 设置active时有显著不同的样式，使其又突出又与整体页面设计和谐。
  - 在外部链接右侧插入外部链接图标。
- 列表
  - 确保列表和列表项与页面整体样式和谐。每个列表项应该有同样的与段落行相同的line-height 。每个列表上下间距应该与段落间距相同。
  - 使用与页面设计匹配的bullet列表项符号。你可以选择自定义的bullet图像或者其他的喜欢的bullet符号。
- 导航栏菜单
  - 样式化你的导航栏菜单，使它拥有与页面整体相匹配的外观。
## 知识点
- 字体
  - color 设置字体颜色 
  - font-family 设置字体的种类
  - font-size 设置字体大小
  - font-style 设置字体样式
    - normal 普通字体
    - italic 斜体
    - oblique 斜体字体的模拟版本
  - font-weight 设置粗体大小
    - normal 普通字体
    - bold 加粗字体
    - lighter, bolder: 将当前元素的粗体设置为比其父元素粗体更细或更粗一步
  - 简写
    - 顺序：font-style, font-variant, font-weight, font-stretch, font-size, line-height, font-family.
    - 说明：font-size 和 line-height 属性之间必须放一个正斜杠
    - 样例 <span style="background-color:#ccc">font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;</span>
- 文本
  - text-decoration 设置在文本中的线
    - none 取消已经存在的任何文本装饰
    - underline 文本下划线
    - overline 文本上划线
    - line-through 穿过文本的线
  - text-transform 设置要转换的字体
    - none  防止任何转型
    - uppercase 将所有文本转为大写
    - lowercase 将所有文本转为小写。
    - capitalize 转换所有单词让其首字母大写
    - full-width 将所有字形转换成全角
  - text-shadow 文字阴影
    1. 阴影与原始文本的水平偏移
    2. 阴影与原始文本的垂直偏移;
    3. 模糊半径 - 更高的值意味着阴影分散得更广泛
    4. 阴影的基础颜色
  - text-align 文本对齐
    - left 左对齐
    - right 右对齐
    - center 居中对齐
    - justify 使文本展开，改变单词之间的差距，使所有文本行的宽度相同
  - line-heiht 设置文本每行之间的高
  - letter-spacing 设置你的文本中的字母与字母之间的间距
  - word-spacing 设置文本中单词与单词的间距
  - text-overflow 定义如何向用户表示存在被隐藏的溢出内容
    - clip(默认) 在内容区域的极限处截断文本
    - ellipsis 用一个省略号来表示被截断的文本
  - text-space 定义如何处理元素内部的空白和换行。
    - normal 连续的空白符会被合并，换行符会被当作空白符来处理。
    - nowrap 连续的空白符会被合并。但文本内的换行无效
    - pre 连续的空白符会被保留。在遇到换行符或者 br 元素时才会换行
    - pre-wrap 连续的空白符会被保留。在遇到换行符或者 br 元素，或者需要为了填充line盒子时才会换行。
    - pre-line 连续的空白符会被合并。在遇到换行符或者 br 元素，或者需要为了填充line盒子时会换行。
- 列表
  - list-style-type 设置用于列表的项目符号的类型
    - disc 实心圆点 (默认值)
    - circle 空心圆点
    - square 实心方块
    - decimal 十进制阿拉伯数字
  - list-style-position 设置在每个项目开始之前，项目符号是出现在列表项内，还是出现在其外。
    - outside(默认) 标记盒在主块盒的外面。
    - inside 标记盒在主块盒的里面。
  - list-style-image 自定义项目符号
    - background-image 图片文件的参考路径
    - background-position 定义所选元素背景中的图像将出现在哪里 
    - background-size 设置背景图片的大小。<span style="color:#ccc">我们使用的尺寸为1.6rem（16px），它非常吻合我们为项目符号设置的 20px  的填充， 16px 加上 4px 的空格间距，可以使项目符号和列表项文本效果更好。</span>
    - background-repeat 设置图片填充
- 链接
  - link 没有访问过的
  - visited 链接已经被访问过
  - hover 用户的鼠标光标刚好停留在这个链接
  - focus 当它被选中的时候
  - active 当它被激活的时候
