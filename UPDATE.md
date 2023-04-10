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
- 调整vi-select组件样式调控，支持修改width、height，等组件内部属性
- 调整vi-input组件样式调控，支持修改width、height，padding组件内部属性
- 重构vi-input组件实现，支持前后缀添加
- 修复select样式判别
- 修复select组件自适应最长属性，预防抖动
- 重构button样式组
- 新增button组件size属性，弃用small属性
- 新增input组件type样式
- 重构radio，checkbox样式组，新增mutate属性
- date-select time-select 组件样式重构

# 0.3.0

- 重构组件库配色系统
- 新增toast组件，支持全局响应
- 新增astfix固钉组件
- 新增message组件，支持全局响应

# 0.3.1

- 修改xx组件为全局响应模式，支持组件样式全局配置与一次性配置，弃用其component使用形式
- 对弹出框做视口判断，避免遮挡情况发生



未来版本bug修复及功能添加：

- 修复dateSelect time组件对于mousewheel事件阻止的优化（已修复）^0.2.4

- 修复scroll组件组maxHeight等判别问题，向表单组件暴露属性修复样式不适配问题 （已修复）

  已修复清单：

  - 删除scroll及virtual-scroll组件width、heigth、maxHeight  props，删除style操作样式方法 ^0.2.4
  - css重写--vi-scroll-width、--vi-scroll-height、--vi-scroll-max-height变量值修改scroll组件样式^0.2.4
  - css重写--vi-virtual-scroll-width、--vi--virtual-scroll-height、--vi-virtual-scroll-max-height变量值修改virtual-scroll组件样式 ^0.2.4
  - 修复virtual-scroll组件max-height样式判别，调整虚拟滚动算法逻辑（暂未支持修改datas数据）
  - 修复virtual-scroll组件对于传入的datas的修改与破坏, 对数据进行进一步的封装隔离^0.2.4
  - 支持virtual-scroll组件传入非对象数组，支持基本类型数组渲染^0.2.4
  - 删除virtual-scroll组件itemHeight属性，内部自动计算itemHeight，详情请看下方说明^0.2.4

- 删除组件width等操控style样式的属性，提供更好的css样式修改环境（目前绝大部分适配失败来源） ^0.6.0

  已修复清单：

  - 调整select组件为虚拟滚动列表 ^0.2.4
  - 增加--vi-dialog-width等一系列css变量，支持复写变量值灵活修改dialog样式，详情见下表 ^0.2.4

- 调整虚拟滚动识别，支持不等高子元素的判别 ^0.7.0

- 调整select框为虚拟滚动，更好的支持大数据渲染。 对最长选择宽度进行适配  ~0.7.0

- 支持select框远程搜索、分类选择、多级选择, composition事件处理输入优化 ~0.7.0

- 添加form组件的rule检查 ~0.7.0

- input框解耦合，新增默认头尾部输入功能 ~0.8.0 （完成）

- 增添loading，progress， toast，information全局响应功能，更好的支持中间件使用 ~0.9.0

select更新一下虚拟滚动的算法，mounted获取到代码的长度，完成虚拟滚动渲染

- 支持一下多级选项
- 选项分组
- search处理
- 远程搜索处理
- composition事件处理输入优化

input框更新解耦合

form表单的正则以及代码规范

处理一下input的bug

日期选择器的解耦的做好优化处理

文件上传组件

进度条

table

list

message，toast，骨架框，navigation。。。