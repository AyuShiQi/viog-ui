import { provide, ref } from 'vue'

export default function (props: any) {
  const accordionChoose = ref(0)

  function idGetter () {
    let id = 1
    return () => id++
  }

  if (props.accordion) {
    provide('id', idGetter())

    provide('change-choose', function (newChoose: number) {
      accordionChoose.value = newChoose
    })

    provide('now-choose', accordionChoose)
  }
}
