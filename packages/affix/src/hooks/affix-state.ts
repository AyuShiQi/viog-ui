import { ref, onMounted } from 'vue'

export default function (type: string, position: number | undefined) {
  const defaultHeight = ref(0)
  const affix = ref()
  const needFixed = ref(false)

  onMounted(() => {
    defaultHeight.value = affix.value.children[0].getBoundingClientRect().height
    if (!position) return

    type === 'top' ? topPosition() : bottomPosition()
    document.addEventListener('scroll', type === 'top' ? topPosition : bottomPosition)
  })

  function topPosition () {
    const { top } = affix.value.getBoundingClientRect()
    if (top < (position as number)) needFixed.value = true
    else needFixed.value = false
  }

  function bottomPosition () {
    const { bottom } = affix.value.getBoundingClientRect()
    if (window.innerHeight - bottom < (position as number)) needFixed.value = true
    else needFixed.value = false
  }

  return {
    affix,
    needFixed,
    defaultHeight
  }
}
