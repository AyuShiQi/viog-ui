import { provide, ref } from 'vue'
import IdDistributor from '../../../utils/communication/IdDistributor'

export default function (props: any) {
  const accordionChoose = ref(-1)

  if (props.accordion) {
    provide('collapse-group-id', IdDistributor()) // id分发器

    provide('collapse-group-change-choose', function (newChoose: number) { // 更改选择
      accordionChoose.value = newChoose
    })

    provide('collapse-group-now-choose', accordionChoose) // 当前选择
  }
}
