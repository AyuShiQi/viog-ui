# 后续

- 增添tag等组件的router模式to属性
- 优化scroll组件scroll-bar展示
- 新增list组件
- 新增滑块slider组件
- 优化color-select组件颜色精确控制

# 0.20.0

- 标签管理器组件

# 0.19.1

- 添加link组件disabled属性

# 0.19.0

- 新增富文本编辑器组件

# 0.18.0

- 新增评论卡片组件

# 0.17.0

- 增添loading组件全局响应模式
- 新增progress组件
- 新增information组件，支持全局响应

# 0.16.1

- 调整虚拟滚动识别，支持不等高子元素的判别
- 支持select组件系列 search处理、多级选择

# 0.16.0

- 新增多级选择器
- 新增page-controller分页器组件
- 新增tab组件

# 0.15.4

- 新增可编辑表格组件撤回功能（增加撤销栈）
- 新增可编辑表格组件快捷键操作功能（兼容难）
- 新增upload组件照片墙功能

# 0.13.0

- 新增点赞组件
- 新增数字输入框组件

# 0.12.0

- 新增flex组件
- 新增rate组件组

# 0.11.7（当前迭代开发版本）

# 0.11.6

- 修复上一版错误打包

# 0.11.5

- 新增可编辑表格自定义拖拉表格长宽功能

# 0.11.4

- 新增color-select组件form表单系列匹配功能
- 新增color-select组件name属性

# 0.11.3

- 修改tabbar组件z-index

# 0.11.2

- 修复color-select组件十六进制计算错误问题
- 新增color-select组件透明取色

# 0.11.1

- 新增color-select组件移动端适配
- 新增color-select组件初始化颜色
- 优化collapse组件高度控制适配

# 0.11.0

- 新增选色器color-select组件

# 0.10.10

- 优化input组件number属性开启情况下数据层体验

# 0.10.9

- 修复table-editor组件data操作bug
- 修复select组件别名首次显示不成功的问题
- 优化input组件modelValue传入数据类型报错问题
- 修复input组件number属性开启后的报错问题

# 0.10.8

- 优化表格编辑器组件数组动态表现形式
- 优化table-editor组件使用时数组存在undefined的问题

# 0.10.7

- 修复scroll组件在移动端下无法滑动的情况

# 0.10.6

- 修复verify-slider组件在移动端无法滑动的情况

# 0.10.5

- 新增upload组件头像加载功能!!!!!!

# 0.10.1-0.10.4

- 优化menu组件与tabbar组件路由匹配体验

# 0.10.0

- 新增tabbar组件

# 0.9.1

- 优化steps组件组样式表现
- 优化results组件大小兼容

# 0.9.0

- 新增result组件
- 新增steps组件
- 优化verify-slider组件样式，新增控制slider滑动后颜色css变量

# 0.8.3

- 新增verify-slider组件与表单绑定功能

# 0.8.2

- 新增verify-slider组件重置验证功能

# 0.8.1

- 修复错误打包

# 0.8.0

- 新增人机验证滑块verify-slider组件

# 0.7.13

- 新增loading组件类型round
- 优化loading组件尺寸控制，新增css控制变量

# 0.7.12

- 优化form组件反馈检测体验

# 0.7.11

- form组件提供反馈信息函数

# 0.7.10

- 新增form组件submit事件反馈信息功能
- 新增form-item组件trunc属性，支持表单匹配截断功能
- 新增form-item组件immediate属性，支持立即匹配功能

# 0.7.9

- 改善form组件label布局体验

# 0.7.8

- 修复table组件样式丢失的问题

# 0.7.7

- 新增form-item组件--vi-form-item-width变量
- 修改form-item组件updown样式
- 修改table组件td由height操控变为由padding操控
- 修复switch slot消失不见的情况

# 0.7.6

- 修复scroll在resize情况下长宽没有正确变换的情况
- 修复form组件type属性

# 0.7.5

- 修复table组件类型检测错误
- 更改scroll组件overlay滚动条z-index
- 修复table-editor滚动条消失的情况
- 修复scroll组件scroll

# 0.7.4

- 新增form组件控制width css变量
- 调整form组件样式
- 修复form组件rule规则下对象类型不适配函数匹配的问题

# 0.7.2-0.7.3

- 删除form组件开发遗留测试代码

# 0.7.1

- 修改scroll组件，overlay状态下hidden表现*
- 新增virtual-scroll组件hidden属性*
- 修复virtual组件overlay属性*
- 修复date-select组件下对vs的正确使用、年选择大小 *

# 0.7.0

- 新增table组件
- 新增chexkbox、radio组件hidden属性
- 新增checkbox组件value确认组
- 优化table-editor组件固定头部展示效果
- 新增scroll组件overlay属性
- 优化虚拟滚动，支持动态改变参数，调整样式传入方式

