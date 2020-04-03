## 题目：假设高度已知，请写出三栏布局，其中左栏、右栏宽度各位300px，中间自适应
## 五种经典答案

> 这里说的五种答案（浮动布局、绝对布局、flexbox、表格布局、网格布局），并不是说只有五种答案，比如我们也可以使用 calc计算函数来解决 ，且随着技术发展也可能还有其他的答案。只是目前这五种比较具有代表性。

###  1.浮动布局 

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>三栏布局</title>
    <style>
        html * {
            padding: 0;
            margin: 0;
        }

        .layout {
            margin-top: 20px;
        }

        .layout article div {
            height: 100px;
        }
        .layout .left,.layout .right{
            width:300px;
        }
        .layout .left{
            background:red;
        }
        .layout .center{
            background: green;
        }
        .layout .right{
            background: yellow;
        }
    </style>
</head>

<body>

    <!-- 浮动布局解决方案 开始-->
    <section class="layout float">
        <style>
            .layout.float .left{
                float:left;
            }
            .layout.float .right{
                float:right;
            }
        </style>
        <article class="left-center-right">
            <div class="left">左边部分</div>
            <div class="right">右边部分</div>
            <div class="center">中间部分</div>
        </article>
    </section>
    <!-- 浮动布局解决方案 结束-->
</body>

</html>
```

ps：注意：

```html
 <div class="left">左边部分</div>
 <div class="right">右边部分</div>
 <div class="center">中间部分</div>
```

class为center的布局在最后；

###  2.绝对定位布局 

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>三栏布局</title>
    <style>
        html * {
            padding: 0;
            margin: 0;
        }

        .layout {
            margin-top: 20px;
        }

        .layout article div {
            height: 100px;
        }
        .layout .left,.layout .right{
            width:300px;
        }
        .layout .left{
            background:red;
        }
        .layout .center{
            background: green;
        }
        .layout .right{
            background: yellow;
        }
    </style>
</head>

<body>
<!-- 绝对定位解决方案 开始-->
    <section class="layout absolute">
        <style>
            .layout.absolute .left-center-right>div {
                position: absolute;
            }

            .layout.absolute .left {
                left: 0;
            }

            .layout.absolute .center {
                left: 300px;
                right:300px;
            }

            .layout.absolute .right {
                right: 0;
            }
        </style>
        <article class="left-center-right">
            <div class="left">左边部分</div>
            <div class="center">中间部分</div>
            <div class="right">右边部分</div>
        </article>
    </section>
    <!-- 绝对定位局部解决方案 结束-->
  </body>

</html>
```

###  3.flexbox  

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>三栏布局</title>
    <style>
        html * {
            padding: 0;
            margin: 0;
        }

        .layout {
            margin-top: 20px;
        }

        .layout article div {
            height: 100px;
        }
        .layout .left,.layout .right{
            width:300px;
        }
        .layout .left{
            background:red;
        }
        .layout .center{
            background: green;
        }
        .layout .right{
            background: yellow;
        }
    </style>
</head>

<body>
    <!-- flexbox解决方案 开始-->
    <section class="layout flexbox">
        <style>
            .layout.flexbox .left-center-right {
                display: flex;
            }

            .layout.flexbox .center {
                flex: 1
            }
        </style>
        <article class="left-center-right">
            <div class="left">左边部分</div>
            <div class="center">中间部分</div>
            <div class="right">右边部分</div>
        </article>
    </section>
    <!-- flexbox解决方案 结束-->
  </body>

</html>
```



###  4.表格布局  

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>三栏布局</title>
    <style>
        html * {
            padding: 0;
            margin: 0;
        }

        .layout {
            margin-top: 20px;
        }

        .layout article div {
            height: 100px;
        }
        .layout .left,.layout .right{
            width:300px;
        }
        .layout .left{
            background:red;
        }
        .layout .center{
            background: green;
        }
        .layout .right{
            background: yellow;
        }
    </style>
</head>

<body>
    <!-- 表格布局解决方案 开始-->
    <section class="layout table">
        <style>
            .layout.table .left-center-right {
                display: table;
                width:100%
            }

            .layout.table .left-center-right>div {
                display: table-cell;
            }
        </style>
        <article class="left-center-right">
            <div class="left">左边部分</div>
            <div class="center">中间部分</div>
            <div class="right">右边部分</div>
        </article>
    </section>
    <!-- 表格布局解决方案 结束-->
  </body>

</html>
```



