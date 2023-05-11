import { provide, ref } from 'vue'
import IdDistributor from '../../../utils/communication/IdDistributor'

export default function (props: any) {
  const accordionChoose = ref(0)

  if (props.accordion) {
    provide('id', IdDistributor())

    provide('change-choose', function (newChoose: number) {
      accordionChoose.value = newChoose
    })

    provide('now-choose', accordionChoose)
  }
}
