import { ref, onMounted, onUnmounted, getCurrentInstance } from 'vue'
import type { ComponentInternalInstance } from 'vue'

import { SelectDOM } from '@/types/select-types'

export default function () {
  const { proxy } = getCurrentInstance() as ComponentInternalInstance
  let listener: any
  const open = ref(false)

  onMounted(() => {
    listener = document.addEventListener('click', (e: any) => {
      if (!(proxy?.$refs.select as SelectDOM)?.contains(e.target)) open.value = false
    })
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

  return {
    open,
    toSelect
  }
}
