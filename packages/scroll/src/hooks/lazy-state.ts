import { onMounted, onBeforeUnmount } from 'vue'
import type { Ref } from 'vue'

export default function (props: any, content: Ref) {
  let lock = true
  let lazyHeight = 0

  function handleScroll (e: any) {
    const { scrollTop, clientHeight, scrollHeight } = e.target

    if (lock && !props.finish && scrollTop + clientHeight >= scrollHeight - lazyHeight) {
      lock = false
      props.lazy().then(() => {
        lock = true
      }).catch(() => {
        lock = false
      })
    }
  }

  onMounted(() => {
    if (props.lazy != null) {
      // wait加载区的高度
      if (props.lazy !== null && props.wait !== 'none') {
        lazyHeight = 35
      }

      content.value.addEventListener('scroll', handleScroll)
    }
  })

  onBeforeUnmount(() => {
    if (props.lazy != null) content.value.removeEventListener('scroll', handleScroll)
  })
}
