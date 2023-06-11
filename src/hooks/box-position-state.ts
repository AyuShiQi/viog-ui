import { ref, onMounted, onBeforeUnmount } from 'vue'

export default function (mode = 'auto') {
  const dropdown = ref()
  const boxPositionDOM = ref()
  const height = ref(0)
  const width = ref(0)
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
        const { left, right, bottom, top, width: w, height: h } = boxPositionDOM.value.getBoundingClientRect()
        const inw = window.innerWidth
        const inh = window.innerHeight
        // console.log(width.value, height.value, left, right, bottom, top)
        if (bottom + height.value <= inh) {
          if (width.value > w) {
            const pieceW = (width.value - w) >> 1
            // console.log('pieceW', pieceW, left - pieceW, pieceW + right < inw)
            if (left - pieceW >= 0 && pieceW + right < inw) {
              direction.value = 'down'
              return
            }
          // drop-list小于select框范围
          } else {
            direction.value = 'down'
            return
          }
        }
        if (bottom + height.value > inh && top - height.value >= 0) {
          direction.value = 'up'
        } else if (right + width.value < window.innerWidth) {
          direction.value = 'right'
        } else if (left - width.value >= 0) {
          direction.value = 'left'
        } else direction.value = 'down'
      }, 100)
    }
  })()

  function recalcSize (): void {
    const dropdwonStyle = window.getComputedStyle(dropdown.value.children[0])
    const tempHeight = dropdwonStyle.getPropertyValue('height')
    if (/.*px/.test(tempHeight) && tempHeight !== '0px') height.value = Number((tempHeight).slice(0, -2))
    const tempWidth = dropdwonStyle.getPropertyValue('width')
    if (/.*px/.test(tempWidth) && tempWidth !== '0px') width.value = Number((tempWidth).slice(0, -2))
  }

  function firstCalcSize (): void {
    const dropdwonStyle = window.getComputedStyle(dropdown.value.children[0])
    const temp = dropdwonStyle.getPropertyValue('height')
    if (/.*px/.test(temp) && temp !== '0px') height.value = Number((temp).slice(0, -2))
    else {
      const maxTemp = dropdwonStyle.getPropertyValue('max-height')
      if (/.*px/.test(maxTemp)) height.value = Number((maxTemp).slice(0, -2))
    }
    const tempWidth = dropdwonStyle.getPropertyValue('width')
    if (/.*px/.test(tempWidth) && tempWidth !== '0px') width.value = Number((tempWidth).slice(0, -2))
  }

  onBeforeUnmount(() => {
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
