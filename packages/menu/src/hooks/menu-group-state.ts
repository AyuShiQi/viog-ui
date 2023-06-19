import { ref, inject, computed, onMounted } from 'vue'

import type { MenuId, ToPick, NowPick, MenuRouterLinker } from '../type/menu'
import type { MenuGroupIdCollector } from '../type/menu-group'

import idCollectorState from '@/hooks/id-collector-state'

export default function (props: any) {
  if (!props.scalable || !props.option) return {}

  const collapse = ref()
  const id = (inject('menu-id') as MenuId)()
  const toPick = inject('menu-to-pick') as ToPick
  const nowPick = inject('menu-now-pick') as NowPick

  const idCollector = idCollectorState(id, 'menu-group')
  const superIdCollector = inject('menu-group-id-collector', undefined) as MenuGroupIdCollector
  if (nowPick.value === id) toPick(id, props.id)

  // menu跳转路由收集
  const routerLinker = inject('menu-router-linker', undefined) as MenuRouterLinker
  if (routerLinker && props.scalable && props.option && props.to) routerLinker(id, props.to)

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
