import { ref, onMounted, onUnmounted } from 'vue'

export default function (mode = 'auto') {
  const dropdown = ref()
  const boxPositionDOM = ref()
  const height = ref(0)
  let listenerResize: any
  let listenerScroll: any
  const direction = ref(mode === 'auto' ? 'down' : mode)
  const elseDirection = ref('normal')
  onMounted(() => {
    if (mode === 'auto') {
      firstCalcSize()
      toChangeViewPosition()
      listenerResize = window.addEventListener('resize', toChangeViewPosition)
      listenerScroll = window.addEventListener('scroll', toChangeViewPosition)
    }
  })

  const toChangeViewPosition = (function () {
    let timer: any
    return function () {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        recalcSize()
        const { left, right, bottom, top } = boxPositionDOM.value.getBoundingClientRect()
        // console.log(height.value, window.innerHeight, window.innerWidth, bottom)
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
    if (/.*px/.test(temp) && temp !== '0px') height.value = Number((temp).slice(0, -2))
  }

  function firstCalcSize (): void {
    const dropdwonStyle = window.getComputedStyle(dropdown.value.children[0])
    const temp = dropdwonStyle.getPropertyValue('height')
    if (/.*px/.test(temp) && temp !== '0px') height.value = Number((temp).slice(0, -2))
    else {
      const maxTemp = dropdwonStyle.getPropertyValue('max-height')
      if (/.*px/.test(maxTemp)) height.value = Number((maxTemp).slice(0, -2))
    }
  }

  onUnmounted(() => {
    window.removeEventListener('resize', listenerResize)
    window.removeEventListener('scroll', listenerScroll)
  })

  return {
    dropdown,
    boxPositionDOM,
    direction,
    elseDirection,
    toChangeViewPosition,
    recalcSize
  }
}
