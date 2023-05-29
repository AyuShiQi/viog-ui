// vue
import { type } from 'os'
import { nextTick } from 'process'
import { ref, inject, computed, watch } from 'vue'
// vue type
import type { SetupContext } from 'vue'
// 组件type
type Target = [number, number] | undefined
type EditValue = ((row: number, col: number, value: any) => void) | undefined
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any, ctx: SetupContext) {
  // 普通常量
  // DOM ref
  const editInput = ref()
  // ref
  const inputValue = ref(props.value)
  // reactive
  // inject
  const chooseTarget = inject('table-editor-choose-target', undefined) as Target
  const editTarget = inject('table-editor-edit-target', undefined) as Target
  const entireTarget = inject('table-editor-entire-target', undefined) as Target
  const editValue = inject('table-editor-edit-value', undefined) as EditValue
  // computed
  const beChoosed = computed(() => {
    if (chooseTarget![0] === -1 || chooseTarget![1] === -1) return false
    return chooseTarget![0] === props.row && chooseTarget![1] === props.col
  })

  const edit = computed(() => {
    return editTarget![0] === props.row && editTarget![1] === props.col
  })

  const isEntire = computed(() => {
    return entireTarget![0] === props.row || entireTarget![1] === props.col
  })
  // watch
  watch(inputValue, (newVal) => {
    editValue!(props.row, props.col, newVal)
  })
  // 事件方法
  function handleClick () {
    // 选择当前位置
    chooseTarget![0] = props.row
    chooseTarget![1] = props.col
    // 取消整行选中
    entireTarget![0] = -1
    entireTarget![1] = -1
    // 处理double与click矛盾
    if (editTarget![0] !== props.row) editTarget![0] = -1
    if (editTarget![1] !== props.col) editTarget![1] = -1
  }

  function handleDoubleClick () {
    editTarget![0] = props.row
    editTarget![1] = props.col
    setTimeout(() => {
      editInput.value.focus()
    })
  }
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  return {
    editInput,
    handleClick,
    handleDoubleClick,
    beChoosed,
    edit,
    isEntire,
    inputValue
  }
}
