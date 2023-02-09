<template>
  <slot></slot>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

import props from './props/group'

import type { GroupValueProps } from '@/types/checkbox-types'

import { groupValueState } from './hooks'

export default defineComponent({
  name: 'ViCheckboxGroup',
  props,
  setup (props: GroupValueProps, context: SetupContext) {
    groupValueState(props, context, 'checkbox-group-value')
  }
})
</script>

<style lang="less">
</style>
