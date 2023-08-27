import{_ as k,r as t,o as _,c as m,a as n,b as s,e as a,w as e,p as h}from"./app-21b118a7.js";const v={id:"吐司-toast",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#吐司-toast","aria-hidden":"true"},"#",-1),b=n("p",null,"用于提示信息",-1),f=n("h2",{id:"使用说明",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用说明","aria-hidden":"true"},"#"),s(" 使用说明")],-1),x=n("h3",{id:"简单引入",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简单引入","aria-hidden":"true"},"#"),s(" 简单引入")],-1),w=n("p",null,"这是一个全局组件，你需要通过函数去调用它",-1),y=n("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vi-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("openToast"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("点击打开吐司"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vi-button")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
    `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ViMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'viog-ui'"),s(`
    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"openToast"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// 消息内容、显示时间"),s(`
        ViMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'这是一个消息框'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V={__name:"index.html",setup(B){const{ViToast:i}=h;function p(o){i.open("这是一个吐司",o)}return(o,c)=>{const l=t("Badge"),u=t("vi-button"),r=t("row"),d=t("code-show");return _(),m("div",null,[n("h1",v,[g,s(" 吐司 toast "),a(l,{type:"warning",text:"待优化",vertical:"middle"}),s(),a(l,{text:"待新增",vertical:"middle"})]),b,f,x,w,a(d,null,{code:e(()=>[y]),default:e(()=>[a(r,null,{default:e(()=>[a(u,{onClick:c[0]||(c[0]=T=>p(2e3))},{default:e(()=>[s("点击打开吐司")]),_:1})]),_:1})]),_:1})])}}},N=k(V,[["__file","index.html.vue"]]);export{N as default};
