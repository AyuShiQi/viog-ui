// vue
import { ref, reactive, provide } from 'vue'
// vue type
import type { SetupContext } from 'vue'
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

import eventPrevent from '../../../utils/communication/EventdefaultPrevent'

export default function (props: any, ctx: SetupContext) {
  // 普通常量
  // DOM ref
  const fileUploaderInput = ref()
  // ref
  // reactive
  const fileList = reactive([] as File[])
  // inject
  // computed
  // 事件方法
  function toChooseFile () {
    fileUploaderInput.value.click()
  }

  function handleFileChange (e: Event) {
    const _prevent = eventPrevent()
    const { files } = e.target as HTMLInputElement
    for (const file of files!) {
      if (props.limit && file.size > props.limit) {
        ctx.emit('LimitAttention', file)
        continue
      }
      // 文件份数加载前控制
      if ((props.multiple && fileList.length > 0) || (props.maximum && fileList.length >= props.maximum)) {
        if (props.replace) fileList.shift()
        else {
          ctx.emit('MaximumAttention', file)
          break
        }
      }
      console.log(file)
      // file.text().then((val) => {
      // console.log(val)
      // })
      // 这个可能有bug,先试一下
      ctx.emit('beforeadd', file, _prevent.preventDefault)
      if (_prevent.defaultEvent) fileList.push(file)
      ctx.emit('afteradd', file)
    }
  }
  // 方法
  function toDelete (file: File) {
    const _prevent = eventPrevent()
    ctx.emit('beforedelete', file, _prevent.preventDefault)
    // 满足条件删除
    if (_prevent.defaultEvent) {
      const index = fileList.findIndex((otherfile) => otherfile === file)
      fileList.splice(index, 1)
    }
    ctx.emit('afterdelete', file)
  }
  // 普通function函数
  // provide
  provide('upload-choose-file', toChooseFile)
  provide('upload-file-list', fileList)
  provide('upload-delete-file', toDelete)
  // 生命周期

  return {
    fileUploaderInput,
    handleFileChange
  }
}
