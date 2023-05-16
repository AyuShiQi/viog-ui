import { ref, inject, computed, onMounted } from 'vue'
import type { Ref } from 'vue'

import idCollectorState from '@/hooks/id-collector-state'

export default function (props: any) {
  if (!props.scalable || !props.option) return {}

  const collapse = ref()
  const id = (inject('menu-id') as () => number)()
  const toPick = inject('to-pick') as (id: number, to: string) => void
  const nowPick = inject('now-pick') as Ref

  const idCollector = idCollectorState(id)
  const superIdCollector = inject('id-collector', undefined) as ((id: number) => void) | undefined
  if (nowPick.value === id) toPick(id, props.id)

  const isChoose = computed(() => {
    isInRange() ? collapse.value?.toOpen() : collapse.value?.toClose()
    return isInRange()
  })

  function toChoose (): false {
    if (props.scalable && props.option) toPick(id, props.to)
    return false
  }

  function isInRange (): boolean {
    return id <= nowPick.value && nowPick.value <= idCollector.maxId.value
  }

  onMounted(() => {
    if (superIdCollector) superIdCollector(idCollector.maxId.value)
    isInRange() ? collapse.value.toOpen() : collapse.value.toClose()
  })

  return {
    isChoose,
    toChoose,
    collapse
  }
}
