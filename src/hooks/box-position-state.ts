import { ref, onMounted, onUnmounted } from 'vue'

export default function () {
  const dropdown = ref()
  let height = 0
  let listenerResize: any
  let listenerScroll: any
  const direction = ref('down')
  const elseDirection = ref('left')
  onMounted(() => {
    const dropdwonStyle = window.getComputedStyle(dropdown.value.children[0])
    const temp = dropdwonStyle.getPropertyValue('height') || dropdwonStyle.getPropertyPriority('min-height')
    if (/.*px/.test(temp)) height = Number((temp).slice(0, -2))
    console.log(height)
    listenerResize = window.addEventListener('resize', toChangeViewPosition)
    listenerScroll = window.addEventListener('scroll', toChangeViewPosition)
  })

  const toChangeViewPosition = (function () {
    let timer: any
    return function (e: Event) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        // console.log(window.innerHeight)
        const { left, right, bottom, top } = dropdown.value.getBoundingClientRect()
        console.log(left)
        if (top + height < window.innerHeight) direction.value = 'down'
        else direction.value = 'up'
      }, 300)
    }
  })()

  onUnmounted(() => {
    window.removeEventListener('resize', listenerResize)
    window.removeEventListener('scroll', listenerScroll)
  })

  return {
    dropdown,
    direction,
    elseDirection
  }
}
