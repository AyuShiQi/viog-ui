import { inject, computed, ref, watch } from 'vue'
import type { Ref, SetupContext } from 'vue'

import openState from '@/hooks/open-state'

export default function (props: any, ctx: SetupContext) {
  const open = openState(props.autoRetract, 'click', props.modelValue ?? false)
  const idGetter = inject('collapse-group-id', undefined)
  const nowChoose = inject('collapse-group-now-choose', ref(undefined)) as Ref
  const changeChoose = inject('collapse-group-change-choose', undefined) as ((id: number) => void) | undefined

  const id = idGetter ? (idGetter as () => number)() : -1

  const originModelValue = computed(() => props.modelValue)
  const isOpen = computed(() => {
    // 当是属于手风琴模式才做的处理,auto-retract无效
    if (id !== -1) id === nowChoose.value ? open.toOpen() : open.toClose()
    return id === nowChoose?.value
  })

  watch(originModelValue, () => {
    if (originModelValue.value !== open.open.value) open.open.value = originModelValue.value
  }, { immediate: true })

  watch(open.open, () => {
    if (originModelValue.value !== open.open.value) ctx.emit('update:modelValue', open.open.value)
  }, { immediate: true })

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
