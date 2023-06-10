import { ref } from 'vue'

import lazyState from './lazy-state'

export default function (props: any) {
  const content = ref()

  function scrollTo (x: number, y: number) {
    content.value.scrollTo(x, y)
  }

  lazyState(props, content)

  return {
    content,
    scrollTo
  }
}
