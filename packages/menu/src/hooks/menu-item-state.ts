import { inject, computed, useSlots } from 'vue'
import type { Ref, SetupContext } from 'vue'

export default function (props: any, ctx: SetupContext) {
  const id = (inject('menu-id') as () => number)()
  const toPick = inject('to-pick') as (id: number, to?: string) => void
  const nowPick = inject('now-pick') as Ref
  const prefix = useSlots().prefix

  const superIdCollector = inject('id-collector', undefined) as ((id: number) => void) | undefined
  if (superIdCollector) superIdCollector(id)
  // router default
  if(nowPick.value === id) toPick(id, props.id)

  const isChoose = computed(() => {
    return id === nowPick.value
  })

  function toChoose () {
    toPick(id, props.to)
  }

  return {
    isChoose,
    toChoose,
    prefix
  }
}