# 0.6.12

- 完善form组件功能*
- 添加form组件的rule检查*
- 新增上传组件可拖拽drag类型*
- layout组件删除width及height等属性*
- 增加grid组件行列布局计算属性*
- 删除所有表单组件dark属性*
- 优化dropdown自动计算方位逻辑功能实现算法*
- 修复dialog通过变量无法修改的问题*
- 修复nodejs环境无法获取navigator变量的错误*
- 修复checkbox组件生产环境下报错*
- 修复drawer组件在不同高度时handler匹配大小不统一的问题*

# 0.6.11

- 修改virtual-scroll组件bar颜色
- 修复dropdown组件在更换时找不到children的情况（原因：rEL绑定错误）
- 修复collapse组件，title span绑定flex：1

# 0.6.10

- 修复select组多选情况下不显示别名的情况*
- 修复input组件color为purple情况下的样式问题*
- 修复checkbox组件button样式mutate属性失效的问题*
- 修改time-select组件在移动端下滑动速度（降低）
- 修复date-select组件被ul离家出走问题*
- 修复breadcrumb组件replace属性*
- 修复collapse组件auto-retract不自动收回的情况*
- 新增collapse组件type属性button*
- 修复menu组件router状态下当前路由匹配*
- 修改menu起始绑定id为0*
- 修改bubble组件暗色系字体颜色*
- 修复bubble组件trigger属性click*
- 更改dialog组件sureTitle与unsureTitle属性为插槽（保留），允许绑定组件确认取消框*
- 更改dialog组件background、color等修改方式有props变为css（也可以通过props更改，增加更改方式）*
- 处理组件z-index关系(select10、dialog50、input、drawer22, message\toast24,header20, affix40等等)（那个docs里nav10和header20）*
- 修复drawer非teleport情况下height的问题*
- 新增message修改top与right的css变量*
- 修复table-editor可编辑表格操作list ul离家出走问题*
- 修复table-editor删除列页头不变的情况*
- 修复checkbox在生产环境下出现报错的问题（暂时修复，待定）*
- 修改scroll组件bar颜色*

# 0.6.9

- 修复select-v
- 新增select、select-v组件multi属性
- 修复time-select组件ul离家出走问题
- 修复tag组件嵌套情况下混用样式问题
- 修改time-select组件hover颜色
- 修改select组组件disabled样式
- 删除time-select组件filter属性
- 删除time-select、date-select、select-v组件dark属性
- 新增select-v组件name属性
- 新增select-v组件once属性
- 增加调色盘颜色bg-base
- 新增time-select、date-select组件range属性
- 新增time-select、date-select组件separate属性
- 新增time-scroll组件移动端滑动处理功能
- 新增dropdown组件disabled属性
- 更改select、time-select组件等background-color颜色
- select-v组件更名为virtual-select

# 0.6.8

- 修复upload组件在显示文件文件大小时布局异常的问题
- 修复input组件option-home内容中的gap表现
- 修复input组件颜色显示不正常问题
- 更改dropdown组件top变量为gap
- 修改select、input组件hover颜色
- 处理selected类型别名的显示
- 删除select、radio、checkbox组件dark属性
- 新增input组件suffix与prefix的width css变量
- 新增select组件name属性
- 新增radio组件mutate属性
- 新增radio、checkbox组件checked属性
- 新增radio-group、checkbox-group组件name属性
- 新增option组件disabled属性
- 完善select组件部分search功能

# 0.6.6-0.6.7

- 修复upload组件icon消失的问题（应该解决了，无语没解决啊）（这下真的解决了）
- 修复input多个input框无法绑定成功一个响应式变量的情况
- 修复input number情况看得见输入的情况
- 修复input前后缀问题，select在input中表现不正常（原因，dropdown-content透明层遮挡）
- 删除input框通过props添加前后缀
- 删除input组件dark属性
- 增加upload组件list-width调控变量

# 0.6.2-0.6.5

- 修复组件内部removeListener问题
- 修复link组件出现hover出现下划线的情况，添加target属性

# 0.6.1

- 修复button组件disabled状况下的样式覆盖不完全情况
- 修复collapse组件突出物scroll不适配问题
- 修改button className表现，修改button禁用色
- 修改icon组件自定义font-size不匹配问题问题
- 修改disabled属性组件配色
- 新增主要颜色css变量，调整purple3颜色
- 新增layout组件gap属性

# 0.6.0

- 新增面包屑组件
- 新增文件上传组件（当前无drag功能）
- 新增可编辑表格组件

# 0.5.3

- 新增input框远程搜索功能，添加search属性用于搜索控制
- 新增select框远程搜索功能，添加search属性用于搜索控制
- 修复input框default样式padding
- 修改virtual-scroll组件样式调控变量名

