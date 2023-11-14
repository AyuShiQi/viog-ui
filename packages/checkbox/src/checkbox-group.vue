<template>
  <div class="vi-checkbox-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { SetupContext, defineComponent } from 'vue'

import props from './props/group'

import type { GroupValueProps } from '@/types/checkbox-types'

import { groupValueState } from './hooks'

export default defineComponent({
  name: 'ViCheckboxGroup',
  props,
  setup (props: GroupValueProps, ctx: SetupContext) {
    groupValueState(props, ctx)
  }
})
</script>

<style lang="less">
</style>
