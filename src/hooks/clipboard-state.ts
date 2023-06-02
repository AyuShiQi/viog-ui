// vue
// vue type
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function () {
  // 普通常量
  const { clipboard } = navigator
  // DOM ref
  // ref
  // reactive
  // inject
  // computed
  // 事件方法
  // 方法
  function read (): Promise<ClipboardItems> {
    return clipboard.read()
  }

  function readText () {

  }

  function write () {

  }

  function writeText () {

  }
  // 普通function函数
  // provide
  // 生命周期
}
