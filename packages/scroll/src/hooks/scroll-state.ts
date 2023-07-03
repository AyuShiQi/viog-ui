import { SetupContext, ref } from 'vue'

import lazyState from './lazy-state'
import scrollBarState from './scroll-bar-state'

export default function (props: any, ctx: SetupContext) {
  const content = ref()

  function scrollTo (x: number, y: number) {
    content.value.scrollTo(x, y)
  }

  function lookScroll (e: Event) {
    ctx.emit('scroll', e)
  }

  const scrollBar = scrollBarState(content, props)
  lazyState(props, content)

  return {
    lookScroll,
    ...scrollBar,
    content,
    scrollTo
  }
}
