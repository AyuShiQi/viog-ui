// vue
import { ref } from 'vue'
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
  // inject
  // computed
  // 事件方法
  function handleClick () {
    fileUploaderInput.value.click()
  }

  function handleFileChange (e: Event) {
    const { files } = e.target as HTMLInputElement
    for (const file of files!) {
      console.log(file)
      file.text().then((val) => {
        console.log(val)
      })
    }
  }
  // 方法
  // 普通function函数
  // provide
  // 生命周期

  return {
    fileUploaderInput,
    handleClick,
    handleFileChange
  }
}
