import { ref, onMounted, reactive, computed, provide } from 'vue'
import type { SetupContext } from 'vue'

export default function (props: any, ctx: SetupContext) {
  const boxUnit = props.direction === 'horizontal' ? 'width' : 'height'
  const offsetUnit = props.direction === 'horizontal' ? 'left' : 'top'

  const listEvent: EventListener[] = []
  const nav = ref()
  const choose = ref(props.defaultId)
  const listLen = reactive([] as number[])
  const listOffset = reactive([] as number[])

  const nowWidth = computed(() => {
    return listLen[choose.value]
  })

  const nowLeft = computed(() => {
    return listOffset[choose.value]
  })

  const toChoose = (index: number) => {
    choose.value = index
    ctx.emit('change', index)
  }

  // 普通函数
  const verticalCalc = () => {
    const { y: contentTop } = nav.value.getBoundingClientRect()
    let i = 0
    for (const navChild of nav.value.children) {
      if (props.trigger === 'click') listEvent.push(navChild.addEventListener('click', toChoose.bind(undefined, i)))
      else if (props.trigger === 'hover') listEvent.push(navChild.addEventListener('mouseover', toChoose.bind(undefined, i)))
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
      if (props.trigger === 'click') listEvent.push(navChild.addEventListener('click', toChoose.bind(undefined, i)))
      else if (props.trigger === 'hover') listEvent.push(navChild.addEventListener('mouseover', toChoose.bind(undefined, i)))
      const { x, width } = navChild.getBoundingClientRect()
      // console.log(x - contentLeft, width)
      listLen.push(width)
      listOffset.push(x - contentLeft)
      i++
    }
  }

  provide('nav-trigger', props.trigger)

  onMounted(() => {
    props.direction === 'horizontal' ? horizontalCalc() : verticalCalc()
  })

  return {
    boxUnit,
    offsetUnit,
    nav,
    choose,
    listLen,
    listOffset,
    nowWidth,
    nowLeft
  }
}
