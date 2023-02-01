<template>
  <span
  class="vi-radio-appreance"
  :class="[
  `is-${size}`,
  {
    'is-dark': dark,
    'be-checked': (value === picked)
  }
  ]">
    <input
    :id="rid"
    class="vi-radio"
    :value="value"
    :name="name"
    v-model="nowPicked"
    @change="handleChange"
    type="radio">
    <label :for="rid" class="vi-radio-circle"></label>
    <label :for="rid">
        <slot>{{value}}</slot>
    </label>
  </span>
</template>

<script lang="ts">
import { defineComponent, ref, VueElement } from 'vue'

import props from './props'

import { VueContext } from '@/types/vue-types'

export default defineComponent({
  name: 'ViRadio',
  emits: ['changePick'],
  props,
  setup (props: any, context: VueContext) {
    const nowPicked = ref(props.picked)
    function handleChange () {
      console.log(nowPicked)
      context.emit('changePick', nowPicked.value)
    }
    return {
      nowPicked,
      handleChange
    }
  }
})
</script>

<style lang="less">
  @import './css/radio.less';
</style>
