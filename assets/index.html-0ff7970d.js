import{_,f as g,r as o,o as b,c as f,a,b as n,e as s,w as e,d}from"./app-d2a1d7c9.js";const x={id:"取色器-color-select",tabindex:"-1"},V=a("a",{class:"header-anchor",href:"#取色器-color-select","aria-hidden":"true"},"#",-1),w=d('<p>用于选择颜色</p><h2 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明" aria-hidden="true">#</a> 使用说明</h2><div class="custom-container warning"><p class="custom-container-title">错误提示</p><p>组件目前无法精准解析16进制颜色，后续版本将优化</p></div><h3 id="简单引入" tabindex="-1"><a class="header-anchor" href="#简单引入" aria-hidden="true">#</a> 简单引入</h3><p>通过绑定modelValue获取当前颜色，组件点击确定即可更改并获取颜色</p>',5),y=a("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("vi-color-select")]),n(),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pick"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},"/>")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("script")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[n(`
  `),a("span",{class:"token keyword"},"const"),n(" pick "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"ref"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'#aaaaaa'"),a("span",{class:"token punctuation"},")"),n(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("script")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),B=a("h3",{id:"显示十六进制",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#显示十六进制","aria-hidden":"true"},"#"),n(" 显示十六进制")],-1),N=a("p",null,"使用number属性显示当前颜色十六进制",-1),j=a("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("vi-color-select")]),n(),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pick"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"number"),a("span",{class:"token punctuation"},"/>")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("script")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[n(`
  `),a("span",{class:"token keyword"},"const"),n(" pick "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"ref"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'#aaaaaa'"),a("span",{class:"token punctuation"},")"),n(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("script")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),q=a("h3",{id:"透明度控制",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#透明度控制","aria-hidden":"true"},"#"),n(" 透明度控制")],-1),U=a("p",null,"使用alpha属性开启透明度选择",-1),C=a("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("vi-color-select")]),n(),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pick"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"alpha"),a("span",{class:"token punctuation"},"/>")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("script")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[n(`
  `),a("span",{class:"token keyword"},"const"),n(" pick "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"ref"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'#aaaaaa'"),a("span",{class:"token punctuation"},")"),n(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("script")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),E=a("h2",{id:"props",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#props","aria-hidden":"true"},"#"),n(" Props")],-1),P=d('<h2 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h2><p>无</p><h2 id="事件支持" tabindex="-1"><a class="header-anchor" href="#事件支持" aria-hidden="true">#</a> 事件支持</h2><p>无</p><h2 id="可覆写css变量" tabindex="-1"><a class="header-anchor" href="#可覆写css变量" aria-hidden="true">#</a> 可覆写css变量</h2>',5),S={__name:"index.html",setup(T){const k=[["name","原生属性","string","-"],["modelValue","选择颜色","string","#000000"],["type","组件样式","default","defualt"],["number","是否开启16进制显示","boolean","false"],["alpha","是否开启透明度选择","boolean","false"]],m=[["--vi-color-select-width","取色器选中颜色区域宽度","auto"],["--vi-color-select-height","取色器选中颜色区域高度","20px"]],t=g("#aaaaaa");return(z,l)=>{const r=o("Badge"),p=o("vi-color-select"),u=o("row"),i=o("code-show"),h=o("my-table"),v=o("my-table-c");return b(),f("div",null,[a("h1",x,[V,n(" 取色器 color-select "),s(r,{text:"new",vertical:"middle"}),n(),s(r,{type:"warning",text:"待优化",vertical:"middle"})]),w,s(i,null,{code:e(()=>[y]),default:e(()=>[s(u,null,{default:e(()=>[s(p,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=c=>t.value=c)},null,8,["modelValue"])]),_:1})]),_:1}),B,N,s(i,null,{code:e(()=>[j]),default:e(()=>[s(u,null,{default:e(()=>[s(p,{modelValue:t.value,"onUpdate:modelValue":l[1]||(l[1]=c=>t.value=c),number:""},null,8,["modelValue"])]),_:1})]),_:1}),q,U,s(i,null,{code:e(()=>[C]),default:e(()=>[s(u,null,{default:e(()=>[s(p,{modelValue:t.value,"onUpdate:modelValue":l[2]||(l[2]=c=>t.value=c),alpha:""},null,8,["modelValue"])]),_:1})]),_:1}),E,s(h,{datas:k}),P,s(v,{datas:m})])}}},D=_(S,[["__file","index.html.vue"]]);export{D as default};
