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
- 增加--vi-dialog-width等一系列css变量，支持复写变量值灵活修改dialog样式

# 0.2.5（当前迭代开发版本）

- 新增--vi-font-size,--vi-small-font-size,--vi-big-font-size css变量灵活定义项目大中小字体，建议在:root中修改变量值，也支持修改单个font-size
- 重构vi-input组件实现，支持前后缀添加
- 调整vi-input组件样式调控，支持修改总width、height，padding等租件内部属性

# 0.3.0

- 新增toast组件，支持全局响应