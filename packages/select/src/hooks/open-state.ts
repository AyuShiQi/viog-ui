import { ref, onMounted, onUnmounted } from 'vue'

export default function () {
  let listener: any
  const open = ref(false)

  // select DOM
  const select = ref()
  onMounted(() => {
    listener = document.addEventListener('click', (e: any) => {
      if (select.value.contains(e.target)) open.value = false
    })
  })

  onUnmounted(() => {
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
