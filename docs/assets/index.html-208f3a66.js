import{_ as h,h as _,r as i,o as y,c as V,a,b as s,e as n,w as o,d as k}from"./app-8189afe1.js";const f={id:"时间选择器-time-select",tabindex:"-1"},q=a("a",{class:"header-anchor",href:"#时间选择器-time-select","aria-hidden":"true"},"#",-1),x=k(`<p>用于选择时间</p><h2 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明" aria-hidden="true">#</a> 使用说明</h2><h3 id="简单引入" tabindex="-1"><a class="header-anchor" href="#简单引入" aria-hidden="true">#</a> 简单引入</h3><p>你需要通过<code>v-model</code>向该组件绑定一个对象，选择的时间将保存在该对象中，格式为:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">{</span>
  hour<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  minute<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  second<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),j=a("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("vi-time-select")]),s(),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("obj"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("my-select-v"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("vi-time-select")]),a("span",{class:"token punctuation"},">")]),s(`

`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("script")]),s(),a("span",{class:"token attr-name"},"setup"),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[s(`
  `),a("span",{class:"token keyword"},"import"),s(),a("span",{class:"token punctuation"},"{"),s(" reactive "),a("span",{class:"token punctuation"},"}"),s(),a("span",{class:"token keyword"},"from"),s(),a("span",{class:"token string"},"'vue'"),s(`
  `),a("span",{class:"token keyword"},"const"),s(" obj "),a("span",{class:"token operator"},"="),s(),a("span",{class:"token function"},"reactive"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),s(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("script")]),a("span",{class:"token punctuation"},">")]),s(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),U=a("h3",{id:"样式",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#样式","aria-hidden":"true"},"#"),s(" 样式")],-1),w=a("p",null,"通过属性type控制选择器样式",-1),z=a("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("vi-select-v")]),s(),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("obj"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("my-select-v"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("vi-select-v")]),a("span",{class:"token punctuation"},">")]),s(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),B=a("h3",{id:"大小",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#大小","aria-hidden":"true"},"#"),s(" 大小")],-1),N=a("p",null,"通过属性size控制选择器大小",-1),C=a("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("vi-time-select")]),s(),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("big"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("obj"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("my-select-v"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("vi-time-select")]),a("span",{class:"token punctuation"},">")]),s(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("vi-time-select")]),s(),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("obj"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("my-select-v"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("vi-time-select")]),a("span",{class:"token punctuation"},">")]),s(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("vi-time-select")]),s(),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("small"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("obj"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("my-select-v"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("vi-time-select")]),a("span",{class:"token punctuation"},">")]),s(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("vi-divider")]),a("span",{class:"token punctuation"},"/>")]),s(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("vi-time-select")]),s(),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("big"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("button"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("obj"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("my-select-v"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("vi-time-select")]),a("span",{class:"token punctuation"},">")]),s(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("vi-time-select")]),s(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("button"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("obj"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("my-select-v"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("vi-time-select")]),a("span",{class:"token punctuation"},">")]),s(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("vi-time-select")]),s(),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("small"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("button"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("obj"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("my-select-v"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("vi-time-select")]),a("span",{class:"token punctuation"},">")]),s(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),S=a("h3",{id:"禁用",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#禁用","aria-hidden":"true"},"#"),s(" 禁用")],-1),T=a("p",null,"通过属性disabled禁用选择器",-1),E=a("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("vi-time-select")]),s(),a("span",{class:"token attr-name"},"disabled"),s(),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("obj"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("my-select-v"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("vi-time-select")]),a("span",{class:"token punctuation"},">")]),s(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("vi-time-select")]),s(),a("span",{class:"token attr-name"},"disabled"),s(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("button"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("obj"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("my-select-v"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("vi-time-select")]),a("span",{class:"token punctuation"},">")]),s(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),H=a("h3",{id:"时间格式化",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#时间格式化","aria-hidden":"true"},"#"),s(" 时间格式化")],-1),M=a("p",null,"通过format传入需要展示的时间格式",-1),P=a("p",null,"hh代表小时、mm代表分钟、ss代表秒，默认格式为：hh:mm:ss",-1),A=a("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("vi-time-select")]),s(),a("span",{class:"token attr-name"},"format"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("hh时mm分ss秒"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("obj"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("my-select-v"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("vi-time-select")]),a("span",{class:"token punctuation"},">")]),s(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),D=a("h3",{id:"最小选择时间单位",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#最小选择时间单位","aria-hidden":"true"},"#"),s(" 最小选择时间单位")],-1),F=a("p",null,"通过unit属性定义时间选择器最小单位：hour、minute、second（默认）",-1),G=a("p",null,"其余无法选择的时间单位，也可以显示在选择显示界面上",-1),I=a("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("vi-time-select")]),s(),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("obj"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("my-select-v"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"unit"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("hour"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"format"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("hh 时"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("vi-time-select")]),a("span",{class:"token punctuation"},">")]),s(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("vi-time-select")]),s(),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("obj"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("my-select-v"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"unit"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("minute"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("vi-time-select")]),a("span",{class:"token punctuation"},">")]),s(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("vi-time-select")]),s(),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("obj"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("my-select-v"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("vi-time-select")]),a("span",{class:"token punctuation"},">")]),s(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),J=k(`<h3 id="范围选择" tabindex="-1"><a class="header-anchor" href="#范围选择" aria-hidden="true">#</a> 范围选择</h3><p>通过range属性开启范围选择，此时modelValue对象值情况如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">{</span>
  hour<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  minute<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  second<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  endHour<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  endMinute<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  endSecond<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),K=a("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("vi-time-select")]),s(),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("obj"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("my-select-v"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"range"),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("vi-time-select")]),a("span",{class:"token punctuation"},">")]),s(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),L=a("p",null,"通过separate属性更换分隔符",-1),O=a("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("vi-time-select")]),s(),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("obj"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("my-select-v"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"range"),s(),a("span",{class:"token attr-name"},"separate"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("至"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("vi-time-select")]),a("span",{class:"token punctuation"},">")]),s(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),Q=a("h2",{id:"props",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#props","aria-hidden":"true"},"#"),s(" Props")],-1),R=a("h3",{id:"select",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#select","aria-hidden":"true"},"#"),s(" select")],-1),W=k('<h2 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h2><p>无插槽</p><h2 id="事件支持" tabindex="-1"><a class="header-anchor" href="#事件支持" aria-hidden="true">#</a> 事件支持</h2><p>无特殊事件</p><h2 id="可覆写css变量" tabindex="-1"><a class="header-anchor" href="#可覆写css变量" aria-hidden="true">#</a> 可覆写css变量</h2>',5),X={__name:"index.html",setup(Y){const t=_({}),r=[["modelValue","必传，时间选择器选择值","看上文","-"],["type","选择器样式","default | plain | button","default"],["chooseType","选择样式","default | plain","default"],["size","选择器大小","big | middle | small","middle"],["unit","时间选择最小单位","hour | minute | second","minute"],["range","是否开启范围选择","boolean","false"],["separate","范围间隔符","string","-"],["format","显示时间格式","string","hh:mm:ss"],["disabled","原生属性，是否禁用","boolean","false"],["placeholder","原生属性，time-select暂时无法显示placeholder，后续版本更改","-","-"],["name","input原生属性name，暂无","string","-"]],d=[["--vi-time-select-width","选择器宽度","200px"],["--vi-time-select-height","选择器高度","2.2em"],["--vi-time-select-padding","选择器padding","--vi-card-padding"],["--vi-time-select-list-gap","选择器与选择框间隔","4px"],["--vi-time-select-list-width","选择框宽度","auto"],["--vi-time-select-list-height","选择框高度","-"],["--vi-time-select-list-max-height","选择框最大高度","-"]];return(Z,e)=>{const m=i("Badge"),c=i("vi-time-select"),u=i("row"),p=i("code-show"),v=i("vi-divider"),g=i("my-table"),b=i("my-table-c");return y(),V("div",null,[a("h1",f,[q,s(" 时间选择器 time-select "),n(m,{type:"warning",text:"待优化",vertical:"middle"})]),x,n(p,null,{code:o(()=>[j]),default:o(()=>[n(u,null,{default:o(()=>[n(c,{modelValue:t,"onUpdate:modelValue":e[0]||(e[0]=l=>t=l),class:"my-select-v"},null,8,["modelValue"])]),_:1})]),_:1}),U,w,n(p,null,{code:o(()=>[z]),default:o(()=>[n(u,null,{default:o(()=>[n(c,{modelValue:t,"onUpdate:modelValue":e[1]||(e[1]=l=>t=l),class:"my-select-v"},null,8,["modelValue"]),n(c,{type:"button",modelValue:t,"onUpdate:modelValue":e[2]||(e[2]=l=>t=l),class:"my-select-v"},null,8,["modelValue"])]),_:1})]),_:1}),B,N,n(p,null,{code:o(()=>[C]),default:o(()=>[n(u,null,{default:o(()=>[n(c,{size:"big",modelValue:t,"onUpdate:modelValue":e[3]||(e[3]=l=>t=l),class:"my-select-v"},null,8,["modelValue"]),n(c,{modelValue:t,"onUpdate:modelValue":e[4]||(e[4]=l=>t=l),class:"my-select-v"},null,8,["modelValue"]),n(c,{size:"small",modelValue:t,"onUpdate:modelValue":e[5]||(e[5]=l=>t=l),class:"my-select-v"},null,8,["modelValue"]),n(v),n(c,{size:"big",type:"button",modelValue:t,"onUpdate:modelValue":e[6]||(e[6]=l=>t=l),class:"my-select-v"},null,8,["modelValue"]),n(c,{type:"button",modelValue:t,"onUpdate:modelValue":e[7]||(e[7]=l=>t=l),class:"my-select-v"},null,8,["modelValue"]),n(c,{size:"small",type:"button",modelValue:t,"onUpdate:modelValue":e[8]||(e[8]=l=>t=l),class:"my-select-v"},null,8,["modelValue"])]),_:1})]),_:1}),S,T,n(p,null,{code:o(()=>[E]),default:o(()=>[n(u,null,{default:o(()=>[n(c,{disabled:"",modelValue:t,"onUpdate:modelValue":e[9]||(e[9]=l=>t=l),class:"my-select-v"},null,8,["modelValue"]),n(c,{disabled:"",type:"button",modelValue:t,"onUpdate:modelValue":e[10]||(e[10]=l=>t=l),class:"my-select-v"},null,8,["modelValue"])]),_:1})]),_:1}),H,M,P,n(p,null,{code:o(()=>[A]),default:o(()=>[n(u,null,{default:o(()=>[n(c,{format:"hh时mm分ss秒",modelValue:t,"onUpdate:modelValue":e[11]||(e[11]=l=>t=l),class:"my-select-v"},null,8,["modelValue"])]),_:1})]),_:1}),D,F,G,n(p,null,{code:o(()=>[I]),default:o(()=>[n(u,null,{default:o(()=>[n(c,{modelValue:t,"onUpdate:modelValue":e[12]||(e[12]=l=>t=l),class:"my-select-v",unit:"hour",format:"hh 时"},null,8,["modelValue"]),n(c,{modelValue:t,"onUpdate:modelValue":e[13]||(e[13]=l=>t=l),class:"my-select-v",unit:"minute"},null,8,["modelValue"]),n(c,{modelValue:t,"onUpdate:modelValue":e[14]||(e[14]=l=>t=l),class:"my-select-v"},null,8,["modelValue"])]),_:1})]),_:1}),J,n(p,null,{code:o(()=>[K]),default:o(()=>[n(u,null,{default:o(()=>[n(c,{modelValue:t,"onUpdate:modelValue":e[15]||(e[15]=l=>t=l),class:"my-select-v",range:""},null,8,["modelValue"])]),_:1})]),_:1}),L,n(p,null,{code:o(()=>[O]),default:o(()=>[n(u,null,{default:o(()=>[n(c,{modelValue:t,"onUpdate:modelValue":e[16]||(e[16]=l=>t=l),class:"my-select-v",range:"",separate:"至"},null,8,["modelValue"])]),_:1})]),_:1}),Q,R,n(g,{datas:r}),W,n(b,{datas:d})])}}},aa=h(X,[["__file","index.html.vue"]]);export{aa as default};
