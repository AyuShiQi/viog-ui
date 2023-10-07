import{_ as k,r as e,o as h,c as m,a,b as t,e as n,w as s}from"./app-8189afe1.js";const v={id:"固钉-affix",tabindex:"-1"},f=a("a",{class:"header-anchor",href:"#固钉-affix","aria-hidden":"true"},"#",-1),b=a("p",null,"黏性固钉",-1),g=a("h2",{id:"使用说明",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#使用说明","aria-hidden":"true"},"#"),t(" 使用说明")],-1),x=a("h3",{id:"简单引入",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#简单引入","aria-hidden":"true"},"#"),t(" 简单引入")],-1),y=a("p",null,"通过position属性定义黏性固钉的固定位置，单位是px",-1),w=a("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("vi-affix")]),t(),a("span",{class:"token attr-name"},":position"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("120"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),t(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("vi-button")]),t(),a("span",{class:"token attr-name"},"color"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("pink"),a("span",{class:"token punctuation"},'"')]),t(),a("span",{class:"token attr-name"},"mutate"),a("span",{class:"token punctuation"},">")]),t("我是一个顶部固钉"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("vi-button")]),a("span",{class:"token punctuation"},">")]),t(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("vi-affix")]),a("span",{class:"token punctuation"},">")]),t(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),q={id:"固钉绑定",tabindex:"-1"},B=a("a",{class:"header-anchor",href:"#固钉绑定","aria-hidden":"true"},"#",-1),N=a("p",null,"你可以将固钉绑定在某个元素中，前提该盒子不是滚动框",-1),V=a("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[a("pre",{class:"language-vue"},[a("code")]),a("div",{class:"line-numbers","aria-hidden":"true"})],-1),C=a("h3",{id:"固钉方向",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#固钉方向","aria-hidden":"true"},"#"),t(" 固钉方向")],-1),E=a("p",null,"通过type属性定义固钉固钉方位（top、bottom），默认为top",-1),P=a("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("vi-affix")]),t(),a("span",{class:"token attr-name"},":position"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("200"),a("span",{class:"token punctuation"},'"')]),t(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("bottom"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),t(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("vi-button")]),t(),a("span",{class:"token attr-name"},"color"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("blue"),a("span",{class:"token punctuation"},'"')]),t(),a("span",{class:"token attr-name"},"mutate"),a("span",{class:"token punctuation"},">")]),t("我是一个底部固钉"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("vi-button")]),a("span",{class:"token punctuation"},">")]),t(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("vi-affix")]),a("span",{class:"token punctuation"},">")]),t(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),T=a("h2",{id:"props",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#props","aria-hidden":"true"},"#"),t(" Props")],-1),j=a("h2",{id:"插槽",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#插槽","aria-hidden":"true"},"#"),t(" 插槽")],-1),z={__name:"index.html",setup(A){const p=[["position","固定位置","number","-"],["type","固定方位","top | bottom","top"]],d=[["默认插槽","固钉内容","-"]];return(D,F)=>{const l=e("Badge"),i=e("vi-button"),u=e("vi-affix"),o=e("row"),c=e("code-show"),r=e("my-table"),_=e("my-table-s");return h(),m("div",null,[a("h1",v,[f,t(" 固钉 affix "),n(l,{type:"warning",text:"待优化",vertical:"middle"})]),b,g,x,y,n(c,null,{code:s(()=>[w]),default:s(()=>[n(o,null,{default:s(()=>[n(u,{position:120},{default:s(()=>[n(i,{color:"pink",mutate:""},{default:s(()=>[t("我是一个顶部固钉")]),_:1})]),_:1})]),_:1})]),_:1}),a("h3",q,[B,t(" 固钉绑定 "),n(l,{type:"danger",text:"开发中",vertical:"middle"})]),N,n(c,null,{code:s(()=>[V]),default:s(()=>[n(o)]),_:1}),C,E,n(c,null,{code:s(()=>[P]),default:s(()=>[n(o,null,{default:s(()=>[n(u,{position:200,type:"bottom"},{default:s(()=>[n(i,{color:"blue",mutate:""},{default:s(()=>[t("我是一个底部固钉")]),_:1})]),_:1})]),_:1})]),_:1}),T,n(r,{datas:p}),j,n(_,{datas:d})])}}},H=k(z,[["__file","index.html.vue"]]);export{H as default};
