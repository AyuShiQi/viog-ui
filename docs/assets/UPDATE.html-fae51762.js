import{_ as i,o as l,c as e,d as a}from"./app-7cad44e7.js";const t={},r=a('<h1 id="_0-6-11" tabindex="-1"><a class="header-anchor" href="#_0-6-11" aria-hidden="true">#</a> 0.6.11</h1><ul><li>修改virtual-scroll组件bar颜色</li><li>修复dropdown组件在更换时找不到children的情况（这个注意了）</li><li>修复collapse组件title span表现</li></ul><h1 id="_0-6-10" tabindex="-1"><a class="header-anchor" href="#_0-6-10" aria-hidden="true">#</a> 0.6.10</h1><ul><li>修复select组多选情况下不显示别名的情况</li><li>修复input组件color为purple情况下的样式问题</li><li>修复checkbox组件button样式mutate属性失效的问题</li><li>修改time-select组件在移动端下滑动速度（降低）</li><li>修复date-select组件被ul离家出走问题</li><li>修复breadcrumb组件replace属性</li><li>修复collapse组件auto-retract不自动收回的情况</li><li>新增collapse组件type属性button</li><li>修复menu组件router状态下当前路由匹配</li><li>修改menu起始绑定id为0</li><li>修改bubble组件暗色系字体颜色</li><li>修复bubble组件trigger属性click</li><li>更改dialog组件sureTitle与unsureTitle属性为插槽（保留），允许绑定组件确认取消框</li><li>更改dialog组件background、color等修改方式有props变为css（也可以通过props更改，增加更改方式）</li><li>处理组件z-index关系</li><li>修复drawer非teleport情况下height的问题</li><li>新增message修改top与right的css变量</li><li>修复table-editor可编辑表格操作list ul离家出走问题</li><li>修复table-editor删除列页头不变的情况</li><li>修复checkbox在生产环境下出现报错的问题</li><li>修改scroll组件bar颜色</li></ul><h1 id="_0-6-9" tabindex="-1"><a class="header-anchor" href="#_0-6-9" aria-hidden="true">#</a> 0.6.9</h1><ul><li>修复select-v</li><li>新增select、select-v组件multi属性</li><li>修复time-select组件ul离家出走问题</li><li>修复tag组件嵌套情况下混用样式问题</li><li>修改time-select组件hover颜色</li><li>修改select组组件disabled样式</li><li>删除time-select组件filter属性</li><li>删除time-select、date-select、select-v组件dark属性</li><li>新增select-v组件name属性</li><li>新增select-v组件once属性</li><li>增加调色盘颜色bg-base</li><li>新增time-select、date-select组件range属性</li><li>新增time-select、date-select组件separate属性</li><li>新增time-scroll组件移动端滑动处理功能</li><li>新增dropdown组件disabled属性</li><li>更改select、time-select组件等background-color颜色</li><li>select-v组件更名为virtual-select*</li></ul><h1 id="_0-6-8" tabindex="-1"><a class="header-anchor" href="#_0-6-8" aria-hidden="true">#</a> 0.6.8</h1><ul><li>修复upload组件在显示文件文件大小时布局异常的问题</li><li>修复input组件option-home内容中的gap表现</li><li>修复input组件颜色显示不正常问题</li><li>更改dropdown组件top变量为gap</li><li>修改select、input组件hover颜色</li><li>处理selected类型别名的显示</li><li>删除select、radio、checkbox组件dark属性</li><li>新增input组件suffix与prefix的width css变量</li><li>新增select组件name属性</li><li>新增radio组件mutate属性</li><li>新增radio、checkbox组件checked属性</li><li>新增radio-group、checkbox-group组件name属性</li><li>新增option组件disabled属性</li><li>完善select组件部分search功能</li></ul><h1 id="_0-6-6-0-6-7" tabindex="-1"><a class="header-anchor" href="#_0-6-6-0-6-7" aria-hidden="true">#</a> 0.6.6-0.6.7</h1><ul><li>修复upload组件icon消失的问题（应该解决了，无语没解决啊）（这下真的解决了）</li><li>修复input多个input框无法绑定成功一个响应式变量的情况</li><li>修复input number情况看得见输入的情况</li><li>修复input前后缀问题，select在input中表现不正常（原因，dropdown-content透明层遮挡）</li><li>删除input框通过props添加前后缀</li><li>删除input组件dark属性</li><li>增加upload组件list-width调控变量</li></ul><h1 id="_0-6-2-0-6-5" tabindex="-1"><a class="header-anchor" href="#_0-6-2-0-6-5" aria-hidden="true">#</a> 0.6.2-0.6.5</h1><ul><li>修复组件内部removeListener问题</li><li>修复link组件出现hover出现下划线的情况，添加target属性</li></ul><h1 id="_0-6-1" tabindex="-1"><a class="header-anchor" href="#_0-6-1" aria-hidden="true">#</a> 0.6.1</h1><ul><li>修复button组件disabled状况下的样式覆盖不完全情况</li><li>修复collapse组件突出物scroll不适配问题</li><li>修改button className表现，修改button禁用色</li><li>修改icon组件自定义font-size不匹配问题问题</li><li>修改disabled属性组件配色</li><li>新增主要颜色css变量，调整purple3颜色</li><li>新增layout组件gap属性</li></ul><h1 id="_0-6-0" tabindex="-1"><a class="header-anchor" href="#_0-6-0" aria-hidden="true">#</a> 0.6.0</h1><ul><li>新增面包屑组件</li><li>新增文件上传组件（当前无drag功能）</li><li>新增可编辑表格组件</li></ul><h1 id="_0-5-3" tabindex="-1"><a class="header-anchor" href="#_0-5-3" aria-hidden="true">#</a> 0.5.3</h1><ul><li>新增input框远程搜索功能，添加search属性用于搜索控制</li><li>新增select框远程搜索功能，添加search属性用于搜索控制</li><li>修复input框default样式padding</li><li>修改virtual-scroll组件样式调控变量名</li></ul><h1 id="_0-5-2" tabindex="-1"><a class="header-anchor" href="#_0-5-2" aria-hidden="true">#</a> 0.5.2</h1><ul><li>修复nav组件hover模式下，line默认出现不正确问题</li><li>增添menu组件默认跳转路由与路由获取并选中显示功能</li><li>修复input组件button情况下，clear、password按钮无法看见颜色的情况</li><li>修复tag组件无法正常显示插槽内容的情况</li><li>修复skeleton animate条件动画展示问题</li><li>新增tag组件max、mutate属性</li><li>新增drawer组件teleport属性，默认开启，开启后组件自动固定于body中</li></ul><h1 id="_0-5-1" tabindex="-1"><a class="header-anchor" href="#_0-5-1" aria-hidden="true">#</a> 0.5.1</h1><ul><li>新增nav组件组nav-item组件及nav-item-group组件</li><li>新增nav组件触发模式trigger属性</li><li>新增dropdown组件触发模式trigger属性</li><li>新增h1~h6样式</li><li>新增header组件flex相关属性便于布局</li><li>修改nav组件内部使用v-model更换选择的方式，选择采用事件触发模式</li><li>新增menu组件router模式</li></ul><h1 id="_0-5-0" tabindex="-1"><a class="header-anchor" href="#_0-5-0" aria-hidden="true">#</a> 0.5.0</h1><ul><li>新增affix固钉组件</li><li>新增空卡片组件 （这个bug还没有测）</li><li>新增折叠框组件组</li><li>新增Menu组件组 (未做router处理)</li><li>新增分割线组件</li><li>新增骨架框组件</li><li>新增头像组件</li><li>新增气泡框组件</li></ul><h1 id="_0-4-4" tabindex="-1"><a class="header-anchor" href="#_0-4-4" aria-hidden="true">#</a> 0.4.4</h1><ul><li>select-n组件更名为select、旧select组件更名为select-v</li><li>更换time-select组件、date-select组件底层为dropdown组件</li></ul><h1 id="_0-4-3" tabindex="-1"><a class="header-anchor" href="#_0-4-3" aria-hidden="true">#</a> 0.4.3</h1><ul><li>新增nav组件竖版模式，使用direction属性控制方向</li><li>新增header组件收缩效果，使用retract属性控制是否使用</li><li>新增select-n组件组option-group组件、保留option-title组件但不建议使用</li><li>修改openState hooks表现</li><li>更换openState内部ref DOM名称</li><li>更换boxPositionState内部ref DOM名称</li></ul><h1 id="_0-4-2" tabindex="-1"><a class="header-anchor" href="#_0-4-2" aria-hidden="true">#</a> 0.4.2</h1><ul><li>全部less属性变量移植为css变量，并满足用户自定义需求</li><li>修复input组件在number属性开启情况下的历史输入丢失与闪屏问题</li><li>完善input value判别逻辑</li><li>修复select组件ts问题</li><li>增添option组件显示选项描述信息功能</li><li>增添option组件selected属性</li><li>新增option-title组件，用于分类展示option内容</li><li>新增select-n组件once属性，设置为true后，用户进行选择后立即关闭选择框</li></ul><h1 id="_0-4-1" tabindex="-1"><a class="header-anchor" href="#_0-4-1" aria-hidden="true">#</a> 0.4.1</h1><ul><li>修复无法获取ViToast、ViMessage全局组件等情况</li></ul><h1 id="_0-4-0" tabindex="-1"><a class="header-anchor" href="#_0-4-0" aria-hidden="true">#</a> 0.4.0</h1><ul><li>新增tag组件</li><li>新增dropdown组件，对弹出框做视口判断，避免遮挡情况发生</li><li>新增select-normal组件及option组件</li><li>新增drawer组件</li><li>新增header组件</li><li>新增nav组件</li></ul><h1 id="_0-3-2" tabindex="-1"><a class="header-anchor" href="#_0-3-2" aria-hidden="true">#</a> 0.3.2</h1><ul><li>修改button plain部分样式展示</li><li>新增淡入淡出vue3动画模块css</li><li>使用新的install方法对组件进行注册</li><li>添加scroll组件max-height css变量</li><li>修复icon组件字体无法正确加载的情况</li></ul><h1 id="_0-3-1" tabindex="-1"><a class="header-anchor" href="#_0-3-1" aria-hidden="true">#</a> 0.3.1</h1><ul><li>新增link组件</li><li>修复select组件自适应最长属性，预防抖动</li></ul><h1 id="_0-3-0" tabindex="-1"><a class="header-anchor" href="#_0-3-0" aria-hidden="true">#</a> 0.3.0</h1><ul><li>重构组件库配色系统</li><li>新增toast组件，支持全局响应</li><li>新增message组件，支持全局响应</li><li>解耦合input组件输入框，新增默认头尾部输入功能，新增前后缀slot</li></ul><h1 id="_0-2-5" tabindex="-1"><a class="header-anchor" href="#_0-2-5" aria-hidden="true">#</a> 0.2.5</h1><ul><li>新增--vi-font-size,--vi-small-font-size,--vi-big-font-size css变量灵活定义项目大中小字体，建议在:root中修改变量值，也支持修改单个font-size</li><li>调整vi-select组件样式调控，支持修改width、height，等组件内部属性</li><li>调整vi-input组件样式调控，支持修改width、height，padding组件内部属性</li><li>重构vi-input组件实现，支持前后缀添加</li><li>修复select样式判别</li><li>重构button样式组</li><li>新增button组件size属性，弃用small属性</li><li>新增input组件type样式</li><li>重构radio，checkbox样式组，新增mutate属性</li><li>date-select time-select 组件样式重构</li></ul><h1 id="_0-2-4" tabindex="-1"><a class="header-anchor" href="#_0-2-4" aria-hidden="true">#</a> 0.2.4</h1><ul><li><p>修复dateSelect time组件对于mousewheel事件阻止的优化</p></li><li><p>删除scroll及virtual-scroll组件width、heigth、maxHeight props，删除style操作样式方法</p></li><li><p>css重写--vi-scroll-width、--vi-scroll-height、--vi-scroll-max-height变量值修改scroll组件样式</p></li><li><p>css重写--vi-virtual-scroll-width、--vi--virtual-scroll-height、--vi-virtual-scroll-max-height变量值修改virtual-scroll组件样式</p></li><li><p>修复virtual-scroll组件max-height样式判别，调整虚拟滚动算法逻辑（暂未支持修改datas数据）</p></li><li><p>修复virtual-scroll组件对于传入的datas的修改与破坏, 对数据进行进一步的封装隔离</p></li><li><p>支持virtual-scroll组件传入非对象数组，支持基本类型数组渲染</p></li><li><p>删除virtual-scroll组件itemHeight属性，内部自动计算itemHeight</p></li><li><p>调整select组件为虚拟滚动列表</p></li><li><p>删除组件width等操控style样式的属性，提供更好的css样式修改环境</p></li><li><p>增加--vi-dialog-width等一系列css变量，支持复写变量值灵活修改dialog样式</p></li></ul><h1 id="_0-2-3" tabindex="-1"><a class="header-anchor" href="#_0-2-3" aria-hidden="true">#</a> 0.2.3</h1><ul><li>修复scroll组件组maxHeight等判别问题，向表单组件暴露属性修复样式不适配问题</li></ul>',46),s=[r];function d(h,c){return l(),e("div",null,s)}const n=i(t,[["render",d],["__file","UPDATE.html.vue"]]);export{n as default};
