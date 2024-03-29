// vue
import { ref, watch } from 'vue'
// vue type
import type { SetupContext, Ref } from 'vue'
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any, ctx: SetupContext, dropdown: Ref, choosed: Ref) {
  // 普通常量
  // DOM ref
  const input = ref()
  // ref
  const search = ref(props.search)
  const value = ref(choosed.value)
  // 完成展示
  const finish = ref(true)
  // reactive
  // inject
  // computed
  watch(value, () => {
    if (!props.search) return
    value.value ? dropdown.value.toopen() : dropdown.value.toclose()
  })
  watch(choosed, () => {
    if (!props.search) return
    value.value = choosed.value
  })
  // 事件方法
  function searchToBlur () {
    if (value.value !== choosed.value) value.value = choosed.value
  }

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

  function toFocus () {
    if (props.search) input.value.focus()
  }
  // 方法
  // 普通function函数
  function toSearch () {
    finish.value = false
    // 将finish置为true后展示搜索结果
    ctx.emit('search', value.value, { finish })
  }
  // provide
  // 生命周期

  return {
    input,
    value,
    finish,
    searchToBlur,
    toFocus,
    handleInput,
    handleCompositionStart,
    handleCompositionAfter
  }
}
