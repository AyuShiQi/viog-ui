// vue
import { ref, reactive, computed, onMounted, onBeforeUnmount, watch } from 'vue'
// vue type
import type { SetupContext } from 'vue'
// 组件type
// 外部hooks
// 内部hooks
// 外部模块
import { RGBtoHSV, HSVtoRGB, RGBtoHex, HextoRGB } from './rgb-hsv'
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
  /**
   * 色块板的
   */
  let bbeginx = 0
  let bbeginy = 0
  // DOM ref
  // ref
  const colorSliderDrag = ref(false)
  const alphaDrag = ref(false)
  const boardDrag = ref(false)
  const alphaSlider = ref(1)
  const hexColor = ref('000')
  // reactive
  const colorSliderPos = reactive([0, 0])
  const alphaPos = reactive([0, 0])
  const boardPos = reactive([0, 0])
  /**
   * 选中颜色rgba
   */
  const colorChoose = reactive([0, 0, 0, 1])
  const hsvChoose = reactive({
    h: 0,
    s: 0,
    v: 0
  })
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

  // 选中的颜色
  const colorView = computed(() => {
    return `rgba(${colorChoose[0]}, ${colorChoose[1]}, ${colorChoose[2]}, ${colorChoose[3]})`
  })
  // watch
  watch(hexColor, () => {
    // console.log(hexColor.value)
  })
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
   * 计算当前色相
   */
  watch(colorSlider, () => {
    // hsvChoose.h = Math.floor(colorSliderPos[0] / 200 * 360)
    const res = RGBtoHSV(colorSlider[0], colorSlider[1], colorSlider[2], colorSlider[3])
    // console.log(res)
    hsvChoose.h = res.h
  }, { immediate: true })
  /**
   * 计算当前透明度
   */
  watch(alphaPos, () => {
    alphaSlider.value = 1 - alphaPos[0] / 200
  }, { immediate: true })
  // 透明度变换
  watch(alphaSlider, () => {
    colorChoose[3] = alphaSlider.value
  })
  /**
   * 计算当前选择颜色饱和度与明度
   */
  watch(boardPos, () => {
    // 280 and 180
    // console.log('进入')
    hsvChoose.s = Math.round(boardPos[0] / 280 * 100)
    hsvChoose.v = 100 - Math.round(boardPos[1] / 180 * 100)
    // console.log(hsvChoose)
  }, { immediate: true })
  /**
   * 计算当前十六进制
   */
  watch(colorChoose, () => {
    hexColor.value = RGBtoHex(colorChoose)
  })
  /**
   * 计算当前选择颜色RGB
   */
  watch(hsvChoose, () => {
    // console.log(temp)
    [colorChoose[0], colorChoose[1], colorChoose[2]] = HSVtoRGB(hsvChoose.h, hsvChoose.s, hsvChoose.v)
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

  function handleBoardMousedown (e: MouseEvent) {
    if (boardDrag.value) return
    boardDrag.value = true
    const temp = (e.target as any).parentNode.getBoundingClientRect()
    bbeginx = temp.x
    bbeginy = temp.y
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

  function handleBoardMousemove (e: MouseEvent) {
    if (!boardDrag.value) return
    // console.log(e)
    boardPos[0] = Math.max(Math.min(e.x - bbeginx, 280), 0)
    boardPos[1] = Math.max(Math.min(e.y - bbeginy, 180), 0)
  }
  /**
   * 鼠标弹起
   */
  function handleMouseup () {
    colorSliderDrag.value = false
    alphaDrag.value = false
    boardDrag.value = false
  }

  /**
   * 颜色确认
   */
  function handleSure () {
    // console.log(RGBtoHex(colorChoose), hexColor.value)
    // 代表这个地方是拖拽器发生了变化
    if (RGBtoHex(colorChoose) === hexColor.value) ctx.emit('update:modelValue', '#' + hexColor.value)
    else {
      // input计算更改
      // console.log('enter')
      [colorChoose[0], colorChoose[1], colorChoose[2], colorChoose[3]] = HextoRGB(hexColor.value)
      ctx.emit('update:modelValue', '#' + hexColor.value)
    }
  }
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  onMounted(() => {
    window.addEventListener('mouseup', handleMouseup)
    window.addEventListener('mousemove', handleAlphaMousemove)
    window.addEventListener('mousemove', handleColorSliderMousemove)
    window.addEventListener('mousemove', handleBoardMousemove)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('mouseup', handleMouseup)
    window.removeEventListener('mousemove', handleAlphaMousemove)
    window.removeEventListener('mousemove', handleColorSliderMousemove)
    window.removeEventListener('mousemove', handleBoardMousemove)
  })

  return {
    hexColor,
    hsvChoose,
    colorChoose,
    colorView,
    colorSlider,
    alphaSlider,
    colorSliderView,
    colorSliderPos,
    alphaPos,
    boardPos,
    handleColorSliderMousedown,
    handleAlphaMousedown,
    handleBoardMousedown,
    handleSure
  }
}
