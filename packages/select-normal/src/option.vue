<template>
  <div
  class="vi-option"
  :class="[
    `choose-${chooseType}`,
    {
      'be-choosed': isChoosed,
      'only-value': !preSlot && !sufSlot
    }
  ]"
  @click="toChoose">
    <span class="vi-option-pre" v-if="preSlot">
      <slot name="pre"></slot>
    </span>
    <slot></slot>
    <span class="vi-option-suf" v-if="sufSlot">
      <slot name="suf"></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref, computed } from 'vue'
import type { SetupContext, ComputedRef } from 'vue'

import slotState from './hooks/slot-state'

import props from './props/option'

export default defineComponent({
  name: 'ViOption',
  props,
  setup (props: any, ctx: SetupContext) {
    const choosed = inject('choosed')
    const changeSelect: any = inject('update:choosed')
    const chooseType = inject('choose-type')
    const hasSlot = slotState()
    if (props.selected) toChoose()

    const isChoosed = computed((): boolean => {
      return (choosed as ComputedRef).value === props.value
    })

    function toChoose () {
      changeSelect(props.value)
    }

    return {
      choosed,
      isChoosed,
      toChoose,
      chooseType,
      ...hasSlot
    }
  }
})
</script>

<style lang="less">
@import './css/option.less';
</style>
