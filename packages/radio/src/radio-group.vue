<template>
  <div class="vi-radio-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

import props from './props/group'

import { GroupValueProps } from '@/types/radio-types'

import groupValueState from './hooks/group-value-state'

export default defineComponent({
  name: 'ViRadioGroup',
  props,
  // emits: ['change', 'update:modelValue'],
  setup (props: GroupValueProps, context: SetupContext) {
    groupValueState(props, context, 'radio-group-value')
  }
})
</script>

<style lang="less">
  @import './css/radio.less';
</style>
