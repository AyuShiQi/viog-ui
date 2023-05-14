import { getCurrentInstance, provide, ref } from 'vue'
import type { SetupContext } from 'vue'
import type { Router } from 'vue-router'
import IdDistributor from '../../../utils/communication/IdDistributor'

export default function (props: any, ctx: SetupContext) {
  const instance = getCurrentInstance()!
  const router = instance.appContext.config.globalProperties.$router as Router
  const nowPick = ref(props.defaultId)

  provide('menu-id', IdDistributor())
  provide('to-pick', toPick)
  provide('now-pick', nowPick)
  provide('menu-router', props.router)

  function toPick (newId: number, to?: string) {
    nowPick.value = newId
    ctx.emit('select', newId)
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
}
