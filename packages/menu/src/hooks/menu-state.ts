import { provide, ref } from 'vue'
import IdDistributor from '../../../utils/communication/IdDistributor'

export default function () {
  const nowPick = ref(0)

  function toPick (newValue: number) {
    nowPick.value = newValue
  }

  provide('menu-id', IdDistributor())
  provide('to-pick', toPick)
  provide('now-pick', nowPick)
}
