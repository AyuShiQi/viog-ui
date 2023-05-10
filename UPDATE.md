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

# 0.4.3（当前迭代开发版本）

- 新增nav组件竖版模式，使用direction属性控制方向
- 新增header组件收缩效果，使用retract属性控制是否使用
- 新增select组件组option-group组件、删除option-title组件 （未做）
- 修改openState hooks表现

# 0.5.0

- 新增affix固钉组件
- 新增空卡片组件 （这个bug还没有测）
- 新增折叠框组件组 （明日事）
- 新增Menu组件组（明日事）
- 新增骨架框组件 （未做）
- 新增头像组件 （未做）
- 新增气泡框组件 （未做）

# 0.5.1

- 新增nav组件组nav-item组件及nav-item-group组件

# 0.6.0

- 新增page-controller分页器组件
- 新增文件上传组件
- 新增表格组件
- 新增可编辑表格组件

# 0.7.0

- 新增list组件
- 新增tab组件
- 新增多级选择器

# 0.8.0

- 调整虚拟滚动识别，支持不等高子元素的判别
- 支持select组件系列 search处理、远程搜索、分类选择、多级选择, composition事件处理输入优化等功能
- 添加form组件的rule检查
- 添加form表单的正则以及代码规范

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

- 新增面包屑组件

- 新增富文本编辑器组件

