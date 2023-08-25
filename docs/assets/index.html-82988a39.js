import{_ as m,h as b,r as n,o as v,c as x,a,b as e,e as t,w as s,d as g}from"./app-25e0b478.js";const f={id:"可编辑表格-table-editor",tabindex:"-1"},w=a("a",{class:"header-anchor",href:"#可编辑表格-table-editor","aria-hidden":"true"},"#",-1),y=a("p",null,"可以用于在线表格设计",-1),V=a("h2",{id:"使用说明",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#使用说明","aria-hidden":"true"},"#"),e(" 使用说明")],-1),B=a("p",null,"简单说明，更多功能细节可自行使用发现",-1),N=a("h3",{id:"简单引入",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#简单引入","aria-hidden":"true"},"#"),e(" 简单引入")],-1),C=a("p",null,"你需要通过v-model向组件绑定一个二维数组，用于存储表格数据",-1),q=a("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),e("vi-table-editor")]),e(),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),e("data"),a("span",{class:"token punctuation"},'"')]),e(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"--vi-table-width"),a("span",{class:"token punctuation"},":"),e(" 100%"),a("span",{class:"token punctuation"},";"),e(),a("span",{class:"token property"},"--vi-table-height"),a("span",{class:"token punctuation"},":"),e(" 380px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),e("vi-table-editor")]),a("span",{class:"token punctuation"},">")]),e(`

`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),e("script")]),e(),a("span",{class:"token attr-name"},"setup"),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[e(`
    `),a("span",{class:"token keyword"},"import"),e(),a("span",{class:"token punctuation"},"{"),e(" reactive "),a("span",{class:"token punctuation"},"}"),e(),a("span",{class:"token keyword"},"from"),e(),a("span",{class:"token string"},"'vue'"),e(`

    `),a("span",{class:"token keyword"},"const"),e(" data "),a("span",{class:"token operator"},"="),e(),a("span",{class:"token function"},"reactive"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"["),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},")"),e(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),e("script")]),a("span",{class:"token punctuation"},">")]),e(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),j=g('<h3 id="编辑" tabindex="-1"><a class="header-anchor" href="#编辑" aria-hidden="true">#</a> 编辑</h3><p>双击进入格子进行编辑，失焦后保存数据</p><h3 id="格式化" tabindex="-1"><a class="header-anchor" href="#格式化" aria-hidden="true">#</a> 格式化</h3><p>按下鼠标左键拖动选中表格数据范围，拖动右下角小点进行数据格式化</p><h3 id="操作列表" tabindex="-1"><a class="header-anchor" href="#操作列表" aria-hidden="true">#</a> 操作列表</h3><p>右键格子、头部、侧边栏唤出操作列表</p><h3 id="格子长宽拖动" tabindex="-1"><a class="header-anchor" href="#格子长宽拖动" aria-hidden="true">#</a> 格子长宽拖动</h3><p>正在实现中</p><h3 id="操作撤销栈" tabindex="-1"><a class="header-anchor" href="#操作撤销栈" aria-hidden="true">#</a> 操作撤销栈</h3><p>正在实现中</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h2>',11),E=a("h2",{id:"css变量",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#css变量","aria-hidden":"true"},"#"),e(" css变量")],-1),R={__name:"index.html",setup(S){const o=b([]),i=[["modelValue","表格操作数据","any[]","-"],["defaultRow","默认展示最小行数","number","15"],["defaultCol","默认展示最小列数","number","15"]],p=[["--vi-table-width","表格宽度","500px"],["--vi-table-width","表格高度","200px"],["--vi-table-header-height","表格头部","25px"],["--vi-table-sider-width","表格侧边栏宽度","40px"],["--vi-table-td-width","表格格子宽度","70px"],["--vi-table-td-height","表格格子高度","25px"]];return(T,c)=>{const l=n("Badge"),d=n("vi-table-editor"),r=n("row"),u=n("code-show"),h=n("my-table"),k=n("my-table-c");return v(),x("div",null,[a("h1",f,[w,e(" 可编辑表格 table-editor "),t(l,{type:"warning",text:"待优化",vertical:"middle"}),e(),t(l,{text:"待新增",vertical:"middle"})]),y,V,B,N,C,t(u,null,{code:s(()=>[q]),default:s(()=>[t(r,null,{default:s(()=>[t(d,{modelValue:o,"onUpdate:modelValue":c[0]||(c[0]=_=>o=_),style:{"--vi-table-width":"100%","--vi-table-height":"380px"}},null,8,["modelValue"])]),_:1})]),_:1}),j,t(h,{datas:i}),E,t(k,{datas:p})])}}},z=m(R,[["__file","index.html.vue"]]);export{z as default};
