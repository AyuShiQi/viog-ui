// vue
import { ref, reactive, computed, onMounted, onBeforeUnmount, watch } from 'vue'
// vue type
import type { SetupContext } from 'vue'
// 组件type
// 外部hooks
import { formTargetStateRef } from '@/hooks/form-target-state'
// 内部hooks
// 外部模块
import { RGBtoHSV, HSVtoRGB, RGBtoHex, HextoRGB } from './rgb-hsv'
// const colorCalMap = [[0, 1, 0], [-1, 0, 0], [0, 0, 1], [0, -1, 0], [1, 0, 0], [1, 0, 1]]
// const colorCalPoint = [[255, 0, 0], [255, 255, 0], [0, 255, 0], [0, 255, 255], [0, 0, 255], [255, 0, 255], [255, 0, 0]]
// const colorSliderUnit = 200 / 6

export default function (props: any, ctx: SetupContext) {
  // 普通常量
  const sliderLen = 200
  const boardWidth = 280
  const boardHeight = 180
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
  const colorSliderH = ref(0)
  // reactive
  const colorSliderPos = reactive([0, 0])
  const alphaPos = reactive([0, 0])
  const boardPos = reactive([0, 0])
  /**
   * 选中颜色rgba
   */
  const colorChoose = reactive([255, 0, 0, 1])
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

  const pickValue = computed(() => props.modelValue)

  // watch
  // 在选色条坐标发生变化后变化调色板颜色(色相改变)
  watch(colorSliderPos, () => {
    getColorSliderHsv()
    changeColorSlider()
  }, { immediate: true })

  // 就算当前透明度并更改
  watch(alphaPos, () => {
    alphaSlider.value = 1 - alphaPos[0] / 200
    colorChoose[3] = alphaSlider.value
  }, { immediate: true })

  // 调色板坐标发生改变时，计算当前选择颜色饱和度与明度
  watch(boardPos, () => {
    changeChooseSV()
  }, { immediate: true })

  // choose color 改变时，计算当前的16进制表示
  watch(colorChoose, () => {
    hexColor.value = RGBtoHex(colorChoose)
  })

  // 计算选中颜色RGB
  watch(hsvChoose, () => {
    // console.log(temp)
    [colorChoose[0], colorChoose[1], colorChoose[2]] = HSVtoRGB(hsvChoose.h, hsvChoose.s, hsvChoose.v)
  }, { immediate: true })

  // 事件方法
  function handleColorSliderMousedown (e: Event) {
    if (colorSliderDrag.value) return
    e.stopPropagation()
    colorSliderDrag.value = true
    cbegin = (e.target as any).parentNode.getBoundingClientRect().x
  }

  function handleAlphaMousedown (e: Event) {
    if (alphaDrag.value) return
    e.stopPropagation()
    alphaDrag.value = true
    abegin = (e.target as any).parentNode.getBoundingClientRect().x
  }

  function handleBoardMousedown (e: Event) {
    if (boardDrag.value) return
    e.stopPropagation()
    boardDrag.value = true
    const temp = (e.target as any).parentNode.getBoundingClientRect()
    bbeginx = temp.x
    bbeginy = temp.y
  }

  function handleAlphaMousemove (e: MouseEvent) {
    if (!alphaDrag.value) return
    // console.log(e)
    alphaPos[0] = Math.max(Math.min(e.x - abegin, sliderLen), 0)
  }

  function handleAlphaTouchmove (e: TouchEvent) {
    if (!alphaDrag.value) return
    e.stopPropagation()
    // console.log(e)
    alphaPos[0] = Math.max(Math.min(e.changedTouches[0]?.clientX - abegin, sliderLen), 0)
  }

  function handleColorSliderMousemove (e: MouseEvent) {
    if (!colorSliderDrag.value) return
    // console.log(e)
    colorSliderPos[0] = Math.max(Math.min(e.x - cbegin, sliderLen), 0)
  }

  function handleColorSliderTouchmove (e: TouchEvent) {
    if (!colorSliderDrag.value) return
    e.stopPropagation()
    // console.log(e)
    colorSliderPos[0] = Math.max(Math.min(e.changedTouches[0]?.clientX - cbegin, sliderLen), 0)
  }

  function handleBoardMousemove (e: MouseEvent) {
    if (!boardDrag.value) return
    // console.log(e)
    boardPos[0] = Math.max(Math.min(e.x - bbeginx, boardWidth), 0)
    boardPos[1] = Math.max(Math.min(e.y - bbeginy, boardHeight), 0)
  }

  function handleBoardTouchmove (e: TouchEvent) {
    if (!boardDrag.value) return
    e.stopPropagation()
    // console.log(e)
    boardPos[0] = Math.max(Math.min(e.changedTouches[0]?.clientX - bbeginx, boardWidth), 0)
    boardPos[1] = Math.max(Math.min(e.changedTouches[0]?.clientY - bbeginy, boardHeight), 0)
  }

  function handleTransparent () {
    ctx.emit('update:modelValue', 'transparent')
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
      const rgb = HextoRGB(hexColor.value)
      const hsv = RGBtoHSV(rgb[0], rgb[1], rgb[2], rgb[3])
      // console.log(rgb, hsv, hex)
      // 反向计算colorSliderPos和alphaSliderPos
      // 计算colorSliderPos
      colorSliderPos[0] = hsv.h * sliderLen / 360
      // 计算alphaPos
      alphaPos[0] = sliderLen - hsv.a * sliderLen
      // 计算色盘坐标
      boardPos[0] = hsv.s * boardWidth / 100
      boardPos[1] = (100 - hsv.v) * boardHeight / 100
      // console.log(boardPos)
    }
  }
  // 方法
  /**
   * 获取调色板色相
   */
  function getColorSliderHsv () {
    colorSliderH.value = Math.round(colorSliderPos[0] / sliderLen * 360)
  }

  /**
   * 通过h色相转换调色板颜色
   */
  function changeColorSlider () {
    // console.log(colorSliderH.value)
    [colorSlider[0], colorSlider[1], colorSlider[2]] = HSVtoRGB(colorSliderH.value, 100, 100)
    // 改变选中颜色色相
    hsvChoose.h = colorSliderH.value
  }

  /**
   * 初始化操作
   */
  function init () {
    // 首次颜色选中
    const rgb = HextoRGB(props.modelValue.slice(1))
    const hsv = RGBtoHSV(rgb[0], rgb[1], rgb[2], rgb[3])
    // console.log(rgb, hsv)
    // 反向计算colorSliderPos和alphaSliderPos
    // 计算colorSliderPos
    colorSliderPos[0] = hsv.h * sliderLen / 360
    // 计算alphaPos
    alphaPos[0] = sliderLen - hsv.a * sliderLen
    // 计算色盘坐标
    boardPos[0] = hsv.s * boardWidth / 100
    boardPos[1] = (100 - hsv.v) * boardHeight / 100
  }

  /**
   * 改变饱和度和明度
   */
  function changeChooseSV () {
    hsvChoose.s = Math.round(boardPos[0] / boardWidth * 100)
    hsvChoose.v = 100 - Math.round(boardPos[1] / boardHeight * 100)
  }
  // 普通function函数
  // provide
  // 生命周期
  onMounted(() => {
    init()
    window.addEventListener('mouseup', handleMouseup)
    window.addEventListener('touchend', handleMouseup)
    window.addEventListener('mousemove', handleAlphaMousemove)
    window.addEventListener('mousemove', handleColorSliderMousemove)
    window.addEventListener('mousemove', handleBoardMousemove)
    window.addEventListener('touchmove', handleAlphaTouchmove)
    window.addEventListener('touchmove', handleColorSliderTouchmove)
    window.addEventListener('touchmove', handleBoardTouchmove)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('mouseup', handleMouseup)
    window.removeEventListener('touchend', handleMouseup)
    window.removeEventListener('mousemove', handleAlphaMousemove)
    window.removeEventListener('mousemove', handleColorSliderMousemove)
    window.removeEventListener('mousemove', handleBoardMousemove)
    window.removeEventListener('touchmove', handleAlphaTouchmove)
    window.removeEventListener('touchmove', handleColorSliderTouchmove)
    window.removeEventListener('touchmove', handleBoardTouchmove)
  })

  if (props.name) formTargetStateRef(props.name, pickValue)

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
    handleTransparent,
    handleSure
  }
}
