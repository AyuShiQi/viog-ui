import { getCurrentInstance, provide, ref, watch, reactive } from 'vue'
import type { SetupContext } from 'vue'
import type { Router } from 'vue-router'
import IdDistributor from '../../../utils/communication/IdDistributor'

export default function (props: any, ctx: SetupContext) {
  const instance = getCurrentInstance()!
  const router = instance.appContext.config.globalProperties.$router as Router
  const nowPick = ref(props.defaultId)

  provide('menu-id', IdDistributor()) // id分发器
  provide('menu-to-pick', toPick) // 去选择
  provide('menu-now-pick', nowPick) // 当前选择
  provide('menu-router', props.router) // 是否是router模式

  function toPick (newId: number, value: any, to?: string) {
    nowPick.value = newId
    ctx.emit('select', newId, value)
    // router 跳转
    if (props.router && to) {
      try {
        router.push(to).catch((err) => {
          console.error(err)
        })
      } catch (e) {
        if (e instanceof TypeError) console.error('[viog-ui]: 你并没有在项目中引入vue-router，menu无法正确跳转！')
        else console.error(e)
      }
    }
  }

  // router 相关操作
  if (props.router) {
    // 用于收集id对应的router跳转地址
    const routerMap = reactive(new Map<string, number>())
    provide('menu-router-linker', routerLink)
    function routerLink (id: number, to: string) {
      routerMap.set(to, id)
    }

    try {
      watch(routerMap, () => {
        if (routerMap.has(router.currentRoute.value.path)) nowPick.value = routerMap.get(router.currentRoute.value.path)
      }, { immediate: true })
      /**
       * 监听当前路由
       */
      watch(router.currentRoute, () => {
        // console.log('menu', router.currentRoute.value.path, routerMap.get(router.currentRoute.value.path))
        if (routerMap && routerMap.has(router.currentRoute.value.path)) nowPick.value = routerMap.get(router.currentRoute.value.path)
      }, { immediate: true })
    } catch (e) {
      if (e instanceof TypeError) console.error('[viog-ui]: 你并没有在项目中引入vue-router，menu无法正确跳转！')
      else console.error(e)
    }
  }
}
