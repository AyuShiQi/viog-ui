<template>
  <div
  class="vi-option"
  :class="[
    {
      'be-choosed': isChoosed
    }
  ]"
  @click="toChoose">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref, computed } from 'vue'
import type { SetupContext, ComputedRef } from 'vue'

import props from './props/option'

export default defineComponent({
  name: 'ViOption',
  props,
  setup (props: any, ctx: SetupContext) {
    const choosed = inject('choosed')
    const changeSelect: any = inject('update:choosed')
    console.log(props.value)

    const isChoosed = computed((): boolean => {
      return (choosed as ComputedRef).value === props.value
    })

    function toChoose () {
      console.log(choosed)
      changeSelect(props.value)
    }

    return {
      choosed,
      isChoosed,
      toChoose
    }
  }
})
</script>

<style lang="less">
@import './css/option.less';
</style>
