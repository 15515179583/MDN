# Mozilla醒目页面

本项目主要练习结构的语义化，项目参考于：[MDN Web Docs](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page)<br>
点击[此处](https://15515179583.github.io/MDN/test3/index.html)查看效果

## 任务介绍

- 准备图片
    准备所需的不同尺寸图片
- 为 header 添加一个图标
    在 header 元素中添加一个 img 元素，嵌入一个小尺寸版本的火狐图标。
- 为主 article 添加一个视频
    在 article 元素中，嵌入一个YouTube视频（视频的宽度应该是 400px。）
- 为 further info 的链接添加响应式图片
    在further-info类的 div 里你会看到四个 a 元素，每个都指向一个有趣的、关于 Mozilla 的页面。为了完成这一部分，你需要在每个a 元素里插入一个 img 元素，需要包含合适的 src，alt，srcset 和 sizes 属性。
    在浏览器的视口的宽度小于等于480px时使用的120px宽的图片，其他情况下选择400px 的版本.
- 一个艺术方向性的红色熊猫
    在 red-panda 类的 div 中，我们希望插入一个 picture 元素，在视口宽度小于等于600px时使用那张比较小的纵向的熊猫图片，在其他情况下则使用大的横向的图片。

## 知识点

- 主要标签
  - img 我们可以用 img 元素来把图片放到网页上。它是一个空元素
    - src 包含了指向我们想要引入的图片的路径，可以是相对路径或绝对URL
    - alt 对图片的文字描述，用于在图片无法显示或不能被看到的情况
    - title 图片标题
  - video 嵌入一段视频
    - src
    - controls 提供的控制接口
    - autoplay 使音频和视频内容立即播放
    - loop 让音频或者视频文件循环播放
    - muted 媒体播放时，默认关闭声音
    - poster 未播放使的展示图
    - preload 用来缓冲较大的文件
  - audio 嵌入一段音频 (属性与视频类似)
    - 显示音轨文本 (webvtt 使用 track 标签)
      - subtitle 通过添加翻译字幕
      - captions 同步翻译对白
      - timed descriptions 将文字转换为音频
      例如：(track kind="subtitles" src="subtitles_en.vtt" srclang="en")
  - iframe 用于嵌入其他网页
    - allowfullscreen 可以通过全屏API设置为全屏模式
    - frameborder 边框
    - src 
    - sandbox
- 矢量图形（SVG）<br>
  矢量图形在很多情况下非常有用 — 它们拥有较小的文件尺寸，却高度可缩放，所以它们不会在镜头拉近或者放大图像时像素化。<br>
  详情点击[此处](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
- 响应式图片
  - 不同尺寸
    - srcset 定义了我们允许浏览器选择的图像集，以及每个图像的大小
    - sizes 定义了一组媒体条件
  - 相同的尺寸, 不同的分辨率
    - 通过srcset和x语法结合——一种更简单的语法——而不用sizes，来选择适当分辨率的图片
  - picture 使浏览器在不同资源间做出选择，紧跟着的是最重要的 img 元素
    - source 包含一个media属性，这一属性包含一个媒体条件.srcset决定哪张图片会显示
    - 在任何情况下，你都必须在 picture 闭合之前正确提供一个 img 元素以及它的src和alt属性，否则不会有图片显示。