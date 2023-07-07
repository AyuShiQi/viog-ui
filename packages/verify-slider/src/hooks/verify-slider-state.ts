// vue
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
// vue type
import type { SetupContext } from 'vue'
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (ctx: SetupContext) {
  // 普通常量
  let startX = 0
  let sliderWidth = 0
  // DOM ref
  const verifySlider = ref()
  // ref
  const isMoving = ref(false)
  const boxLeft = ref(0)
  const finish = ref(false)
  // reactive
  // inject
  // computed
  watch(finish, () => {
    if (!finish.value) boxLeft.value = 0
  })
  // 事件方法
  function handleMousedown (e: any) {
    if (finish.value) return
    isMoving.value = true
    if (e.x) {
      startX = e.x
    } else {
      startX = e.changedTouches[0]?.clientX
    }
  }

  function handleMousemove (e: any) {
    if (finish.value) return
    if (!isMoving.value) return
    if (e.x) {
      boxLeft.value = Math.max(e.x - startX, 0)
      boxLeft.value = Math.min(boxLeft.value, sliderWidth)
    } else {
      boxLeft.value = Math.max(e.changedTouches[0]?.clientX - startX, 0)
      boxLeft.value = Math.min(boxLeft.value, sliderWidth)
    }
  }

  function handleMouseup () {
    if (finish.value) return
    isMoving.value = false
    if (boxLeft.value < sliderWidth) boxLeft.value = 0
    else {
      finish.value = true
      ctx.emit('access', handleError)
    }
  }
  // 方法
  function handleError () {
    finish.value = false
  }
  // 普通function函数
  // provide
  // 生命周期
  onMounted(() => {
    const temp = getComputedStyle(verifySlider.value)
    sliderWidth = Number(temp.getPropertyValue('width').slice(0, -2)) - Number(temp.getPropertyValue('height').slice(0, -2))
    window.addEventListener('mousemove', handleMousemove)
    window.addEventListener('mouseup', handleMouseup)
    window.addEventListener('touchmove', handleMousemove)
    window.addEventListener('touchend', handleMouseup)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('mousemove', handleMousemove)
    window.removeEventListener('mouseup', handleMouseup)
    window.removeEventListener('touchmove', handleMousemove)
    window.removeEventListener('touchend', handleMouseup)
  })

  return {
    verifySlider,
    isMoving,
    boxLeft,
    handleMousedown,
    handleMousemove,
    handleMouseup
  }
}
