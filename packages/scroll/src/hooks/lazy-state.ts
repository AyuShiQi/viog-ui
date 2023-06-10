import { onMounted, onBeforeMount, getCurrentInstance } from 'vue'
import type { ComponentInternalInstance } from 'vue'

import { DOMType } from '@/types/vue-types'
import { ScrollProps } from '@/types/scroll-types'

export default function (props: ScrollProps) {
  let listener: any
  const { proxy } = getCurrentInstance() as ComponentInternalInstance
  onMounted(() => {
    if (props.lazy != null) {
      let lock = true
      let lazyHeight = 0

      // wait加载区的高度
      if (props.lazy !== null && props.wait !== 'none') {
        lazyHeight = 35
      }

      listener = (proxy?.$refs.content as DOMType).addEventListener('scroll', (e: any) => {
        const { scrollTop, clientHeight, scrollHeight } = e.target

        if (lock && !props.finish && scrollTop + clientHeight >= scrollHeight - lazyHeight) {
          lock = false
          props.lazy().then(() => {
            lock = true
          }).catch(() => {
            lock = false
          })
        }
      })
    }
  })

  onBeforeMount(() => {
    if (props.lazy != null) (proxy?.$refs.content as DOMType).removeEventListener('scroll', listener)
  })
}
