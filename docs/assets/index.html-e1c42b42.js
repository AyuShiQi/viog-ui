import{_ as k,r as a,o as _,c as h,a as n,b as t,e as s,w as e,d as x}from"./app-0f1ee85e.js";const v={id:"上下文菜单-context-menu",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#上下文菜单-context-menu","aria-hidden":"true"},"#",-1),b=x('<p>右键呼出菜单</p><h2 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明" aria-hidden="true">#</a> 使用说明</h2><h3 id="简单引入" tabindex="-1"><a class="header-anchor" href="#简单引入" aria-hidden="true">#</a> 简单引入</h3><p>使用<code>vi-context-menu</code>组件，默认插槽为呼出目标内容，content插槽中定义上下文菜单</p><p>使用<code>--vi-context-menu-z-index</code>定义上下文菜单z-index</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>请使用<code>--vi-context-menu-width</code>与<code>--vi-context-menu-height</code>css变量来定义上下文菜单的宽度与高度，请保证两值的单位为px</p></div>',6),f=n("div",{class:"my-context-menu"},"这是一个上下文菜单",-1),y=n("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("vi-context-menu")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"--vi-context-menu-width"),n("span",{class:"token punctuation"},":"),t(" 60px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"--vi-context-menu-height"),n("span",{class:"token punctuation"},":"),t(" 150px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"--vi-context-menu-z-index"),n("span",{class:"token punctuation"},":"),t(" 100"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("vi-button")]),n("span",{class:"token punctuation"},">")]),t("右键呼出上下文菜单框"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("vi-button")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-slot:"),t("content")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("my-context-menu"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("这是一个上下文菜单"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("vi-context-menu")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("tempalte")]),n("span",{class:"token punctuation"},">")]),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("h2",{id:"插槽",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#插槽","aria-hidden":"true"},"#"),t(" 插槽")],-1),z=n("h2",{id:"可覆写css变量",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#可覆写css变量","aria-hidden":"true"},"#"),t(" 可覆写css变量")],-1),B={__name:"index.html",setup(N){const c=[["默认插槽","菜单呼出目标","-"],["content","上下文菜单样式","-"]],o=[["--vi-context-menu-width","上下文菜单宽度","200px"],["--vi-context-menu-height","上下文菜单高度","400px"],["--vi-context-menu-z-index","上下文菜单z-index","-"]];return(V,q)=>{const l=a("Badge"),p=a("vi-button"),i=a("vi-context-menu"),u=a("row"),d=a("code-show"),r=a("my-table-s"),m=a("my-table-c");return _(),h("div",null,[n("h1",v,[g,t(" 上下文菜单 context-menu "),s(l,{text:"待优化",type:"warning",vertical:"middle"})]),b,s(d,null,{code:e(()=>[y]),default:e(()=>[s(u,null,{default:e(()=>[s(i,{style:{"--vi-context-menu-width":"60px","--vi-context-menu-height":"150px","--vi-context-menu-z-index":"100"}},{content:e(()=>[f]),default:e(()=>[s(p,null,{default:e(()=>[t("右键呼出上下文菜单框")]),_:1})]),_:1})]),_:1})]),_:1}),w,s(r,{datas:c}),z,s(m,{datas:o})])}}},E=k(B,[["__file","index.html.vue"]]);export{E as default};
