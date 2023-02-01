<template>
  <span
  class="vi-switch-appreance"
  :class="[
  `is-${size}`,
  `vi-switch-${type}`,
  {
    'vi-switch-dark': dark,
    'disabled': disabled
  }]">
    <span class="vi-switch-slot">
      <slot name="left-choice"></slot>
    </span>
    <span
    class="vi-switch-content"
    :class="[
    {
      'left-choice': !checked,
      'right-choice': checked
    }]"
    :style="{
      backgroundColor: nowColor
    }">
      <span
      class="switch-circle"
      @click="toChange">
        <slot name="switch-circle"></slot>
      </span>
      <input
      class="vi-switch"
      type="checkbox"
      :checked="checked">
    </span>
    <span class="vi-switch-slot">
      <slot name="right-choice"></slot>
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import props from './props'

import { VueContext } from '@/types/vue-types'
import { switchProps } from '@/types/switch-types'

import { switchState } from './hooks'

export default defineComponent({
  name: 'ViSwitch',
  emits: ['off', 'on', 'change'],
  props,
  setup (props: switchProps, context: VueContext) {
    const mainSwitch = switchState(props, context)

    return {
      ...mainSwitch
    }
  }
})
</script>

<style lang="less">
  @import './css/switch.less';
</style>
