// vue
import { onMounted, ref } from 'vue'
// vue type
import type { SetupContext, Ref } from 'vue'
import type { InputProps } from '../type'
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: InputProps, ctx: SetupContext, input: Ref) {
  // 普通常量
  // DOM ref
  // ref
  const search = ref(props.search)
  // reactive
  // inject
  // computed
  // 事件方法
  function handleCompositionStart (e: Event) {
    search.value = false
  }

  function handleCompositionAfter () {
    search.value = true
    ctx.emit('search', props.modelValue)
  }
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  onMounted(() => {
    if (props.search) {
      input.value.addEventListener('compositionstart', handleCompositionStart)
      input.value.addEventListener('compositionend', handleCompositionAfter)
    }
  })

  return {
    search
  }
}
