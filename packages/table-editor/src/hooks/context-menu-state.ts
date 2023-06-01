// vue
import { ref, onMounted, onBeforeUnmount } from 'vue'
// vue type
import type { SetupContext } from 'vue'
// 组件type
// 外部hooks
import openState from '@/hooks/open-state'
// 内部hooks
// 外部模块

export default function (props: any, ctx: SetupContext) {
  const open = openState(true, 'mousedown')
  // 普通常量
  // DOM ref
  // ref
  const listTop = ref(0)
  const listLeft = ref(0)
  // reactive
  // inject
  // computed
  // 事件方法
  function handleOpenContextMenu (e: Event, mode: 'row' | 'col' | 'content' = 'content') {
    console.log(open.openDOM.value)
    open.open.value = true
    e.preventDefault()
  }
  // 方法
  // 普通function函数
  // provide
  // 生命周期

  return {
    ...open,
    listTop,
    listLeft,
    handleOpenContextMenu
  }
}
