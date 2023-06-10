import { ref, onMounted, onBeforeUnmount, getCurrentInstance } from 'vue'
import type { ComponentInternalInstance } from 'vue'

import { SelectDOM } from '@/types/select-types'

export default function () {
  const { proxy } = getCurrentInstance() as ComponentInternalInstance
  let listener: any
  const open = ref(false)

  // select DOM
  const select = ref()
  onMounted(() => {
    listener = document.addEventListener('click', (e: any) => {
      if (!(proxy?.$refs.select as SelectDOM)?.contains(e.target)) open.value = false
    })
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', listener)
  })

  function toSelect () {
    open.value = !open.value
  }

  return {
    open,
    toSelect
  }
}