###  5.网格布局 

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>三栏布局</title>
    <style>
        html * {
            padding: 0;
            margin: 0;
        }

        .layout {
            margin-top: 20px;
        }

        .layout article div {
            height: 100px;
        }
        .layout .left,.layout .right{
            width:300px;
        }
        .layout .left{
            background:red;
        }
        .layout .center{
            background: green;
        }
        .layout .right{
            background: yellow;
        }
    </style>
</head>

<body>
    <!-- 网格布局解决方案 开始-->
    <section class="layout grid">
        <style>
            .layout.grid .left-center-right {
                display: grid;
                width: 100%;
                grid-template-columns: 300px auto 300px;
            }
        </style>
        <article class="left-center-right">
            <div class="left">左边部分</div>
            <div class="center">中间部分</div>
            <div class="right">右边部分</div>
        </article>
    </section>
    <!-- 网格布局解决方案 结束-->
  </body>

</html>
```



## 延伸

###  五种布局各自的优缺点 

|              | 优点                                                         | 缺点                                                         |
| :----------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 浮动布局     | 比较简单，兼容性好                                           | 浮动元素脱离文档流，要做清除浮动，这个处理不好的话，会带来很多问题，比如父容器高度塌陷等 |
| 绝对定位布局 | 快捷，设置很方便，而且也不容易出问题                         | 容器脱离了文档流，后代元素也脱离了文档流，高度未知的时候，会有问题，这就导致了这种方法的有效性和可使用性是比较差的。 |
| flexbox      | css3里新出的一个，它就是为了解决上述两种方式的不足出现的，是比较完美的一个。目前移动端的布局也都是用flexbox. | IE10开始支持，但是IE10的是`-ms`形式的                        |
| 表格布局     | 兼容性很好，在flex布局不兼容的时候，可以尝试表格布局。当内容溢出时会自动撑开父元素。 | 无法设置栏边距；对seo不友好；当其中一个单元格高度超出的时候，两侧的单元格也是会跟着一起变高的，然而有时候这并不是我们想要的效果。 |
| 网格布局     | CSS新标准，创建网格布局最强大和最简单的工具，可以将页面分成具有简单属性的行和列 | 兼容性不好。IE10+上支持，而且也仅支持部分属性                |

### 如果把高度已知这一条件去掉，五种布局会有什么变化？

  1、浮动布局

![浮动没有高度](E:\文章\interview\css\三栏布局\浮动没有高度.png)

  2、绝对定位布局

![决定定位没有高度](E:\文章\interview\css\三栏布局\决定定位没有高度.png)

  3、flexbox

![flexbox没有高度](E:\文章\interview\css\三栏布局\flexbox没有高度.png)

  4、表格布局

![table没有高度](E:\文章\interview\css\三栏布局\table没有高度.png)

  5、网格布局

![网格没有高度](E:\文章\interview\css\三栏布局\网格没有高度.png)

 从上边五种布局的页面效果可以看出，浮动和绝对定位布局需要考虑高度的设定。表格、flexbox、网格没有设置高度时，根据内容高度呈现，且三栏高度统一 。

### 五种方案，你如果选择实际项目中应用会优先选择哪种？

>  没有一种一劳永逸的方法解决三列布局的问题，我们通过上边的五种答案的优缺点就可以看出。通过分析五种布局各自的优缺点，了解这些优缺点及适用场景，从而在不同的应用场景中选择相应的布局方式。 

比如你的项目时h5的，也需要适用移动端那明显flexbox就比较适用。

flex布局是比较适合一维布局， Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是**二维布局**。Grid 布局远比 Flex 布局强大。 但是需要考虑到grid的兼容性。

### **CSS3的calc函数** 

在前面小编有说过使用css3的calc函数也可以解决这三栏布局的问题，具体如下：

```html
    <!-- calc解决方案 开始-->
    <section class="layout calc">
        <style>
            .layout.calc .left-center-right {
                width: 100%;
            }
            .layout.calc .left-center-right>div{
               float:left;
            }
            .layout.calc .center {
                width: calc(100% - 600px);
            }
        </style>
        <article class="left-center-right">
            <div class="left">左边部分</div>
            <div class="center">中间部分</div>
            <div class="right">右边部分</div>
        </article>
    </section>
    <!-- calc解决方案 结束-->
