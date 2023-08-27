import{_ as B,r as e,o as N,c as V,a,b as n,e as s,w as t,d as r}from"./app-21b118a7.js";const A={id:"上传-upload",tabindex:"-1"},C=a("a",{class:"header-anchor",href:"#上传-upload","aria-hidden":"true"},"#",-1),S=r('<p>用于上传、提交文件</p><h2 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明" aria-hidden="true">#</a> 使用说明</h2><h3 id="简单引入" tabindex="-1"><a class="header-anchor" href="#简单引入" aria-hidden="true">#</a> 简单引入</h3><p>引入<code>vi-upload</code>组件规定文件上传板块</p><p>在<code>vi-upload</code>中引入<code>vi-upload-choose</code>组件，允许用户自行上传文件</p><p>在<code>vi-upload</code>中引入<code>vi-upload-list</code>组件，允许用户查看、删除已上传的文件（列表）</p>',6),j=a("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("vi-upload")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("my-vi-upload"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("vi-upload-choose")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("vi-button")]),n(),a("span",{class:"token attr-name"},"color"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("purple"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("点击上传文件"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("vi-button")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("vi-upload-choose")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("vi-upload-list")]),a("span",{class:"token punctuation"},"/>")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("vi-upload")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),E=r(`<h3 id="文件格式图标" tabindex="-1"><a class="header-anchor" href="#文件格式图标" aria-hidden="true">#</a> 文件格式图标</h3><p>你可以通过以下方式更改不同格式文件图标样式</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 类名为：upload-list-item-format-文件格式 */</span>
<span class="token comment">/* 全局修改 */</span>
<span class="token selector">.upload-list-item-format-doc</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 图标背景 */</span>
    <span class="token property">--vi-upload-file-background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vi-blue-color4<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/* 显示图标 */</span>
    <span class="token property">--vi-upload-file-img</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>图片路径<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你也可以为某一个上传组件更改格式文件</p><h3 id="控制文件大小" tabindex="-1"><a class="header-anchor" href="#控制文件大小" aria-hidden="true">#</a> 控制文件大小</h3><p><code>vi-upload</code>组件通过属性limit控制文件大小显示，单位为b</p>`,6),L=a("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("vi-upload")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("my-vi-upload"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("vi-upload-choose")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("vi-button")]),n(),a("span",{class:"token attr-name"},"color"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("purple"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("点击上传文件"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("vi-button")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("vi-upload-choose")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("vi-upload-list")]),a("span",{class:"token punctuation"},"/>")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("vi-upload")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),M=a("h3",{id:"控制文件上传数",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#控制文件上传数","aria-hidden":"true"},"#"),n(" 控制文件上传数")],-1),P=a("p",null,[a("code",null,"vi-upload"),n("组件通过属性maximum控制文件最大上传份数，不规定则对份数不做限制")],-1),T=a("p",null,"通过属性replace可以让最新上传的超出最大份数的文件替换最早上传的文件",-1),D=a("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("vi-upload")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("my-vi-upload"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("vi-upload-choose")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("vi-button")]),n(),a("span",{class:"token attr-name"},"color"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("purple"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("点击上传文件"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("vi-button")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("vi-upload-choose")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("vi-upload-list")]),a("span",{class:"token punctuation"},"/>")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("vi-upload")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),F=a("h3",{id:"显示文件大小",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#显示文件大小","aria-hidden":"true"},"#"),n(" 显示文件大小")],-1),G=a("p",null,[a("code",null,"vi-upload-list"),n("组件通过属性show-size控制文件大小显示")],-1),H=a("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("vi-upload")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("my-vi-upload"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("vi-upload-choose")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("vi-icon")]),n(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("shangchuan"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"color"),a("span",{class:"token punctuation"},":"),n(" #aaa"),a("span",{class:"token punctuation"},";"),n(),a("span",{class:"token property"},"font-size"),a("span",{class:"token punctuation"},":"),n(" 36px"),a("span",{class:"token punctuation"},";"),n(),a("span",{class:"token property"},"cursor"),a("span",{class:"token punctuation"},":"),n(" pointer")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},"/>")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("vi-upload-choose")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("vi-upload-list")]),n(),a("span",{class:"token attr-name"},"show-size"),a("span",{class:"token punctuation"},"/>")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("vi-upload")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),I=a("h3",{id:"拖拽添加文件",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#拖拽添加文件","aria-hidden":"true"},"#"),n(" 拖拽添加文件")],-1),J=a("p",null,[a("code",null,"vi-upload-choose"),n("通过drag属性开启拖拽上传，此时，默认插槽有一个默认样式（其中携带一份<vi-upload-list/>")],-1),K=a("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("vi-upload")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("vi-upload-choose")]),n(),a("span",{class:"token attr-name"},"drag"),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("vi-upload-choose")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("vi-upload")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),O=a("h3",{id:"头像上传显示",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#头像上传显示","aria-hidden":"true"},"#"),n(" 头像上传显示")],-1),Q=a("p",null,[a("code",null,"vi-upload-choose"),n("通过photo属性显示头像上传样式，上传功能本质未变化")],-1),R=a("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("vi-upload")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("vi-upload-choose")]),n(),a("span",{class:"token attr-name"},"photo"),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("vi-upload-choose")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("vi-upload")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),U=r('<h3 id="图片墙" tabindex="-1"><a class="header-anchor" href="#图片墙" aria-hidden="true">#</a> 图片墙</h3><p>暂未实现</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><h3 id="upload" tabindex="-1"><a class="header-anchor" href="#upload" aria-hidden="true">#</a> upload</h3>',4),W=a("h3",{id:"upload-choose",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#upload-choose","aria-hidden":"true"},"#"),n(" upload-choose")],-1),X=a("h3",{id:"upload-list",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#upload-list","aria-hidden":"true"},"#"),n(" upload-list")],-1),Y=a("h2",{id:"插槽",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#插槽","aria-hidden":"true"},"#"),n(" 插槽")],-1),Z=a("h3",{id:"upload-1",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#upload-1","aria-hidden":"true"},"#"),n(" upload")],-1),$=a("h3",{id:"upload-choose-1",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#upload-choose-1","aria-hidden":"true"},"#"),n(" upload-choose")],-1),aa=a("h2",{id:"事件支持",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#事件支持","aria-hidden":"true"},"#"),n(" 事件支持")],-1),na=a("h3",{id:"upload-2",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#upload-2","aria-hidden":"true"},"#"),n(" upload")],-1),sa=a("h2",{id:"可覆写css变量",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#可覆写css变量","aria-hidden":"true"},"#"),n(" 可覆写css变量")],-1),ta=a("h3",{id:"upload-3",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#upload-3","aria-hidden":"true"},"#"),n(" upload")],-1),ea=a("h3",{id:"upload-list-1",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#upload-list-1","aria-hidden":"true"},"#"),n(" upload-list")],-1),oa={__name:"index.html",setup(la){const m=[["limit","控制上传单份文件大小，单位为b","number","-"],["maximum","上传最多份数","number","-"],["replace","是否覆盖文件","boolean","false"],["multiple","原生属性","是否允许一次上传多份","boolean","false"],["accept","原生属性，允许上传文件格式","string","-"],["capture","原生属性","boolean | user | environment | undefined","false"],["name","原生属性","string","-"]],_=[["drag","是否允许文件拖拽上传","boolean","false"],["photo","开启头像上传样式","boolean","false"],["imgsrc","头像上传样式开启后的显示头像src","string","-"]],g=[["type","list-item样式","default","default"],["delete","是否显示手动删除按钮","boolean","true"],["showSize","是否显示文件大小","boolean","false"]],b=[["默认插槽","upload内容","-"]],f=[["默认插槽","upload-choose内容","在drag情况下有默认样式"]],x=[["beforeadd","添加文件之前","(file: 目标文件)"],["afteradd","添加文件之后","(file: 目标文件)"],["beforedelete","删除文件之前","(file: 目标文件)"],["afterdelete","删除文件之后","(file: 目标文件)"],["MaximumAttention","文件超过最大份数时","(file: 目标文件)"],["LimitAttention","文件超过大小限制时","(file: 目标文件)"],["change","文件列表改变时","(file: 全部文件列表)"]],y=[["vi-upload-width","上传组件宽度","-"],["vi-upload-height","上传组件高度","-"]],w=[["--vi-upload-list-width","上传文件展示列表组件宽度","-"]];return(ca,ua)=>{const k=e("Badge"),i=e("vi-button"),o=e("vi-upload-choose"),p=e("vi-upload-list"),l=e("vi-upload"),c=e("row"),u=e("code-show"),q=e("vi-icon"),d=e("my-table"),h=e("my-table-s"),z=e("my-table-m"),v=e("my-table-c");return N(),V("div",null,[a("h1",A,[C,n(" 上传 upload "),s(k,{type:"warning",text:"待优化",vertical:"middle"}),n(),s(k,{text:"待新增",vertical:"middle"})]),S,s(u,null,{code:t(()=>[j]),default:t(()=>[s(c,null,{default:t(()=>[s(l,{class:"my-vi-upload"},{default:t(()=>[s(o,null,{default:t(()=>[s(i,{color:"purple"},{default:t(()=>[n("点击上传文件")]),_:1})]),_:1}),s(p)]),_:1})]),_:1})]),_:1}),E,s(u,null,{code:t(()=>[L]),default:t(()=>[s(c,null,{default:t(()=>[s(l,{class:"my-vi-upload",limit:1024},{default:t(()=>[s(o,null,{default:t(()=>[s(i,null,{default:t(()=>[n("点击上传文件")]),_:1})]),_:1}),s(p)]),_:1})]),_:1})]),_:1}),M,P,T,s(u,null,{code:t(()=>[D]),default:t(()=>[s(c,null,{default:t(()=>[s(l,{class:"my-vi-upload",maximum:1,replace:""},{default:t(()=>[s(o,null,{default:t(()=>[s(i,null,{default:t(()=>[n("点击上传文件")]),_:1})]),_:1}),s(p)]),_:1})]),_:1})]),_:1}),F,G,s(u,null,{code:t(()=>[H]),default:t(()=>[s(c,null,{default:t(()=>[s(l,{class:"my-vi-upload"},{default:t(()=>[s(o,null,{default:t(()=>[s(q,{type:"shangchuan",style:{color:"#aaa","font-size":"36px",cursor:"pointer"}})]),_:1}),s(p,{"show-size":""})]),_:1})]),_:1})]),_:1}),I,J,s(u,null,{code:t(()=>[K]),default:t(()=>[s(c,null,{default:t(()=>[s(l,null,{default:t(()=>[s(o,{drag:""})]),_:1})]),_:1})]),_:1}),O,Q,s(u,null,{code:t(()=>[R]),default:t(()=>[s(c,null,{default:t(()=>[s(l,null,{default:t(()=>[s(o,{photo:"",imgsrc:"../../img/avater.jpg"})]),_:1})]),_:1})]),_:1}),U,s(d,{datas:m}),W,s(d,{datas:_}),X,s(d,{datas:g}),Y,Z,s(h,{datas:b}),$,s(h,{datas:f}),aa,na,s(z,{datas:x}),sa,ta,s(v,{datas:y}),ea,s(v,{datas:w})])}}},ia=B(oa,[["__file","index.html.vue"]]);export{ia as default};
