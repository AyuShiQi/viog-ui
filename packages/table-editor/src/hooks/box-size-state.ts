// vue
import { ref, onMounted, watch } from 'vue'
// vue type
import type { Ref } from 'vue'
// 组件type
// 外部hooks
// 内部hooks
// 外部模块
const pxreg = /px$/
export default function (table: Ref, value: any) {
  // 普通常量
  // DOM ref
  // ref
  const headerHeight = ref(0)
  const siderWidth = ref(0)
  const tdWidth = ref(0)
  const tdHeight = ref(0)
  /**
   * table body部分的宽度和高度
   */
  // reactive
  // inject
  // computed
  // 事件方法
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  onMounted(() => {
    const styles = window.getComputedStyle(table.value.$el)
    const hh = styles.getPropertyValue('--vi-table-header-height')
    const hw = styles.getPropertyValue('--vi-table-sider-width')
    const th = styles.getPropertyValue('--vi-table-td-height')
    const tw = styles.getPropertyValue('--vi-table-td-width')
    if (pxreg.test(hh)) headerHeight.value = Number(hh.slice(0, -2))
    if (pxreg.test(hw)) siderWidth.value = Number(hw.slice(0, -2))
    if (pxreg.test(tw)) tdWidth.value = Number(tw.slice(0, -2))
    if (pxreg.test(th)) tdHeight.value = Number(th.slice(0, -2))
  })

  return {
    headerHeight,
    siderWidth,
    tdHeight,
    tdWidth
  }
}
