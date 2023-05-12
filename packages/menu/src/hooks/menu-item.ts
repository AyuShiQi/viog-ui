import { inject, computed } from 'vue'
import type { Ref } from 'vue'

export default function () {
  const id = (inject('menu-id') as () => number)()
  const toPick = inject('to-pick') as (id: number) => void
  const nowPick = inject('now-pick') as Ref

  const superIdCollector = inject('id-collector', undefined) as ((id: number) => void) | undefined
  if (superIdCollector) superIdCollector(id)

  const isChoose = computed(() => {
    return id === nowPick.value
  })

  function toChoose () {
    toPick(id)
  }

  return {
    isChoose,
    toChoose
  }
}
