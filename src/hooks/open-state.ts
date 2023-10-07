import { ref, onMounted, onBeforeUnmount } from 'vue'

type openOption = {
  preCb?: () => boolean,
  afterCb?: () => any
}

/**
 * open功能hooks，包含控制open的ref，打开、关闭、变换状态、失焦关闭等功能
 * 你需要为进行操作的元素绑定openDOM的ref
 * @param needBlur 是否需要失焦关闭功能
 * @param openMode 打开方式(必须是一个有效的事件)
 * @returns {}
 */
export default function (needBlur = true, openMode = 'click') {
  const openDOM = ref()
  const open = ref(false)

  function toSelect (option: openOption = {}) {
    const { preCb, afterCb } = option
    if (preCb && !preCb()) return
    open.value = !open.value
    if (afterCb) {
      setTimeout(() => {
        afterCb()
      })
    }
  }

  function toClose (option: openOption = {}) {
    const { preCb, afterCb } = option
    if (preCb && !preCb()) return
    open.value = false
    if (afterCb) {
      setTimeout(() => {
        afterCb()
      })
    }
  }

  function toOpen (option: openOption = {}) {
    const { preCb, afterCb } = option
    if (preCb && !preCb()) return
    open.value = true
    if (afterCb) {
      setTimeout(() => {
        afterCb()
      })
    }
  }

  /**
   * 失焦收回处理
   */
  function blurOption (e: any) {
    if (openDOM.value instanceof Element) {
      if (!openDOM.value.contains(e.target)) open.value = false
    } else {
      if (openDOM?.value?.$el && !openDOM.value.$el.contains(e.target)) open.value = false
    }
  }

  onMounted(() => {
    if (needBlur && openMode !== 'hover') {
      document.addEventListener('mousedown', blurOption)
    }
  })

  onBeforeUnmount(() => {
    document.removeEventListener('mousedown', blurOption)
  })

  return {
    openDOM,
    open,
    toSelect,
    toClose,
    toOpen
  }
}
