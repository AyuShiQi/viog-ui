import{_ as y,f as V,r as p,o as w,c as q,a as s,b as n,e as a,w as t}from"./app-25e0b478.js";const z={id:"步骤条-steps",tabindex:"-1"},B=s("a",{class:"header-anchor",href:"#步骤条-steps","aria-hidden":"true"},"#",-1),C=s("p",null,"用于提示操作流程",-1),N=s("h2",{id:"使用说明",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#使用说明","aria-hidden":"true"},"#"),n(" 使用说明")],-1),j=s("p",null,"通过modelValue控制当前进度，进度序号依次为0~n",-1),U=s("h3",{id:"简单引入",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#简单引入","aria-hidden":"true"},"#"),n(" 简单引入")],-1),$=s("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[s("pre",{class:"language-vue"},[s("code",null,[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("template")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("vi-steps")]),n(),s("span",{class:"token special-attr"},[s("span",{class:"token attr-name"},"style"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),s("span",{class:"token value css language-css"},[s("span",{class:"token property"},"height"),s("span",{class:"token punctuation"},":"),n(" 80px"),s("span",{class:"token punctuation"},";")]),s("span",{class:"token punctuation"},'"')])]),n(),s("span",{class:"token attr-name"},"v-model"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("step"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),n(`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("vi-steps-item")]),s("span",{class:"token punctuation"},">")]),n(`
      `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("template")]),s("span",{class:"token punctuation"},">")]),n("起承转合"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("template")]),s("span",{class:"token punctuation"},">")]),n(`
      `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("template")]),n(),s("span",{class:"token attr-name"},[s("span",{class:"token namespace"},"v-slot:"),n("doing")]),s("span",{class:"token punctuation"},">")]),n(`
        壹
      `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("template")]),s("span",{class:"token punctuation"},">")]),n(`
      `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("template")]),n(),s("span",{class:"token attr-name"},[s("span",{class:"token namespace"},"v-slot:"),n("finish")]),s("span",{class:"token punctuation"},">")]),n(`
        完
      `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("template")]),s("span",{class:"token punctuation"},">")]),n(`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("vi-steps-item")]),s("span",{class:"token punctuation"},">")]),n(`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("vi-steps-item")]),s("span",{class:"token punctuation"},"/>")]),n(`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("vi-steps-item")]),s("span",{class:"token punctuation"},"/>")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("vi-steps")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("vi-divider")]),s("span",{class:"token punctuation"},"/>")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("vi-button")]),n(),s("span",{class:"token attr-name"},"@click"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("step = (step + 1) % 4"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),n("点击切换步骤"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("vi-button")]),s("span",{class:"token punctuation"},">")]),n(`
`),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("template")]),s("span",{class:"token punctuation"},">")]),n(`
`),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("script")]),n(),s("span",{class:"token attr-name"},"setup"),s("span",{class:"token punctuation"},">")]),s("span",{class:"token script"},[s("span",{class:"token language-javascript"},[n(`
  `),s("span",{class:"token keyword"},"const"),n(" step "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"ref"),s("span",{class:"token punctuation"},"("),s("span",{class:"token number"},"0"),s("span",{class:"token punctuation"},")"),n(`
`)])]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("script")]),s("span",{class:"token punctuation"},">")]),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),E=s("h3",{id:"尺寸",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#尺寸","aria-hidden":"true"},"#"),n(" 尺寸")],-1),P=s("p",null,[n("通过css属性"),s("code",null,"--vi-steps-item-size"),n("修改steps-item尺寸 "),s("code",null,"--vi-steps-item-line"),n("修改steps-item间连接线长度 "),s("code",null,"--vi-steps-gap"),n("修改连接线间距")],-1),T=s("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[s("pre",{class:"language-vue"},[s("code",null,[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("template")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("vi-steps")]),n(),s("span",{class:"token special-attr"},[s("span",{class:"token attr-name"},"style"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),s("span",{class:"token value css language-css"},[s("span",{class:"token property"},"height"),s("span",{class:"token punctuation"},":"),n(" 70px"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token property"},"--vi-steps-item-size"),s("span",{class:"token punctuation"},":"),n(" 40px"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token property"},"--vi-steps-item-line"),s("span",{class:"token punctuation"},":"),n(" 35px"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token property"},"--vi-steps-gap"),s("span",{class:"token punctuation"},":"),n(" 20px"),s("span",{class:"token punctuation"},";")]),s("span",{class:"token punctuation"},'"')])]),s("span",{class:"token punctuation"},">")]),n(`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("vi-steps-item")]),s("span",{class:"token punctuation"},"/>")]),n(`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("vi-steps-item")]),s("span",{class:"token punctuation"},"/>")]),n(`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("vi-steps-item")]),s("span",{class:"token punctuation"},"/>")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("vi-steps")]),s("span",{class:"token punctuation"},">")]),n(`
`),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("template")]),s("span",{class:"token punctuation"},">")]),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),A=s("h3",{id:"插槽内容",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#插槽内容","aria-hidden":"true"},"#"),n(" 插槽内容")],-1),D=s("p",null,"通过插槽更改内容",-1),F=s("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[s("pre",{class:"language-vue"},[s("code",null,[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("template")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("vi-steps")]),n(),s("span",{class:"token attr-name"},"v-model"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("step"),s("span",{class:"token punctuation"},'"')]),n(),s("span",{class:"token special-attr"},[s("span",{class:"token attr-name"},"style"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),s("span",{class:"token value css language-css"},[s("span",{class:"token property"},"height"),s("span",{class:"token punctuation"},":"),n(" 80px"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token property"},"--vi-steps-item-size"),s("span",{class:"token punctuation"},":"),n(" 40px"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token property"},"--vi-steps-item-line"),s("span",{class:"token punctuation"},":"),n(" 60px"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token property"},"--vi-steps-gap"),s("span",{class:"token punctuation"},":"),n(" 8px"),s("span",{class:"token punctuation"},";")]),s("span",{class:"token punctuation"},'"')])]),s("span",{class:"token punctuation"},">")]),n(`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("vi-steps-item")]),s("span",{class:"token punctuation"},">")]),n(`
      `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("template")]),n(),s("span",{class:"token attr-name"},[s("span",{class:"token namespace"},"v-slot:"),n("default")]),s("span",{class:"token punctuation"},">")]),n("起"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("template")]),s("span",{class:"token punctuation"},">")]),n(`
      `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("template")]),n(),s("span",{class:"token attr-name"},[s("span",{class:"token namespace"},"v-slot:"),n("doing")]),s("span",{class:"token punctuation"},">")]),n("壹"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("template")]),s("span",{class:"token punctuation"},">")]),n(`
      `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("template")]),n(),s("span",{class:"token attr-name"},[s("span",{class:"token namespace"},"v-slot:"),n("finish")]),s("span",{class:"token punctuation"},">")]),n("完"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("template")]),s("span",{class:"token punctuation"},">")]),n(`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("vi-steps-item")]),s("span",{class:"token punctuation"},">")]),n(`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("vi-steps-item")]),s("span",{class:"token punctuation"},">")]),n(`
      `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("template")]),n(),s("span",{class:"token attr-name"},[s("span",{class:"token namespace"},"v-slot:"),n("default")]),s("span",{class:"token punctuation"},">")]),n("承"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("template")]),s("span",{class:"token punctuation"},">")]),n(`
      `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("template")]),n(),s("span",{class:"token attr-name"},[s("span",{class:"token namespace"},"v-slot:"),n("doing")]),s("span",{class:"token punctuation"},">")]),n("贰"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("template")]),s("span",{class:"token punctuation"},">")]),n(`
      `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("template")]),n(),s("span",{class:"token attr-name"},[s("span",{class:"token namespace"},"v-slot:"),n("finish")]),s("span",{class:"token punctuation"},">")]),n("完"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("template")]),s("span",{class:"token punctuation"},">")]),n(`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("vi-steps-item")]),s("span",{class:"token punctuation"},">")]),n(`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("vi-steps-item")]),s("span",{class:"token punctuation"},">")]),n(`
      `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("template")]),n(),s("span",{class:"token attr-name"},[s("span",{class:"token namespace"},"v-slot:"),n("default")]),s("span",{class:"token punctuation"},">")]),n("转"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("template")]),s("span",{class:"token punctuation"},">")]),n(`
      `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("template")]),n(),s("span",{class:"token attr-name"},[s("span",{class:"token namespace"},"v-slot:"),n("doing")]),s("span",{class:"token punctuation"},">")]),n("叁"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("template")]),s("span",{class:"token punctuation"},">")]),n(`
      `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("template")]),n(),s("span",{class:"token attr-name"},[s("span",{class:"token namespace"},"v-slot:"),n("finish")]),s("span",{class:"token punctuation"},">")]),n("完"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("template")]),s("span",{class:"token punctuation"},">")]),n(`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("vi-steps-item")]),s("span",{class:"token punctuation"},">")]),n(`
      `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("vi-steps-item")]),s("span",{class:"token punctuation"},">")]),n(`
      `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("template")]),n(),s("span",{class:"token attr-name"},[s("span",{class:"token namespace"},"v-slot:"),n("default")]),s("span",{class:"token punctuation"},">")]),n("合"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("template")]),s("span",{class:"token punctuation"},">")]),n(`
      `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("template")]),n(),s("span",{class:"token attr-name"},[s("span",{class:"token namespace"},"v-slot:"),n("doing")]),s("span",{class:"token punctuation"},">")]),n("肆"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("template")]),s("span",{class:"token punctuation"},">")]),n(`
      `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("template")]),n(),s("span",{class:"token attr-name"},[s("span",{class:"token namespace"},"v-slot:"),n("finish")]),s("span",{class:"token punctuation"},">")]),n("完"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("template")]),s("span",{class:"token punctuation"},">")]),n(`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("vi-steps-item")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("vi-steps")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("vi-divider")]),s("span",{class:"token punctuation"},"/>")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("vi-button")]),n(),s("span",{class:"token attr-name"},"@click"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),n("step = (step + 1) % 4"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),n("点击切换步骤"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("vi-button")]),s("span",{class:"token punctuation"},">")]),n(`
`),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("template")]),s("span",{class:"token punctuation"},">")]),n(`
`),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("script")]),n(),s("span",{class:"token attr-name"},"setup"),s("span",{class:"token punctuation"},">")]),s("span",{class:"token script"},[s("span",{class:"token language-javascript"},[n(`
  `),s("span",{class:"token keyword"},"const"),n(" step "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"ref"),s("span",{class:"token punctuation"},"("),s("span",{class:"token number"},"0"),s("span",{class:"token punctuation"},")"),n(`
`)])]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("script")]),s("span",{class:"token punctuation"},">")]),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),G=s("h2",{id:"props",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#props","aria-hidden":"true"},"#"),n(" Props")],-1),H=s("h3",{id:"steps",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#steps","aria-hidden":"true"},"#"),n(" steps")],-1),I=s("h2",{id:"插槽",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#插槽","aria-hidden":"true"},"#"),n(" 插槽")],-1),J=s("h3",{id:"steps-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#steps-1","aria-hidden":"true"},"#"),n(" steps")],-1),K=s("h3",{id:"steps-item",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#steps-item","aria-hidden":"true"},"#"),n(" steps-item")],-1),L=s("h2",{id:"事件支持",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#事件支持","aria-hidden":"true"},"#"),n(" 事件支持")],-1),M=s("p",null,"无",-1),O=s("h2",{id:"可覆写css变量",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#可覆写css变量","aria-hidden":"true"},"#"),n(" 可覆写css变量")],-1),Q={__name:"index.html",setup(R){const v=[["modelValue","当前进度","number","0"]],h=[["默认插槽","steps-item","-"]],_=[["默认插槽","进度条表述","步骤i"],["doing","正在进行时显示内容","i"],["finish","已完成显示内容","一个勾勾"]],b=[["--vi-steps-item-line","steps-item间连接线长度","200px"],["--vi-steps-item-size","steps-item尺寸","50px"],["--vi-steps-gap","连接线间距","8px"]],c=V(0);return(S,o)=>{const d=p("Badge"),e=p("vi-steps-item"),i=p("vi-steps"),r=p("vi-divider"),m=p("vi-button"),u=p("row"),k=p("code-show"),f=p("my-table"),g=p("my-table-s"),x=p("my-table-c");return w(),q("div",null,[s("h1",z,[B,n(" 步骤条 steps "),a(d,{text:"new",vertical:"middle"}),n(),a(d,{type:"warning",text:"待优化",vertical:"middle"})]),C,N,j,U,a(k,null,{code:t(()=>[$]),default:t(()=>[a(u,null,{default:t(()=>[a(i,{style:{height:"80px"},modelValue:c.value,"onUpdate:modelValue":o[0]||(o[0]=l=>c.value=l)},{default:t(()=>[a(e),a(e),a(e)]),_:1},8,["modelValue"]),a(r),a(m,{onClick:o[1]||(o[1]=l=>c.value=(c.value+1)%4)},{default:t(()=>[n("点击切换步骤")]),_:1})]),_:1})]),_:1}),E,P,a(k,null,{code:t(()=>[T]),default:t(()=>[a(u,null,{default:t(()=>[a(i,{style:{height:"70px","--vi-steps-item-size":"40px","--vi-steps-item-line":"35px","--vi-steps-gap":"20px"}},{default:t(()=>[a(e),a(e),a(e)]),_:1})]),_:1})]),_:1}),A,D,a(k,null,{code:t(()=>[F]),default:t(()=>[a(u,null,{default:t(()=>[a(i,{modelValue:c.value,"onUpdate:modelValue":o[2]||(o[2]=l=>c.value=l),style:{height:"80px","--vi-steps-item-size":"40px","--vi-steps-item-line":"60px","--vi-steps-gap":"8px"}},{default:t(()=>[a(e,null,{default:t(()=>[n("起")]),doing:t(()=>[n(" 壹 ")]),finish:t(()=>[n(" 完 ")]),_:1}),a(e,null,{default:t(()=>[n("承")]),doing:t(()=>[n(" 贰 ")]),finish:t(()=>[n(" 完 ")]),_:1}),a(e,null,{default:t(()=>[n("转")]),doing:t(()=>[n(" 叁 ")]),finish:t(()=>[n(" 完 ")]),_:1}),a(e,null,{default:t(()=>[n("合")]),doing:t(()=>[n(" 肆 ")]),finish:t(()=>[n(" 完 ")]),_:1})]),_:1},8,["modelValue"]),a(r),a(m,{onClick:o[3]||(o[3]=l=>c.value=(c.value+1)%4)},{default:t(()=>[n("点击切换步骤")]),_:1})]),_:1})]),_:1}),G,H,a(f,{datas:v}),I,J,a(g,{datas:h}),K,a(g,{datas:_}),L,M,O,a(x,{datas:b})])}}},X=y(Q,[["__file","index.html.vue"]]);export{X as default};
