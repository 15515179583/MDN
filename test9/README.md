# CSS 布局

项目参考至 MDN<br>
[效果展示](https://15515179583.github.io/MDN/test9/index.html)

## 任务介绍

练习各种布局

## 知识点
- 布局
  - 浮动(float)
    - left 将元素浮动到左侧。
    - right 将元素浮动到右侧
    - none(默认) 不浮动
    - inherit 继承父元素的浮动属性
  - 定位(position)
    - static(默认) 静态定位: 将元素放在文档布局流的默认位置
    - relative 相对定位: 允许我们相对元素在正常的文档流中的位置移动它
    - absolute 绝对定位: 将元素完全从页面的正常布局流中移出
    - fixed 固定定位: 与绝对定位非常类似，除了它是将一个元素相对浏览器视口固定，而不是相对另外一个元素
    - sticky 粘性定位: 粘性定位可以被认为是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位
  - 表格
  - 弹性盒子
    - flex-direction 它可以指定主轴的方向
      - row 横向
      - row-reverse 横向，排列方向相反
      - column 纵向
      - column-reverse 纵向，排列方向相反
    - flex-wrap 换行
      - nowrap flex的元素被摆放到到一行，这可能导致溢出 flex 容器
      - wrap flex元素被打断到多个行中
      - wrap-reverse 和 wrap 的行为一样，但方向相反
    - flex
      1. flex-grow 无单位比例
      2. flex-basis 最小值
    - align-items 控制 flex 项在交叉轴上的位置
      - stretch(默认) 使所有 flex 项沿着交叉轴的方向拉伸以填充父容器
      - center 保持其原有的高度，但是会在交叉轴居中
    - justify-content 控制 flex 项在主轴上的位置
      - flex-start(默认) 使所有 flex 项都位于主轴的开始处
      - center 使 flex 项在主轴居中
      - space-around 它会使所有 flex 项沿着主轴均匀地分布，在任意一端都会留有一点空间
      - space-between 和 space-around 非常相似，只是它不会在两端留下任何空间
  - 网格
    - grid-gap 设置网格的间隔
    - grid-template-columns 基于 网格列 的维度，去定义网格线的名称和网格轨道的尺寸大小。

