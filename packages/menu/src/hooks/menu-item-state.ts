import { inject, computed, useSlots } from 'vue'
import type { SetupContext } from 'vue'

import type { MenuId, ToPick, NowPick, MenuRouterLinker } from '../type/menu'
import type { MenuGroupIdCollector } from '../type/menu-group'

export default function (props: any, ctx: SetupContext) {
  const id = (inject('menu-id') as MenuId)()
  const toPick = inject('menu-to-pick') as ToPick
  const nowPick = inject('menu-now-pick') as NowPick
  const prefix = useSlots().prefix

  const superIdCollector = inject('menu-group-id-collector', undefined) as MenuGroupIdCollector
  if (superIdCollector) superIdCollector(id)
  // router default
  if (nowPick.value === id) toPick(id, props.id)

  // menu跳转路由收集
  const routerLinker = inject('menu-router-linker', undefined) as MenuRouterLinker
  if (routerLinker && props.to) routerLinker(id, props.to)

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
