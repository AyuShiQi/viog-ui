// vue
import { ref, inject, computed } from 'vue'
// vue type
import type { SetupContext, Ref } from 'vue'
// 组件type
import type { Target, PickTarget, ChangeTarget, EditValue } from '../types/inject-type'
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
  const chooseTarget = inject('table-editor-choose-target') as Target
  const editTarget = inject('table-editor-edit-target') as Target
  const entireTarget = inject('table-editor-entire-target') as Target
  const editValue = inject('table-editor-edit-value') as EditValue
  const needPick = inject('table-editor-need-pick') as Ref<boolean>
  const needChange = inject('table-editor-need-change') as Ref<boolean>
  const pickTarget = inject('table-editor-pick-target') as PickTarget
  const changeTarget = inject('table-editor-change-target') as ChangeTarget
  const rowOption = inject('table-editor-row-option') as number[]
  const colOption = inject('table-editor-col-option') as number[]
  // computed
  /**
   * 该格子是否单击选中（第一次选中）
   */
  const beChoosed = computed(() => {
    if (chooseTarget![0] === -1 || chooseTarget![1] === -1) return false
    return chooseTarget![0] === props.row && chooseTarget![1] === props.col
  })
  /**
   * 该格子是否正在被编辑
   */
  const edit = computed(() => {
    return editTarget![0] === props.row && editTarget![1] === props.col
  })
  /**
   * 该格子是否属于整行整列选中的格子
   */
  const isEntire = computed(() => {
    return entireTarget![0] === props.row || entireTarget![1] === props.col
  })
  // watch
  // 事件方法
  function handleMouseDown (e: MouseEvent, row: number, col: number) {
    // 拒绝滚动键
    if (e.button === 1) return
    // 重置pick内容
    pickTarget.rowStart = row
    pickTarget.rowEnd = row
    pickTarget.colStart = col
    pickTarget.colEnd = col
    pickTarget.colLen = 1
    pickTarget.rowLen = 1
    // 右键后属于那个框内
    // if (e.button === 2) {
    //   if (pickTarget.rowStart <= row &&
    //   pickTarget.rowEnd >= row &&
    //   pickTarget.colStart <= col &&
    //   pickTarget.colEnd >= col) return
    // }
    // 选中命中
    needPick.value = true
    // 选择当前位置
    chooseTarget[0] = props.row
    chooseTarget[1] = props.col
    // 取消整行选中
    entireTarget[0] = -1
    entireTarget[1] = -1
    // 处理double与click矛盾
    if (editTarget[0] !== props.row) editTarget[0] = -1
    if (editTarget[1] !== props.col) editTarget[1] = -1
  }

  function handleDoubleClick () {
    // 格式化功能取消
    needPick.value = false
    needChange.value = false
    // 选中取消
    pickTarget.row = -1
    pickTarget.col = -1
    changeTarget.row = -1
    changeTarget.col = -1
    // 编辑命中
    editTarget[0] = props.row
    editTarget[1] = props.col
    // 自动聚焦input
    setTimeout(() => {
      editInput.value.focus()
    })
  }

  function handleMouseEnter () {
    if (needPick.value) {
      pickTarget.rowLen = props.row - pickTarget!.row
      pickTarget.colLen = props.col - pickTarget!.col
      pickTarget.rowStart = Math.min(pickTarget.row, pickTarget.row + pickTarget.rowLen)
      pickTarget.rowEnd = Math.max(pickTarget.row, pickTarget.row + pickTarget.rowLen)
      pickTarget.colStart = Math.min(pickTarget.col, pickTarget.col + pickTarget.colLen)
      pickTarget.colEnd = Math.max(pickTarget.col, pickTarget.col + pickTarget.colLen)
    } else if (needChange!.value) {
      changeTarget.row = props.row
      changeTarget.col = props.col
    }
  }

  function handleBlur () {
    // 格子失去焦点更改格子的值
    editValue!(props.row, props.col, inputValue.value)
  }
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  return {
    rowOption,
    colOption,
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
