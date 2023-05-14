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
    if(props.router && to) router.push(to)
  }
  
}
