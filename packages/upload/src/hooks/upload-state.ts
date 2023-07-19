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
  const fileMode = ref('normal')
  // reactive
  const fileList = reactive([] as File[])
  // inject
  // computed
  // 事件方法
  function toChooseFile (mode?: string) {
    if (mode) fileMode.value = mode
    fileUploaderInput.value.click()
  }

  function handleFileChange (e: Event) {
    const { files } = e.target as HTMLInputElement
    addFileList(files)
  }
  // 方法
  function addFileList (files: FileList | null) {
    const _prevent = eventPrevent()
    let flag = false

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
      // console.log(file)
      // 这个可能有bug,先试一下
      ctx.emit('beforeadd', file, _prevent.preventDefault)
      if (_prevent.defaultEvent) {
        flag = true
        fileList.push(file)
        ctx.emit('afteradd', file)
        // 照片头像上传功能
        if (fileMode.value === 'img') {
          ctx.emit('addphoto', file)
        }
      }
      // change事件触发
      if (flag) ctx.emit('change', [...fileList])
    }
  }

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
  provide('upload-add-files', addFileList)
  provide('upload-file-list', fileList)
  provide('upload-delete-file', toDelete)
  // 生命周期

  return {
    fileUploaderInput,
    handleFileChange
  }
}
