// vue
import { inject, computed, getCurrentInstance } from 'vue'
// vue type
// 组件type
import { Router } from 'vue-router'
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any) {
  const idDistributor = inject('tabbar-id', undefined) as any// id分发器
  // 普通常量
  const id = idDistributor ? idDistributor() : -1
  const instance = getCurrentInstance()
  const router = instance ? instance.appContext.config.globalProperties.$router as Router : null
  // DOM ref
  // ref
  // reactive
  // inject
  const toPick = inject('tabbar-to-pick', undefined) as any// 去选择
  const nowPick = inject('tabbar-now-pick', undefined) as any// 当前选择
  // computed
  /**
   * 当前是否被选择
   */
  const beChoosed = computed(() => nowPick ? nowPick.value === id : false)
  // 事件方法
  function handleClick () {
    // console.log(props.to)
    if (toPick) toPick(id)
    if (router && props.to) {
      router.push(props.to)
    }
  }
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  router?.afterEach((to) => {
    console.log('tabbar', to.path)
    if (props.to && to.path === props.to && toPick) toPick(id)
  })
  return {
    beChoosed,
    handleClick
  }
}
