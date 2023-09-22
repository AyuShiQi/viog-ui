<template>
  <div class="vi-tab-card"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/tab-card'
// 组件引用components
import tabCardState from './hooks/tab-card-state'

export default defineComponent({
  name: 'ViTabCard',
  props,
  setup (props: any, ctx: SetupContext) {
    const tabCard = tabCardState()
    return tabCard
  }
})
</script>

<style lang="less">
@import './css/tab-card.less';
</style>