```

使用用法：calc(表达式)

> calc() 的使用注意点：
> 运算符前后都需要保留一个空格，例如：width: calc(100% - 400px)；
> 任何长度值都可以使用calc()函数进行计算；
> calc()函数支持 "+", "-", "*", "/" 运算；
> calc()函数使用标准的数学运算优先级规则；

兼容性：

![calc兼容性](E:\文章\interview\css\三栏布局\calc兼容性.png)

## 总结：

### 面试问题考察了哪些问题

1）是否使用html5语义化：section、artcle等熟练使用；
2）页面布局理解深刻；
3）css基础知识；
4）代码书写规范、（类名的命名）
5）是否了解新知识

## 其他相关名词解释

### 圣杯布局和双飞翼布局是什么？

>  圣杯布局和双飞翼布局解决的问题是相同的，就是两边顶宽，中间自适应的三栏布局，中间栏要在放在文档流前面以优先渲染。 

圣杯布局：

 https://alistapart.com/article/holygrail/ 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>圣杯模型</title>
    <style>
        html * {
            padding: 0;
            margin: 0;
        }
        #bd{
            padding:0 200px;
        }
        #bd>div{
            float:left;
            height:100px;
            position: relative;
        }
        #center{
            background: green;
            width:100%;
        }
        #left{
            background:red;
            width: 200px;
            margin-left:-100%;
            right:200px;
        }
        #right{
            background:yellow;
            width: 200px;
            margin-right:-200px;
        }
    </style>
</head>
<body>
    
    <section>
        <article id="bd">
            <div id="center">中间部分</div>
            <div id="left">左侧部分</div>
            <div id="right">右侧部分</div>
        </article>
    </section>
    
</body>
</html>
```

双飞翼布局：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>双飞翼布局</title>
    <style>
        html * {
            padding: 0;
            margin: 0;
        }
        #bd>div {
            float: left;
            height: 100px;
        }

        #center {            
            width: 100%;
        }
        /*给inside的div添加margin，把内容放到中间栏，其实整个背景还是100%*/
        #inside{
            background: green;
            margin:0 200px;
            height: 100px;
        }
        #left {
            background: red;
            width: 200px;
            margin-left: -100%;
        }

        #right {
            background: yellow;
            width: 200px;
            margin-left: -200px;
        }
        
    </style>
</head>

<body>

    <section>
        <article id="bd">
            <div id="center">
                <div id="inside">中间部分</div>
            </div>
            <div id="left">左侧部分</div>
            <div id="right">右侧部分</div>
        </article>
    </section>

</body>

</html>
```

圣杯布局、双飞翼布局相同和不同点：

|            | 相同点                                                       | 不同点                                                       |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 圣杯布局   | 1、解决的问题是一样的，就是两边顶宽，中间自适应的三栏布局，中间栏要在放在文档流前面以优先渲染；2、三栏全部float浮动，左右两栏加上负margin让其跟中间栏div并排，以形成三栏布局 | 为了中间div内容不被遮挡，将三栏布局的父级设置了左右padding-left和padding-right后，将左右两个div用相对布局position: relative并分别配合right和left属性，以便左右两栏div移动后不遮挡中间div |
| 双飞翼布局 | 同上                                                         | 为了中间div内容不被遮挡，直接在中间div内部创建子div用于放置内容，在该子div里用margin-left和margin-right为左右两栏div留出位置。 |

圣杯布局、双飞翼布局优缺点：

|            | 优点                             | 缺点                                                         |
| ---------- | -------------------------------- | ------------------------------------------------------------ |
| 圣杯布局   | 结构简单，不需要添加多余dom节点  | 如果将浏览器无线放大时，「圣杯」将会「破碎」掉。如：当中间部分的宽小于左侧部分时就会发生布局混乱。 |
| 双飞翼布局 | 不会像圣杯布局那样变形、通用性强 | 多加了一层dom节点                                            |

*圣杯布局与双飞翼布局的优点：利用布局，可优先渲染主要部分*



flex： http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html 

grid： http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html 