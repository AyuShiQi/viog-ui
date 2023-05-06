import { ref, onMounted, onUnmounted } from 'vue'

export default function () {
  const dropdown = ref()
  const select = ref()
  const height = ref(Number.MAX_SAFE_INTEGER)
  let listenerResize: any
  let listenerScroll: any
  const direction = ref('down')
  const elseDirection = ref('normal')
  onMounted(() => {
    toChangeViewPosition()
    listenerResize = window.addEventListener('resize', toChangeViewPosition)
    listenerScroll = window.addEventListener('scroll', toChangeViewPosition)
  })

  const toChangeViewPosition = (function () {
    let timer: any
    return function () {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        recalcSize()
        const { left, right, bottom, top } = select.value.getBoundingClientRect()
        if (bottom + height.value < window.innerHeight) direction.value = 'down'
        else if (top - height.value >= 0) direction.value = 'up'
        else if (right + height.value < window.innerWidth) direction.value = 'right'
        else if (left - height.value >= 0) direction.value = 'left'
        else direction.value = 'down'
      }, 100)
    }
  })()

  function recalcSize (): void {
    const dropdwonStyle = window.getComputedStyle(dropdown.value.children[0])
    const temp = dropdwonStyle.getPropertyValue('height')
    if (/.*px/.test(temp)) height.value = Number((temp).slice(0, -2))
    // console.log(temp)
  }

  onUnmounted(() => {
    window.removeEventListener('resize', listenerResize)
    window.removeEventListener('scroll', listenerScroll)
  })

  return {
    dropdown,
    select,
    direction,
    elseDirection,
    toChangeViewPosition,
    recalcSize
  }
}
