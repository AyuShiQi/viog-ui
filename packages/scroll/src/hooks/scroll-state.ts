import { getCurrentInstance } from 'vue'
import type { ComponentInternalInstance } from 'vue'

import { DOMType } from '@/types/vue-types'

export default function () {
  const { proxy } = getCurrentInstance() as ComponentInternalInstance

  function scrollTo (x: number, y: number) {
    (proxy?.$refs.content as DOMType).scrollTo(x, y)
  }

  return {
    scrollTo
  }
}
