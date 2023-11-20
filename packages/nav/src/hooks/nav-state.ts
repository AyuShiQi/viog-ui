import { ref, onMounted, reactive, computed, provide, watch } from 'vue'
import type { SetupContext } from 'vue'

export default function (props: any, ctx: SetupContext) {
  const boxUnit = props.direction === 'horizontal' ? 'width' : 'height'
  const offsetUnit = props.direction === 'horizontal' ? 'left' : 'top'

  const listEvent: EventListener[] = []
  const nav = ref()
  // hover 双分支处理
  const choose = ref(props.modelValue)
  const listLen = reactive([] as number[])
  const listOffset = reactive([] as number[])

  const originPick = computed(() => props.modelValue)
  watch(originPick, () => {
    if (originPick.value !== choose.value) {
      choose.value = originPick.value
    }
  })
  watch(choose, () => {
    if (originPick.value !== choose.value) {
      if (props.modelValue !== undefined) ctx.emit('update:modelValue', choose.value)
    }
  })

  const nowWidth = computed(() => {
    if (choose.value === -1) return 0
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
    if (props.trigger === 'hover') nav.value.addEventListener('mouseleave', () => { choose.value = -1 })
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
    if (props.trigger === 'hover') nav.value.addEventListener('mouseleave', () => { choose.value = -1 })
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
    if (props.trigger === 'click') {
      if (props.defaultId) choose.value = props.defaultId
    } else {
      if (choose.value !== -1) choose.value = -1
    }
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
