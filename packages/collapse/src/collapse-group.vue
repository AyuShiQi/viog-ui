<template>
  <div class="vi-collapse-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

import props from './props/collapse-group'

import collapseGroupState from './hooks/collapse-group-state'

export default defineComponent({
  name: 'ViCollapseGroup',
  props,
  setup (props: any, ctx: SetupContext) {
    const collapseGroup = collapseGroupState(props)
  }
})
</script>

<style lang="less">
@import './css/collapse-group.less';
</style>
