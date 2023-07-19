// vue
import { inject } from 'vue'
// vue type
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any) {
  // 普通常量
  // DOM ref
  // ref
  // reactive
  // inject
  // 用于触发打开input file框
  const toChooseFile = inject('upload-choose-file', undefined) as ((mode?: string) => void) | undefined
  const addFileList = inject('upload-add-files', undefined) as ((f: FileList | null) => void) | undefined
  // computed
  // 事件方法
  function handleClick (e: Event) {
    e.stopPropagation()
    if (toChooseFile) toChooseFile('img')
  }

  function handleDrop (e: DragEvent) {
    e.preventDefault()
    if (!props.drag) return
    console.log(e.dataTransfer?.files)
    if (addFileList) addFileList(e.dataTransfer?.files as FileList)
  }
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  return {
    handleClick,
    handleDrop
  }
}
