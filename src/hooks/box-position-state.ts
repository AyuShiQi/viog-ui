import { ref, onMounted, onUnmounted } from 'vue'

export default function () {
  const dropdown = ref()
  const height = ref(0)
  let listenerResize: any
  let listenerScroll: any
  const direction = ref('down')
  const elseDirection = ref('normal')
  onMounted(() => {
    listenerResize = window.addEventListener('resize', toChangeViewPosition)
    listenerScroll = window.addEventListener('scroll', toChangeViewPosition)
  })

  const toChangeViewPosition = (function () {
    let timer: any
    return function () {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        recalcSize()
        const { left, right, bottom, top } = dropdown.value.getBoundingClientRect()
        if (top + height.value < window.innerHeight) direction.value = 'down'
        else if (top - height.value >= 0) direction.value = 'up'
        else direction.value = 'left'
      }, 100)
    }
  })()

  function recalcSize (): void {
    const dropdwonStyle = window.getComputedStyle(dropdown.value.children[0])
    const temp = dropdwonStyle.getPropertyValue('height')
    if (/.*px/.test(temp)) height.value = Number((temp).slice(0, -2))
  }

  onUnmounted(() => {
    window.removeEventListener('resize', listenerResize)
    window.removeEventListener('scroll', listenerScroll)
  })

  return {
    dropdown,
    direction,
    elseDirection,
    recalcSize
  }
}