# 0.5.2

- 修复nav组件hover模式下，line默认出现不正确问题
- 增添menu组件默认跳转路由与路由获取并选中显示功能
- 修复input组件button情况下，clear、password按钮无法看见颜色的情况
- 修复tag组件无法正常显示插槽内容的情况
- 修复skeleton animate条件动画展示问题
- 新增tag组件max、mutate属性
- 新增drawer组件teleport属性，默认开启，开启后组件自动固定于body中

# 0.5.1

- 新增nav组件组nav-item组件及nav-item-group组件
- 新增nav组件触发模式trigger属性
- 新增dropdown组件触发模式trigger属性
- 新增h1~h6样式
- 新增header组件flex相关属性便于布局
- 修改nav组件内部使用v-model更换选择的方式，选择采用事件触发模式
- 新增menu组件router模式

# 0.5.0

- 新增affix固钉组件
- 新增空卡片组件 （这个bug还没有测）
- 新增折叠框组件组
- 新增Menu组件组 (未做router处理)
- 新增分割线组件
- 新增骨架框组件
- 新增头像组件
- 新增气泡框组件

# 0.4.4

- select-n组件更名为select、旧select组件更名为select-v
- 更换time-select组件、date-select组件底层为dropdown组件

# 0.4.3

- 新增nav组件竖版模式，使用direction属性控制方向
- 新增header组件收缩效果，使用retract属性控制是否使用
- 新增select-n组件组option-group组件、保留option-title组件但不建议使用
- 修改openState hooks表现
- 更换openState内部ref DOM名称
- 更换boxPositionState内部ref DOM名称

# 0.4.2

- 全部less属性变量移植为css变量，并满足用户自定义需求
- 修复input组件在number属性开启情况下的历史输入丢失与闪屏问题
- 完善input value判别逻辑
- 修复select组件ts问题
- 增添option组件显示选项描述信息功能
- 增添option组件selected属性
- 新增option-title组件，用于分类展示option内容
- 新增select-n组件once属性，设置为true后，用户进行选择后立即关闭选择框

# 0.4.1

- 修复无法获取ViToast、ViMessage全局组件等情况

# 0.4.0

- 新增tag组件
- 新增dropdown组件，对弹出框做视口判断，避免遮挡情况发生
- 新增select-normal组件及option组件
- 新增drawer组件
- 新增header组件
- 新增nav组件

# 0.3.2

- 修改button plain部分样式展示
- 新增淡入淡出vue3动画模块css
- 使用新的install方法对组件进行注册
- 添加scroll组件max-height css变量
- 修复icon组件字体无法正确加载的情况

# 0.3.1

- 新增link组件
- 修复select组件自适应最长属性，预防抖动

# 0.3.0

- 重构组件库配色系统
- 新增toast组件，支持全局响应
- 新增message组件，支持全局响应
- 解耦合input组件输入框，新增默认头尾部输入功能，新增前后缀slot

# 0.2.5

- 新增--vi-font-size,--vi-small-font-size,--vi-big-font-size css变量灵活定义项目大中小字体，建议在:root中修改变量值，也支持修改单个font-size
- 调整vi-select组件样式调控，支持修改width、height，等组件内部属性
- 调整vi-input组件样式调控，支持修改width、height，padding组件内部属性
- 重构vi-input组件实现，支持前后缀添加
- 修复select样式判别
- 重构button样式组
- 新增button组件size属性，弃用small属性
- 新增input组件type样式
- 重构radio，checkbox样式组，新增mutate属性
- date-select time-select 组件样式重构

# 0.2.4

- 修复dateSelect time组件对于mousewheel事件阻止的优化

- 删除scroll及virtual-scroll组件width、heigth、maxHeight  props，删除style操作样式方法
- css重写--vi-scroll-width、--vi-scroll-height、--vi-scroll-max-height变量值修改scroll组件样式
- css重写--vi-virtual-scroll-width、--vi--virtual-scroll-height、--vi-virtual-scroll-max-height变量值修改virtual-scroll组件样式
- 修复virtual-scroll组件max-height样式判别，调整虚拟滚动算法逻辑（暂未支持修改datas数据）
- 修复virtual-scroll组件对于传入的datas的修改与破坏, 对数据进行进一步的封装隔离
- 支持virtual-scroll组件传入非对象数组，支持基本类型数组渲染
- 删除virtual-scroll组件itemHeight属性，内部自动计算itemHeight
- 调整select组件为虚拟滚动列表
- 删除组件width等操控style样式的属性，提供更好的css样式修改环境
- 增加--vi-dialog-width等一系列css变量，支持复写变量值灵活修改dialog样式

# 0.2.3

- 修复scroll组件组maxHeight等判别问题，向表单组件暴露属性修复样式不适配问题 
