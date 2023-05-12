import { provide, ref } from 'vue'
import type { SetupContext } from 'vue'
import IdDistributor from '../../../utils/communication/IdDistributor'

export default function (props: any, ctx: SetupContext) {
  const nowPick = ref(props.defaultId)

  provide('menu-id', IdDistributor())
  provide('to-pick', toPick)
  provide('now-pick', nowPick)

  function toPick (newId: number) {
    nowPick.value = newId
    ctx.emit('select', newId)
  }
}
