# 0.2.3

- 修复scroll组件组maxHeight等判别问题，向表单组件暴露属性修复样式不适配问题 

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

# 0.3.0

- 重构组件库配色系统
- 新增toast组件，支持全局响应
- 新增message组件，支持全局响应
- input框解耦合，新增默认头尾部输入功能，新增前后缀slot

# 0.3.1

- 新增link组件
- 修复select组件自适应最长属性，预防抖动

# 0.3.2

- 修改button plain部分样式展示
- 新增淡入淡出vue3动画模块css
- 使用新的install方法对组件进行注册
- 添加scroll组件max-height css变量
- 修复icon组件字体无法正确加载的情况

# 0.4.0

- 新增tag组件
- 新增dropdown组件，对弹出框做视口判断，避免遮挡情况发生
- 新增select-normal组件及option组件
- 新增drawer组件
- 新增header组件
- 新增nav组件

# 0.4.1

- 修复无法获取ViToast、ViMessage全局组件等情况

# 0.4.2

- less属性变量全部移植为css变量，并满足用户自定义需求
- 修复input组件在number属性开启情况下的历史输入丢失与闪屏问题
- 完善input value判别逻辑
- 修复select组件ts问题
- 增添option组件显示选项描述信息功能
- 增添option组件selected属性
- 新增option-title组件，用于分类展示option内容
- 新增select-n组件once属性，设置为true后，用户进行选择后立即关闭选择框

# 0.4.3

- 新增nav组件竖版模式，使用direction属性控制方向
- 新增header组件收缩效果，使用retract属性控制是否使用
- 新增select-n组件组option-group组件、保留option-title组件但不建议使用
- 修改openState hooks表现
- 更换openState内部ref DOM名称
- 更换boxPositionState内部ref DOM名称

# 0.4.4

- select-n组件更名为select、旧select组件更名为select-v
- 更换time-select组件、date-select组件底层为dropdown组件

# 0.5.0

- 新增affix固钉组件
- 新增空卡片组件 （这个bug还没有测）
- 新增折叠框组件组
- 新增Menu组件组 (未做router处理)
- 新增分割线组件
- 新增骨架框组件
- 新增头像组件
- 新增气泡框组件

# 0.5.1

- 新增nav组件组nav-item组件及nav-item-group组件
- 新增nav组件触发模式trigger属性
- 新增dropdown组件触发模式trigger属性
- 新增h1~h6样式
- 新增header组件flex相关属性便于布局
- 修改nav组件内部使用v-model更换选择的方式，选择采用事件触发模式
- 新增menu组件router模式

# 0.5.2

- 修复nav组件hover模式下，line默认出现不正确问题
- 增添menu组件默认跳转路由与路由获取并选中显示功能
- 修复input组件button情况下，clear、password按钮无法看见颜色的情况
- 修复tag组件无法正常显示插槽内容的情况
- 修复skeleton animate条件动画展示问题
- 新增tag组件max、mutate属性
- 新增drawer组件teleport属性，默认开启，开启后组件自动固定于body中

# 0.5.3

- 新增input框远程搜索功能，添加search属性用于搜索控制
- 新增select框远程搜索功能，添加search属性用于搜索控制
- 修复input框default样式padding
- 修改virtual-scroll组件样式调控变量名

# 0.6.0

- 新增面包屑组件
- 新增文件上传组件（当前无drag功能）
- 新增可编辑表格组件

# 0.6.1

- 修复button组件disabled状况下的样式覆盖不完全情况
- 新增layout组件gap属性
- 修改button className表现，修改button禁用色
- 修复collapse组件突出物scroll不适配问题
- 修改icon、font-size不匹配问题问题
- 添加主要颜色css变量，调整purple3颜色
- 修改disabled组件配色

# 0.6.2（当前迭代开发版本）

- 添加form组件的rule检查
- 添加form表单的正则以及代码规范
- 修复link组件出现hover出现下划线的情况，添加target属性
- layout组件删除width及height等属性
- 增加grid组件行列布局计算属性

# 0.6.3

- 新增上传组件可拖拽drag类型
- 新增可编辑表格组件撤回功能（增加撤销栈）
- 新增可编辑表格组件快捷键操作功能
- 新增可编辑表格自定义拖拉表格长宽功能

# 0.7.0

- 新增list组件
- 新增tab组件
- 新增表格组件
- 新增多级选择器
- 新增page-controller分页器组件

# 0.8.0

- 调整虚拟滚动识别，支持不等高子元素的判别
- 支持select组件系列 search处理、多级选择

# 0.9.0

- 增添loading组件全局响应模式
- 新增progress组件
- 新增information组件，支持全局响应

# 0.10.0

- 新增点赞组件
- 新增评分组件
- 新增评论卡片组件
- 新增数字输入框组件

# 0.11.0

- 新增富文本编辑器组件

# 0.11.1

- 添加link组件disabled属性

#  后续

- 标签管理器组件
- 
