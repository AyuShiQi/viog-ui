// vue
import { ref, reactive, provide } from 'vue'
// vue type
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function () {
  // 普通常量
  // DOM ref
  const fileUploaderInput = ref()
  // ref
  // reactive
  const fileList = reactive(new Set<File>())
  // inject
  // computed
  // 事件方法
  function toChooseFile () {
    fileUploaderInput.value.click()
  }

  function handleFileChange (e: Event) {
    const { files } = e.target as HTMLInputElement
    for (const file of files!) {
      console.log(file)
      // file.text().then((val) => {
      // console.log(val)
      // })
      // 这个可能有bug,先试一下
      fileList.add(file)
    }
  }
  // 方法
  // 普通function函数
  // provide
  provide('upload-choose-file', toChooseFile)
  provide('upload-file-list', fileList)
  // 生命周期

  return {
    fileUploaderInput,
    handleFileChange
  }
}
