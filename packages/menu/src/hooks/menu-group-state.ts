import { ref, inject, computed, onUpdated, provide, reactive, watch } from 'vue'
import type { MenuId, ToPick, NowPick, MenuRouterLinker } from '../type/menu'
import type { MenuGroupIdCollector } from '../type/menu-group'
// import idCollectorState from '@/hooks/id-collector-state'

export default function (props: any) {
  if (!props.scalable || !props.option) return {}
  // menu-item id
  const id = (inject('menu-id') as MenuId)()
  // 去选择本个菜单
  const toPick = inject('menu-to-pick') as ToPick
  // 当前选择的菜单id
  const nowPick = inject('menu-now-pick') as NowPick

  const collapse = ref()
  // 子id收集器
  const idSet = reactive(new Set<number>([id]))

  // id：value收集器
  const menuValueCollector = inject('menu-value-collector', undefined) as ((id: number, value: string) => void) | undefined
  if (menuValueCollector) menuValueCollector(id, props.value ?? id)
  if (nowPick.value === id) toPick(id, props.value, props.to)

  // 来自父的id收集器
  const superIdCollector = inject('menu-group-id-collector', undefined) as MenuGroupIdCollector

  // menu跳转路由收集
  const routerLinker = inject('menu-router-linker', undefined) as MenuRouterLinker
  if (routerLinker && props.scalable && props.option && props.to) routerLinker(id, props.to)

  // 是否被选中
  const isChoose = computed(() => idSet.has(nowPick.value))

  watch(isChoose, () => {
    isChoose.value ? collapse.value?.toOpen() : collapse.value?.toClose()
  }, { immediate: true })

  watch(idSet, () => {
    if (superIdCollector) superIdCollector(...idSet)
  }, { immediate: true })

  function idCollector (...ids: number[]) {
    for (const id of ids) {
      idSet.add(id)
    }
  }

  function toChoose (): false {
    if (props.scalable && props.option) toPick(id, props.value, props.to)
    return false
  }

  provide('menu-group-id-collector', idCollector)

  onUpdated(() => {
    if (menuValueCollector) menuValueCollector(id, props.value ?? id)
  })

  return {
    isChoose,
    toChoose,
    collapse
  }
}
