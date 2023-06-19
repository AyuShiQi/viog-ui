import { getCurrentInstance, provide, ref } from 'vue'
import type { SetupContext } from 'vue'
import type { Router, RouteLocationNormalized } from 'vue-router'
import IdDistributor from '../../../utils/communication/IdDistributor'

export default function (props: any, ctx: SetupContext) {
  const instance = getCurrentInstance()!
  const router = instance.appContext.config.globalProperties.$router as Router
  const nowPick = ref(props.defaultId)

  provide('menu-id', IdDistributor()) // id分发器
  provide('menu-to-pick', toPick) // 去选择
  provide('menu-now-pick', nowPick) // 当前选择
  provide('menu-router', props.router) // 是否是router模式

  function toPick (newId: number, to?: string) {
    nowPick.value = newId
    ctx.emit('select', newId)
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
    const routerMap = new Map<string, number>()
    provide('menu-router-linker', routerLink)
    function routerLink (id: number, to: string) {
      routerMap.set(to, id)
    }

    try {
      router.afterEach((to: RouteLocationNormalized, from) => {
        if (routerMap.has(to.path)) nowPick.value = routerMap.get(to.path)
      })
    } catch (e) {
      if (e instanceof TypeError) console.error('[viog-ui]: 你并没有在项目中引入vue-router，menu无法正确跳转！')
      else console.error(e)
    }
  }
}
