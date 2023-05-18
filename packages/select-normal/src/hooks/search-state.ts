// vue
import { onMounted, ref } from 'vue'
// vue type
import type { SetupContext, Ref } from 'vue'
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any, ctx: SetupContext) {
  // 普通常量
  let timer: NodeJS.Timeout | undefined = undefined
  // DOM ref
  // ref
  const search = ref(props.search)
  const value = ref('')
  // reactive
  // inject
  // computed
  // 事件方法
  function handleInput () {
    if (search.value) toSearch()
  }

  function handleCompositionStart (e: Event) {
    search.value = false
  }

  function handleCompositionAfter () {
    search.value = true
    toSearch()
  }
  // 方法
  // 普通function函数
  function toSearch () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      ctx.emit('search', value.value)
    }, 500)
  }
  // provide
  // 生命周期

  return {
    value,
    handleInput,
    handleCompositionStart,
    handleCompositionAfter
  }
}
