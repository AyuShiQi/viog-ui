import { ref, reactive, computed } from 'vue'
import { formatTimeDigit } from '@/utils/date-utils'

export default function (props: any, need: number, first: number, target: string) {
  // 滚轮选择内容
  const lists: string[] = []
  // 滚动的DOM
  const scrollUl = ref()
  // 获取不到，气死了
  // onMounted(() => {
  //   // 获取元素大小
  //   console.log(scrollUl.value.children)
  // })
  // 初始化时间
  for (let i = 0; i < need; i++) {
    lists.push(formatTimeDigit(i))
  }

  const choosed = reactive(props.choosed)
  if (choosed[target] === undefined) choosed[target] = 0

  // 判断当前是否是被选择的
  function isChoosed (index: number): boolean {
    return index === choosed[target]
  }
  // 滚轮偏移量
  const translate = computed(() => {
    return first - choosed[target] * 30
  })
  // 鼠标滚动事件
  function mouseWheel (e: any) {
    if (e.wheelDelta < 0) {
      if (choosed[target] >= need - 1) return
      choosed[target]++
    } else {
      if (choosed[target] <= 0) return
      choosed[target]--
    }
  }

  return {
    lists,
    isChoosed,
    translate,
    mouseWheel,
    scrollUl
  }
}
