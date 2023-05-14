import { ref, onMounted, onUnmounted, getCurrentInstance } from 'vue'

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

  function toSelect (cb: any = undefined, ...args: any[]) {
    open.value = !open.value
    if (cb && cb instanceof Function) {
      setTimeout(() => {
        cb.apply(...args)
      })
    }
  }

  function toClose (cb: any = undefined, ...args: any[]) {
    open.value = false
    if (cb && cb instanceof Function) {
      setTimeout(() => {
        cb.apply(...args)
      })
    }
  }

  function toOpen (cb: any = undefined, ...args: any[]) {
    open.value = true
    if (cb && cb instanceof Function) {
      setTimeout(() => {
        cb.apply(...args)
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
