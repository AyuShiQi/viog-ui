import{_ as s,r,o as i,c as p,e as o,w as t,d as c,a as l,b as a}from"./app-027ab0d8.js";const n=c('<h1 id="颜色" tabindex="-1"><a class="header-anchor" href="#颜色" aria-hidden="true">#</a> 颜色</h1><p>该组件库规定了一套调色板</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>组件库暂未实现暗黑模式颜色风格，后续版本将更新优化</p></div><h2 id="装饰色" tabindex="-1"><a class="header-anchor" href="#装饰色" aria-hidden="true">#</a> 装饰色</h2><p>我们规定了六套装饰色系（分别为：purple、red、pink、yellow、blue、green），适应不同场景的不同需求<br> 你也可以重新定义覆盖这些css变量，个性化你自己的调色盘。需要注意的是：color5一般为一个透明度较高的颜色，其它颜色则为实色</p>',5),d=l("ul",{class:"color-palette color-palette-purple"},[l("span",{class:"color-palette-item"},"--vi-purple-color1"),l("span",{class:"color-palette-item"},"--vi-purple-color2"),l("span",{class:"color-palette-item"},"--vi-purple-color3"),l("span",{class:"color-palette-item"},"--vi-purple-color4"),l("span",{class:"color-palette-item"},"--vi-purple-color5")],-1),m=l("ul",{class:"color-palette color-palette-red"},[l("span",{class:"color-palette-item"},"--vi-red-color1"),l("span",{class:"color-palette-item"},"--vi-red-color2"),l("span",{class:"color-palette-item"},"--vi-red-color3"),l("span",{class:"color-palette-item"},"--vi-red-color4"),l("span",{class:"color-palette-item"},"--vi-red-color5")],-1),v=l("ul",{class:"color-palette color-palette-pink"},[l("span",{class:"color-palette-item"},"--vi-pink-color1"),l("span",{class:"color-palette-item"},"--vi-pink-color2"),l("span",{class:"color-palette-item"},"--vi-pink-color3"),l("span",{class:"color-palette-item"},"--vi-pink-color4"),l("span",{class:"color-palette-item"},"--vi-pink-color5")],-1),_=l("ul",{class:"color-palette color-palette-yellow"},[l("span",{class:"color-palette-item"},"--vi-yellow-color1"),l("span",{class:"color-palette-item"},"--vi-yellow-color2"),l("span",{class:"color-palette-item"},"--vi-yellow-color3"),l("span",{class:"color-palette-item"},"--vi-yellow-color4"),l("span",{class:"color-palette-item"},"--vi-yellow-color5")],-1),u=l("ul",{class:"color-palette color-palette-blue"},[l("span",{class:"color-palette-item"},"--vi-blue-color1"),l("span",{class:"color-palette-item"},"--vi-blue-color2"),l("span",{class:"color-palette-item"},"--vi-blue-color3"),l("span",{class:"color-palette-item"},"--vi-blue-color4"),l("span",{class:"color-palette-item"},"--vi-blue-color5")],-1),h=l("ul",{class:"color-palette color-palette-green"},[l("span",{class:"color-palette-item"},"--vi-green-color1"),l("span",{class:"color-palette-item"},"--vi-green-color2"),l("span",{class:"color-palette-item"},"--vi-green-color3"),l("span",{class:"color-palette-item"},"--vi-green-color4"),l("span",{class:"color-palette-item"},"--vi-green-color5")],-1),b=c('<p>其中，紫色是我们默认的组件库主色系，如果您需要更改主色系，只需要修改以下css变量即可：</p><ul><li>--vi-main-color1</li><li>--vi-main-color2</li><li>--vi-main-color3</li><li>--vi-main-color4</li><li>--vi-main-color5</li><li>--vi-main-color6: 此颜色仅用于控制time-select组件中的选中元素颜色：rgba(181, 136, 233, 0.3)</li></ul><h2 id="中性色" tabindex="-1"><a class="header-anchor" href="#中性色" aria-hidden="true">#</a> 中性色</h2><p>除装饰色外，我们规定了一套中性色用于文本、边框等部分</p>',4),k=l("ul",{class:"color-palette color-palette-black"},[l("span",{class:"color-palette-item"},"--vi-font-color"),l("span",{class:"color-palette-item"},"--vi-link-color"),l("span",{class:"color-palette-item"},"--vi-icon-color"),l("span",{class:"color-palette-item"},"--vi-background-color-deep"),l("span",{class:"color-palette-item"},"--vi-background-color")],-1),f=l("ul",{class:"color-palette color-palette-dark"},[l("span",{class:"color-palette-item"},"--vi-dark-color1"),l("span",{class:"color-palette-item"},"--vi-dark-color2"),l("span",{class:"color-palette-item"},"--vi-dark-color3"),l("span",{class:"color-palette-item"},"--vi-dark-color4")],-1),g=l("ul",{class:"color-palette color-palette-golden"},[l("span",{class:"color-palette-item"},"--vi-golden-color1"),l("span",{class:"color-palette-item"},"--vi-golden-color2")],-1),w=l("h2",{id:"使用",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#使用","aria-hidden":"true"},"#"),a(" 使用")],-1),y=l("p",null,[a("如果需要使用上方这些颜色，只需要引用对应的css变量即可"),l("br"),a(" 你也可以在自定义覆盖这些变量，完成你的个性化订制，全局更改建议在:root里定义，仅对一个组件色系更改，可以在类名vi-组件名中更改")],-1),x={__name:"color.html",setup(N){return(V,j)=>{const e=r("vi-row");return i(),p("div",null,[n,o(e,{justify:"space-between"},{default:t(()=>[d,m,v]),_:1}),o(e,{justify:"space-between"},{default:t(()=>[_,u,h]),_:1}),b,o(e,{justify:"space-between",align:"flex-start"},{default:t(()=>[k,f,g]),_:1}),w,y])}}},C=s(x,[["__file","color.html.vue"]]);export{C as default};