<template>
  <slot></slot>
</template>

<script lang="ts">
import { defineComponent, computed, provide, ref, watch } from 'vue'

import props from './props/group'

import { VueContext } from '@/types/vue-types'
import { GroupValueProps } from '@/types/radio-types'

import { groupValueState } from './hooks'

export default defineComponent({
  name: 'ViRadioGroup',
  props,
  setup (props: GroupValueProps, context: VueContext) {
    groupValueState(props, context, 'radio-group-value')
  }
})
</script>

<style lang="less">
  @import './css/radio.less';
</style>
