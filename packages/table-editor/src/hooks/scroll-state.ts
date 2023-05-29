// vue
import { ref, reactive, onMounted, onBeforeUnmount, computed, watch } from 'vue'
// vue type
import type { SetupContext } from 'vue'
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any, ctx: SetupContext) {
  // 普通常量
  // DOM ref
  const table = ref()
  // ref
  const tableLeft = ref(0)
  const tableTop = ref(0)
  // reactive
  // inject
  // computed
  // 事件方法
  function scrollListener () {
    // console.log(table.value.parentNode.scrollTop, table.value.parentNode.scrollLeft)
    tableLeft.value = table.value.parentNode.scrollLeft
    tableTop.value = table.value.parentNode.scrollTop
  }
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  onMounted(() => {
    table.value.parentNode.addEventListener('scroll', scrollListener)
  })

  onBeforeUnmount(() => {
    table.value.parentNode.removeEventListener('scroll', scrollListener)
  })
  return {
    table,
    tableLeft,
    tableTop
  }
}
