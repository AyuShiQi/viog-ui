import { ref, onMounted, reactive } from 'vue'
import type { SetupContext } from 'vue'

export default function (ctx: SetupContext, direction: string) {
  const listLen = reactive([] as number[])
  const listOffset = reactive([] as number[])
  const listEvent: EventListener[] = []
  const nav = ref()

  onMounted(() => {
    direction === 'horizontal' ? horizontalCalc() : verticalCalc()
  })

  const verticalCalc = () => {
    const { y: contentTop } = nav.value.getBoundingClientRect()
    let i = 0
    for (const navChild of nav.value.children) {
      listEvent.push(navChild.addEventListener('click', toChoose.bind(undefined, i)))
      const { y, height } = navChild.getBoundingClientRect()
      listLen.push(height)
      listOffset.push(y - contentTop)
      i++
    }
  }

  const horizontalCalc = () => {
    const { x: contentLeft } = nav.value.getBoundingClientRect()
    let i = 0
    for (const navChild of nav.value.children) {
      listEvent.push(navChild.addEventListener('click', toChoose.bind(undefined, i)))
      const { x, width } = navChild.getBoundingClientRect()
      // console.log(x - contentLeft, width)
      listLen.push(width)
      listOffset.push(x - contentLeft)
      i++
    }
  }

  const toChoose = (index: number) => {
    ctx.emit('update:modelValue', index)
  }

  return {
    nav,
    listLen,
    listOffset
  }
}
