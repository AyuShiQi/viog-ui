<template>
  <span
  class="vi-switch-appreance"
  :class="[
  `is-${size}`,
  `vi-switch-${type}`]">
    <span class="vi-switch-slot">
      <slot name="left-choice">左边内容</slot>
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
      @click="toSwitch">
        <slot name="switch-circle">对</slot>
      </span>
      <input
      class="vi-switch"
      type="checkbox"
      :checked="checked">
    </span>
    <span class="vi-switch-slot">
      <slot name="right-choice">aaaa</slot>
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import props from './props'

import { VueContext } from '@/types/vue-types'

export default defineComponent({
  name: 'ViSwitch',
  emits: ['off', 'on', 'switch'],
  props,
  setup (props: any, context: VueContext) {
    const checked = ref(false)

    function toSwitch () {
      checked.value = !checked.value

      changeNowColor()
      if (checked.value) {
        context.emit('change')
        context.emit('on')
      } else {
        context.emit('change')
        context.emit('off')
      }
    }

    const nowColor = ref('')
    function changeNowColor () {
      if (checked.value) {
        nowColor.value = props.rightColor
      } else {
        nowColor.value = props.leftColor
      }
    }

    return {
      checked,
      toSwitch,
      nowColor
    }
  }
})
</script>

<style lang="less">
  @import './css/switch.less';
</style>
