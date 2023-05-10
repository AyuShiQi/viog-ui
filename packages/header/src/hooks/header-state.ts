import { ref, onMounted, onUnmounted } from 'vue'

export default function (retract: boolean) {
  const header = ref()
  const needRetract = ref(false)

  onMounted(() => {
    if (retract) {
      window.addEventListener('scroll', scrollListener)
    }
  })

  onUnmounted(() => {
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
