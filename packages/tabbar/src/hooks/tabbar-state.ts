// vue
import { ref, provide, watch, getCurrentInstance } from 'vue'
// vue type
import type { SetupContext } from 'vue'
// 组件type
import { Router } from 'vue-router'
// 外部hooks
// 内部hooks
// 外部模块
import IdDistributor from '../../../utils/communication/IdDistributor'

export default function (props: any, ctx: SetupContext) {
  // 普通常量
  const routerMap = new Map<string, number>()
  const instance = getCurrentInstance()
  const router = instance ? instance.appContext.config.globalProperties.$router as Router : null
  // DOM ref
  // ref
  const nowPick = ref(-1)
  // reactive
  // inject
  // computed
  // 事件方法
  // 方法
  function toPick (id: number) {
    nowPick.value = id
    ctx.emit('pick', id)
  }

  function getRouterMap (to: string, id: number) {
    routerMap.set(to, id)
  }

  function pushState (to: string) {
    router?.push(to)
  }
  // 普通function函数
  // provide
  provide('tabbar-id', IdDistributor()) // id分发器
  provide('tabbar-to-pick', toPick) // 去选择
  provide('tabbar-now-pick', nowPick) // 当前选择
  provide('tabbar-get-router-map', getRouterMap)
  provide('tabbar-push-state', pushState)

  if (router) {
    watch(router.currentRoute, () => {
      console.log('tabbar', router.currentRoute.value.path)
      if (routerMap.has(router.currentRoute.value.path)) nowPick.value = routerMap.get(router.currentRoute.value.path) as number
    }, { immediate: true })
  }
  // 生命周期
  return {
    nowPick
  }
}
