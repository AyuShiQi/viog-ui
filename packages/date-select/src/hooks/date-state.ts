import { ref } from 'vue'

// 这是用于控制日期状态的hooks
export default function () {
  // 需要上层传过来， 暂时初始化
  const year = ref(2022)
  const month = ref(2022)
  const week = ref(1)
  const date = ref(1)

  // 判断月份第一天是星期几
  // 判断该月有几天
  // 补零函数
}