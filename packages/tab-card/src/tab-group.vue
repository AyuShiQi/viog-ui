<template>
  <div class="vi-tab-group"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/tab-group'
// 组件引用components
import tabGroupState from './hooks/tab-group-state'

export default defineComponent({
  name: 'ViTabGroup',
  props,
  setup (props: any, ctx: SetupContext) {
    const tabGroup = tabGroupState()
    return tabGroup
  }
})
</script>

<style lang="less">
@import './css/tab-group.less';
</style>
