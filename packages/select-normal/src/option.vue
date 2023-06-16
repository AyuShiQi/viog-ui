<template>
  <div
  class="vi-option"
  :class="[
    `choose-${chooseType}`,
    {
      'be-choosed': isChoosed,
      'is-disabled': disabled
    }
  ]"
  @click="toChoose">
    <span class="vi-option-pre" v-if="preSlot">
      <slot name="pre"></slot>
    </span>
    <slot>{{ value }}</slot>
    <span class="vi-option-suf" v-if="sufSlot">
      <slot name="suf"></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

import props from './props/option'

import optionState from './hooks/option-state'

export default defineComponent({
  name: 'ViOption',
  props,
  setup (props: any, ctx: SetupContext) {
    const option = optionState(props, ctx)

    return option
  }
})
</script>

<style lang="less">
@import './css/option.less';
</style>
