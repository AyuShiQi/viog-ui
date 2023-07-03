import { ref } from 'vue'

import lazyState from './lazy-state'
import scrollBarState from './scroll-bar-state'

export default function (props: any) {
  const content = ref()

  function scrollTo (x: number, y: number) {
    content.value.scrollTo(x, y)
  }

  const scrollBar = scrollBarState(content, props)
  lazyState(props, content)

  return {
    ...scrollBar,
    content,
    scrollTo
  }
}
