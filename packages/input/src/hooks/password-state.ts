// vue
import { ref, computed } from 'vue'
// vue type
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any) {
  // 普通常量
  // DOM ref
  // ref
  const ifShowPassword = ref(false)
  // reactive
  // inject
  // computed
  // 在password情况下展示密码还是文本
  const passwordOrText = computed((): string => {
    return props.password && !ifShowPassword.value ? 'password' : 'text'
  })
  // 事件方法
  // 方法
  function changeShowPassword () {
    ifShowPassword.value = !ifShowPassword.value
  }
  // 普通function函数
  // provide
  // 生命周期
  return {
    ifShowPassword,
    passwordOrText,
    changeShowPassword
  }
}
