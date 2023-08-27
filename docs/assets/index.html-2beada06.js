import{_,r as e,o as m,c as g,a as n,b as s,e as a,w as t,p as v}from"./app-21b118a7.js";const h={id:"消息-message",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#消息-message","aria-hidden":"true"},"#",-1),f=n("p",null,"用于提醒用户某些消息",-1),x=n("h2",{id:"使用说明",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用说明","aria-hidden":"true"},"#"),s(" 使用说明")],-1),w=n("h3",{id:"简单引入",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简单引入","aria-hidden":"true"},"#"),s(" 简单引入")],-1),M=n("p",null,"这是一个全局组件，你需要通过函数去调用它",-1),y=n("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vi-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("appendMessage"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("点击生成消息框"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vi-button")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
    `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ViMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'viog-ui'"),s(`
    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"appendMessage"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// 消息内容、显示时间"),s(`
        ViMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'这是一个消息框'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=n("p",null,"如果不传入message时间，则不会自动消失",-1),B=n("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vi-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("appendMessage2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("点击生成消息框"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vi-button")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"appendMessage2"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// 消息内容、显示时间"),s(`
        ViMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'这是一个不会自动关闭的消息框'"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("h2",{id:"css变量",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#css变量","aria-hidden":"true"},"#"),s(" css变量")],-1),N={__name:"index.html",setup(j){const{ViMessage:c}=v;function u(){c.append("这是一个消息框",2e3)}function d(){c.append("这是一个不会自动关闭的消息框")}const r=[["--vi-message-width","消息框宽度","240px"],["--vi-message-top","第一个消息框离顶部距离","5vh"],["--vi-message-right","消息框离右边距离","10px"]];return(q,E)=>{const o=e("Badge"),l=e("vi-button"),p=e("row"),i=e("code-show"),k=e("my-table-c");return m(),g("div",null,[n("h1",h,[b,s(" 消息 message "),a(o,{type:"warning",text:"待优化",vertical:"middle"}),s(),a(o,{text:"待新增",vertical:"middle"})]),f,x,w,M,a(i,null,{code:t(()=>[y]),default:t(()=>[a(p,null,{default:t(()=>[a(l,{onClick:u},{default:t(()=>[s("点击生成消息框")]),_:1})]),_:1})]),_:1}),V,a(i,null,{code:t(()=>[B]),default:t(()=>[a(p,null,{default:t(()=>[a(l,{onClick:d},{default:t(()=>[s("点击生成消息框")]),_:1})]),_:1})]),_:1}),C,a(k,{datas:r})])}}},z=_(N,[["__file","index.html.vue"]]);export{z as default};
