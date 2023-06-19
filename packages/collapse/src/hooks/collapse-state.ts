import { inject, computed, ref } from 'vue'
import type { Ref } from 'vue'

import openState from '@/hooks/open-state'

export default function (props: any) {
  const open = openState(props.autoRetract)
  const idGetter = inject('collapse-group-id', undefined)
  const nowChoose = inject('collapse-group-now-choose', ref(undefined)) as Ref
  const changeChoose = inject('collapse-group-change-choose', undefined) as ((id: number) => void) | undefined

  const id = idGetter ? (idGetter as () => number)() : -1

  const isOpen = computed(() => {
    // 当是属于手风琴模式才做的处理,auto-retract无效
    if (id !== -1) id === nowChoose.value ? open.toOpen() : open.toClose()
    return id === nowChoose?.value
  })

  function toChoose () {
    if (!props.needChange()) return
    if (changeChoose) changeChoose(open.open.value ? -1 : id)
    else open.toSelect()
  }

  return {
    ...open,
    id,
    isOpen,
    toChoose
  }
}
