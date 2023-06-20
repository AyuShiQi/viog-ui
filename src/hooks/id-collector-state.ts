import { ref, provide } from 'vue'

export default function (defaultId: number, compName: string) {
  const maxId = ref(defaultId)
  provide(`${compName}-id-collector`, idCollector)

  function idCollector (id: number) {
    maxId.value = id
  }

  return {
    maxId
  }
}
