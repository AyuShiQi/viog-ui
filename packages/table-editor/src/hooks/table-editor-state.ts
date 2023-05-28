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
  // header标头
  const sideList = reactive([] as number[])
  // const headerList = reactive([])
  // inject
  // computed
  const rows = computed(() => props.modelValue.length)
  const cols = computed(() => {
    let max = 0
    for (const arr of props.modelValue) {
      max = Math.max(arr.length, max)
    }
    return max
  })
  const headerList = computed(() => {
    const code = 65
    let now = 0
    const newList = []
    for (let i = 0; i < cols.value; i++) {
      newList.push(String.fromCodePoint(code + now))
      now = (now + 1) % 24
    }
    return newList
  })
  // watch
  watch(rows, (newVal, oldVal) => {
    if (!oldVal) oldVal = 0
    if (newVal < oldVal) sideList.length = newVal + 1
    else {
      for (let i = oldVal + 1; i <= newVal; i++) {
        sideList.push(i)
      }
    }
  }, { immediate: true })
  // 事件方法
  function scrollListener () {
    console.log(table.value.parentNode.scrollTop, table.value.parentNode.scrollLeft)
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
    tableTop,
    rows,
    cols,
    sideList,
    headerList
  }
}
