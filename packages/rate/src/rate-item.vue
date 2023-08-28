<template>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
// 组件引用components
import rateItemState from './hooks/rate-item-state'

export default defineComponent({
  name: 'Vi',
  setup (props: any, ctx: SetupContext) {
    const rateItem = rateItemState()
  }
})
</script>

<style lang="less">
@import './css/rate-item.less';
</style>
