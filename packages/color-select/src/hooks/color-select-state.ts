// vue
import { ref, reactive, computed, onMounted, onBeforeUnmount } from 'vue'
// vue type
import type { SetupContext } from 'vue'
// 组件type
// 外部hooks
// 内部hooks
// 外部模块
const colorCalMap = [[0, 1, 0], [-1, 0, 0], [0, 0, 1], [0, -1, 0], [1, 0, 0], [1, 0, 1]]

export default function (props: any, ctx: SetupContext) {
  // 普通常量
  /**
   * 透明度的
   */
  let ax = 0
  let ay = 0
  let abegin = 0
  /**
   * 色块条的
   */
  let cx = 0
  let cy = 0
  let cbegin = 0
  // DOM ref
  // ref
  const colorSliderDrag = ref(false)
  const alphaDrag = ref(false)
  // reactive
  const colorSliderPos = reactive([0, 0])
  const alphaPos = reactive([0, 0])
  /**
   * 色环颜色
   */
  const colorSlider = reactive([255, 0, 0, 1])
  // inject
  // computed
  const colorSliderView = computed(() => {
    return `rgba(${colorSlider[0]}, ${colorSlider[1]}, ${colorSlider[2]}, ${colorSlider[3]})`
  })
  // 事件方法
  function handleColorSliderMousedown (e: MouseEvent) {
    if (colorSliderDrag.value) return
    colorSliderDrag.value = true
    cx = e.x
    cy = e.y
    cbegin = (e.target as any).parentNode.getBoundingClientRect().x
  }

  function handleAlphaMousedown (e: MouseEvent) {
    if (alphaDrag.value) return
    alphaDrag.value = true
    ax = e.x
    ay = e.y
    abegin = (e.target as any).parentNode.getBoundingClientRect().x
  }

  function handleAlphaMousemove (e: MouseEvent) {
    if (!alphaDrag.value) return
    // console.log(e)
    alphaPos[0] = Math.max(Math.min(e.x - abegin, 250), 0)
  }

  function handleColorSliderMousemove (e: MouseEvent) {
    if (!colorSliderDrag.value) return
    // console.log(e)
    colorSliderPos[0] = Math.max(Math.min(e.x - cbegin, 250), 0)
  }
  /**
   * 鼠标弹起
   */
  function handleMouseup () {
    colorSliderDrag.value = false
    alphaDrag.value = false
  }
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  onMounted(() => {
    window.addEventListener('mouseup', handleMouseup)
    window.addEventListener('mousemove', handleAlphaMousemove)
    window.addEventListener('mousemove', handleColorSliderMousemove)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('mouseup', handleMouseup)
    window.removeEventListener('mousemove', handleAlphaMousemove)
    window.removeEventListener('mousemove', handleColorSliderMousemove)
  })

  return {
    colorSliderView,
    colorSliderPos,
    alphaPos,
    handleColorSliderMousedown,
    handleAlphaMousedown
  }
}
