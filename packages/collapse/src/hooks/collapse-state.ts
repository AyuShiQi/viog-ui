import { inject, computed, ref } from 'vue'
import type { Ref } from 'vue'

import openState from '@/hooks/open-state'

export default function (props: any) {
  const open = openState(props.autoRetract)
  const idGetter = inject('id', undefined)
  const id = idGetter ? (idGetter as () => number)() : 0
  const nowChoose = inject('now-choose', ref(undefined)) as Ref
  const changeChoose = inject('change-choose', undefined) as ((id: number) => void) | undefined

  const isOpen = computed(() => {
    if (id !== 0) id === nowChoose.value ? open.toOpen() : open.toClose()
    return id === nowChoose?.value
  })

  function toChoose () {
    if (changeChoose) changeChoose(open.open.value ? 0 : id)
    open.toSelect()
  }

  return {
    ...open,
    id,
    isOpen,
    toChoose
  }
}
