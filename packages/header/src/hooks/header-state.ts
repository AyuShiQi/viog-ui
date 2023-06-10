import { ref, onMounted, onBeforeUnmount } from 'vue'

export default function (retract: boolean) {
  const header = ref()
  const needRetract = ref(false)

  onMounted(() => {
    if (retract) {
      window.addEventListener('scroll', scrollListener)
    }
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', scrollListener)
  })

  let pre = 0
  function scrollListener (e: Event) {
    const { scrollTop } = document.documentElement
    scrollTop > pre ? needRetract.value = true : needRetract.value = false
    pre = scrollTop
  }

  return {
    header,
    needRetract
  }
}
