<template>
  <slot></slot>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import props from './props/group'

import { VueContext } from '@/types/vue-types'
import { GroupValueProps } from '@/types/checkbox-types'

import { groupValueState } from './hooks'

export default defineComponent({
  name: 'ViCheckboxGroup',
  props,
  setup (props: GroupValueProps, context: VueContext) {
    groupValueState(props, context, 'checkbox-group-value')
  }
})
</script>

<style lang="less">
</style>
