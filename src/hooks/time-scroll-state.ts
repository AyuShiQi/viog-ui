import { ref, reactive, onMounted } from 'vue'
import { formatTimeDigit } from '@/utils/date-utils'

export default function (props: any, need: number, first: number, target: string) {
  const lists: string[] = []
  // 滚动的DOM
  const scrollUl = ref()
  onMounted(() => {
    // 获取元素大小
    // console.log(scrollUl.value.children)
  })

  console.log(scrollUl.value)
  // 初始化时间
  for (let i = 0; i < need; i++) {
    lists.push(formatTimeDigit(i))
  }

  const choosed = reactive(props.choosed)
  if (choosed[target] === undefined) choosed[target] = 0

  // 判断当前是否是被选择的
  function isChoosed (index: number, type: number): boolean {
    return index === choosed[target]
  }

  const translate = ref(first)

  function mouseWheel (e: any) {
    if (e.wheelDelta < 0) {
      if (choosed[target] >= need - 1) return
      choosed[target]++
      translate.value -= 30
    } else {
      if (choosed[target] <= 0) return
      choosed[target]--
      translate.value += 30
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
