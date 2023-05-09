import { ref, onMounted, reactive } from 'vue'
import type { SetupContext } from 'vue'

export default function (ctx: SetupContext) {
  const listWidth = reactive([] as number[])
  const listLeft = reactive([] as number[])
  const listEvent: EventListener[] = []
  const nav = ref()

  onMounted(() => {
    const { x: contentLeft } = nav.value.getBoundingClientRect()
    let i = 0
    for (const navChild of nav.value.children) {
      listEvent.push(navChild.addEventListener('click', toChoose.bind(undefined, i)))
      const { x, width } = navChild.getBoundingClientRect()
      // console.log(x - contentLeft, width)
      listWidth.push(width)
      listLeft.push(x - contentLeft)
      i++
    }
    console.log()
  })

  const toChoose = (index: number) => {
    console.log(index)
    ctx.emit('update:modelValue', index)
  }

  return {
    nav,
    listWidth,
    listLeft
  }
}