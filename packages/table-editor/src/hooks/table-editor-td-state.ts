// vue
import { type } from 'os'
import { ref, inject, computed, watch } from 'vue'
// vue type
import type { SetupContext, Ref } from 'vue'
// 组件type
type Target = [number, number] | undefined
type PickTarget = {
  row: number,
  col: number,
  colLen: number,
  rowLen: number,
  rowStart: number,
  rowEnd: number,
  colStart: number,
  colEnd: number
} | undefined

type ChangeTarget = {
  row: number,
  col: number
} | undefined

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
  const needPick = inject('table-editor-need-pick', undefined) as Ref<boolean> | undefined
  const needChange = inject('table-editor-need-change', undefined) as Ref<boolean> | undefined
  const pickTarget = inject('table-editor-pick-target', undefined) as PickTarget
  const changeTarget = inject('table-editor-change-target', undefined) as ChangeTarget
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
  // 事件方法
  function handleMouseDown () {
    // 选中命中
    needPick!.value = true
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
    // 格式化功能取消
    needPick!.value = false
    needChange!.value = false
    // 选中取消
    pickTarget!.row = -1
    pickTarget!.col = -1
    changeTarget!.row = -1
    changeTarget!.col = -1
    // 编辑命中
    editTarget![0] = props.row
    editTarget![1] = props.col
    // 自动聚焦input
    setTimeout(() => {
      editInput.value.focus()
    })
  }

  function handleMouseEnter () {
    if (needPick!.value) {
      pickTarget!.rowLen = props.row - pickTarget!.row
      pickTarget!.colLen = props.col - pickTarget!.col
    } else if (needChange!.value) {
      changeTarget!.row = props.row
      changeTarget!.col = props.col
    }
  }

  function handleBlur () {
    editValue!(props.row, props.col, inputValue.value)
  }
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  return {
    editInput,
    handleMouseDown,
    handleDoubleClick,
    handleMouseEnter,
    handleBlur,
    beChoosed,
    edit,
    isEntire,
    inputValue
  }
}
