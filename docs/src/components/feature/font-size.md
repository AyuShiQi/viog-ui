# 字体
组件并未规定字体风格，一般情况下展示为项目的默认字体，如有需要可以自行引用字体

## 字体大小
组件库规定了一系列的字体大小样式
<div class="h1">h1 36px</div>
<div class="h2">h2 32px</div>
<div class="h3">h3 28px</div>
<div class="h4">h4 24px</div>
<div class="h5">h5 22px</div>
<div class="h6">h6 20px</div>
<div class="p">p 14px</div>

## 字体变量
组件库提供三种大小的一般字体，分别为：（--vi-big-font-size、--vi-font-size、--vi-small-font-size）
<div class="vi-bf">Viog UI</div>
<div class="vi-f">Viog UI</div>
<div class="vi-sf">Viog UI</div>

这三种字体对应组件中size属性控制的三种字体样式，你也可以直接使用这些字体变量

<style>
.h1 {
    font-size: 36px;
}
.h2 {
    font-size: 32px;
}
.h3 {
    font-size: 28px;
}
.h4 {
    font-size: 24px;
}
.h5 {
    font-size: 22px;
}
.h6 {
    font-size: 20px;
}
.p {
    font-size: 14px;
}
.vi-bf {
    font-size: var(--vi-big-font-size);
}
.vi-f {
    font-size: var(--vi-font-size);
}
.vi-sf {
    font-size: var(--vi-small-font-size);
}

</style>