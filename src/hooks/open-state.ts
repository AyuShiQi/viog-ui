import { ref, onMounted, onUnmounted } from 'vue'

type openOption = {
  preCb?: () => boolean,
  afterCb?: () => any
}

export default function (needBlur = true, openMode = 'click') {
  let listener: any
  const openDOM = ref()
  const open = ref(false)

  onMounted(() => {
    if (needBlur && openMode !== 'hover') {
      listener = document.addEventListener(openMode, (e: any) => {
        if (openDOM.value instanceof Element) {
          if (!openDOM.value.contains(e.target)) open.value = false
        } else {
          if (!openDOM.value.$el.contains(e.target)) open.value = false
        }
      })
    }
  })

  onUnmounted(() => {
    document.removeEventListener(openMode, listener)
  })

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

  return {
    openDOM,
    open,
    toSelect,
    toClose,
    toOpen
  }
}
