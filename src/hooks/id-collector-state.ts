import { ref, provide } from 'vue'

export default function (defaultId: number) {
  const maxId = ref(defaultId)
  provide('id-collector', idCollector)

  function idCollector (id: number) {
    maxId.value = id
  }

  return {
    maxId
  }
}
