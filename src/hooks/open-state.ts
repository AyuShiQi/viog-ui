import { ref, onMounted, onUnmounted, getCurrentInstance } from 'vue'

type openOption = {
  preCb?: () => boolean,
  afterCb?: () => any
}

export default function (needBlur = true, openMode = 'click') {
  // const { proxy } = getCurrentInstance() as ComponentInternalInstance
  let listener: any
  const openDOM = ref()
  const open = ref(false)

  onMounted(() => {
    if (needBlur && openMode === 'click') {
      listener = document.addEventListener('click', (e: any) => {
        if (!openDOM.value.contains(e.target)) open.value = false
      })
    }
  })

  onUnmounted(() => {
    document.removeEventListener('click', listener)
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
