// vue
import { inject, computed, getCurrentInstance, watch } from 'vue'
// vue type
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any) {
  const idDistributor = inject('tabbar-id', undefined) as any// id分发器
  // 普通常量
  const id = idDistributor ? idDistributor() : -1
  // DOM ref
  // ref
  // reactive
  // inject
  const toPick = inject('tabbar-to-pick', undefined) as any// 去选择
  const nowPick = inject('tabbar-now-pick', undefined) as any// 当前选择
  const getRouterMap = inject('tabbar-get-router-map', undefined) as any
  const pushState = inject('tabbar-push-state', undefined) as any
  // computed
  /**
   * 当前是否被选择
   */
  const beChoosed = computed(() => nowPick ? nowPick.value === id : false)
  // 事件方法
  function handleClick () {
    // console.log(props.to)
    if (toPick) toPick(id)
    if (pushState && props.to) {
      pushState(props.to)
    }
  }
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  /**
   * 传递to路径
   */
  if (props.to && getRouterMap) {
    getRouterMap(props.to, id)
  }
  return {
    beChoosed,
    handleClick
  }
}
