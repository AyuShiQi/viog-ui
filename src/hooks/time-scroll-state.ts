import { ref, reactive, computed, onMounted } from 'vue'
import { formatTimeDigit } from '@/utils/date-utils'

import type { ModelValueDate } from '@/types/date-select-types'
import type { TimeScrollProps } from '@/types/date-select-types/time-scroll-types'

export default function (props: TimeScrollProps, need: number, first: number, target: string) {
  // 滚轮选择内容
  const lists: string[] = []
  // 滚动的DOM
  const scrollUl = ref()
  // 获取不到，气死了
  onMounted(() => {
    // 获取元素大小
    console.log(scrollUl.value)
    scrollUl.value.onmousewheel = function () {
      return false
    }
  })
  // 初始化时间
  for (let i = 0; i < need; i++) {
    lists.push(formatTimeDigit(i))
  }

  const t = target as keyof ModelValueDate
  const choosed = reactive(props.choosed)
  // 初始化时间
  if (choosed[t] === undefined) choosed[t] = 0
  // 判断当前是否是被选择的
  function isChoosed (index: number): boolean {
    return index === choosed[t]
  }
  // 滚轮偏移量
  const translate = computed(() => {
    return first - (choosed[t] as number) * 30
  })

  // 鼠标滚动事件
  function mouseWheel (e: WheelEvent): boolean {
    if (e.deltaY > 0) {
      if ((choosed[t] as number) >= need - 1) return false
      else (choosed[t] as number)++
    } else {
      if ((choosed[t] as number) <= 0) return false
      else (choosed[t] as number)--
    }
    return false
  }

  return {
    lists,
    isChoosed,
    translate,
    mouseWheel,
    scrollUl
  }
}
