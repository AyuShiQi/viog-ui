// vue
import { ref, reactive, computed, onMounted, onBeforeUnmount, watch } from 'vue'
// vue type
import type { SetupContext } from 'vue'
// 组件type
// 外部hooks
// 内部hooks
// 外部模块
import { RGBtoHSV, HSVtoRGB } from './rgb-hsv'
// const colorCalMap = [[0, 1, 0], [-1, 0, 0], [0, 0, 1], [0, -1, 0], [1, 0, 0], [1, 0, 1]]
const colorCalPoint = [[255, 0, 0], [255, 255, 0], [0, 255, 0], [0, 255, 255], [0, 0, 255], [255, 0, 255], [255, 0, 0]]
const colorSliderUnit = 200 / 6

export default function (props: any, ctx: SetupContext) {
  // 普通常量
  /**
   * 透明度的
   */
  let abegin = 0
  /**
   * 色块条的
   */
  let cbegin = 0
  // DOM ref
  // ref
  const colorSliderDrag = ref(false)
  const alphaDrag = ref(false)
  const alphaSlider = ref(1)
  // reactive
  const colorSliderPos = reactive([0, 0])
  const alphaPos = reactive([0, 0])
  /**
   * 选中颜色rgba
   */
  const colorChoose = reactive([0, 0, 0, 1])
  /**
   * 色环颜色
   */
  const colorSlider = reactive([255, 0, 0, 1])
  // inject
  // computed
  /**
   * 当前展示的基础颜色
   */
  const colorSliderView = computed(() => {
    // console.log(colorSlider)
    return `rgba(${colorSlider[0]}, ${colorSlider[1]}, ${colorSlider[2]}, ${colorSlider[3]})`
  })
  // watch
  /**
   * 用于在坐标发生变化时重新计算选域色块颜色
   */
  watch(colorSliderPos, () => {
    if (colorSliderPos[0] === 0) {
      [colorSlider[0], colorSlider[1], colorSlider[2]] = colorCalPoint[0]
    } else if (colorSliderPos[0] < colorSliderUnit) {
      [colorSlider[0],, colorSlider[2]] = colorCalPoint[1]
      // 计算第一区域
      colorSlider[1] = Math.floor(colorSliderPos[0] / colorSliderUnit * 255)
      // console.log('第一区域')
    } else if (colorSliderPos[0] < colorSliderUnit * 2) {
      [, colorSlider[1], colorSlider[2]] = colorCalPoint[2]
      // 计算第二区域
      colorSlider[0] = Math.floor(255 - (colorSliderPos[0] - colorSliderUnit) / colorSliderUnit * 255)
      // console.log('第二区域')
    } else if (colorSliderPos[0] < colorSliderUnit * 3) {
      [colorSlider[0], colorSlider[1]] = colorCalPoint[3]
      // 计算第三区域
      colorSlider[2] = Math.floor((colorSliderPos[0] - (colorSliderUnit * 2)) / colorSliderUnit * 255)
      // console.log('第三区域')
      // console.log(colorSlider)
    } else if (colorSliderPos[0] < colorSliderUnit * 4) {
      [colorSlider[0],, colorSlider[2]] = colorCalPoint[4]
      // 计算第四区域
      colorSlider[1] = Math.floor(255 - (colorSliderPos[0] - (colorSliderUnit * 3)) / colorSliderUnit * 255)
      // console.log('第四区域')
    } else if (colorSliderPos[0] < colorSliderUnit * 5) {
      [, colorSlider[1], colorSlider[2]] = colorCalPoint[5]
      // 计算第五区域
      colorSlider[0] = Math.floor((colorSliderPos[0] - (colorSliderUnit * 4)) / colorSliderUnit * 255)
      // console.log('第五区域')
    } else if (colorSliderPos[0] < colorSliderUnit * 6) {
      [colorSlider[0], colorSlider[1]] = colorCalPoint[6]
      // 计算第六区域
      colorSlider[2] = Math.floor(255 - (colorSliderPos[0] - (colorSliderUnit * 5)) / colorSliderUnit * 255)
      // console.log('第六区域')
    } else {
      // console.log('第七区域');
      [colorSlider[0], colorSlider[1], colorSlider[2]] = colorCalPoint[6]
    }
  }, { immediate: true })
  /**
   * 计算当前透明度
   */
  watch(alphaPos, () => {
    alphaSlider.value = 1 - alphaPos[0] / 200
  }, { immediate: true })
  // 事件方法
  function handleColorSliderMousedown (e: MouseEvent) {
    if (colorSliderDrag.value) return
    colorSliderDrag.value = true
    cbegin = (e.target as any).parentNode.getBoundingClientRect().x
  }

  function handleAlphaMousedown (e: MouseEvent) {
    if (alphaDrag.value) return
    alphaDrag.value = true
    abegin = (e.target as any).parentNode.getBoundingClientRect().x
  }

  function handleAlphaMousemove (e: MouseEvent) {
    if (!alphaDrag.value) return
    // console.log(e)
    alphaPos[0] = Math.max(Math.min(e.x - abegin, 200), 0)
  }

  function handleColorSliderMousemove (e: MouseEvent) {
    if (!colorSliderDrag.value) return
    // console.log(e)
    colorSliderPos[0] = Math.max(Math.min(e.x - cbegin, 200), 0)
  }
  /**
   * 鼠标弹起
   */
  function handleMouseup () {
    colorSliderDrag.value = false
    alphaDrag.value = false
  }

  /**
   * 颜色确认
   */
  function handleSure () {
    ctx.emit('update:modelValue', '#000')
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
    colorChoose,
    colorSlider,
    alphaSlider,
    colorSliderView,
    colorSliderPos,
    alphaPos,
    handleColorSliderMousedown,
    handleAlphaMousedown,
    handleSure
  }
}
