<template>
  <span
  class="vi-radio-appreance"
  :class="[
  `is-${size}`,
  `vi-radio-${color}`,
  `is-${type}`,
  {
    'is-disabled': disabled,
    'is-dark': dark,
    'be-checked': (value === modelValue)
  }
  ]">
    <input
    ref="radio"
    class="vi-radio"
    :value="value"
    :name="name"
    v-model="nowPick"
    @change="handleChange"
    type="radio">
    <span class="vi-radio-circle" @click="toPick"></span>
    <span class="vi-radio-text" @click="toPick">
        <slot>{{value}}</slot>
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance, ComponentInternalInstance } from 'vue'

import props from './props'

import { VueContext, RadioDOM } from '@/types/vue-types'

export default defineComponent({
  name: 'ViRadio',
  emits: ['change', 'update:modelValue'],
  props,
  setup (props: any, context: VueContext) {
    const nowPick = ref(props.modelValue)
    const { proxy } = getCurrentInstance() as ComponentInternalInstance
    function handleChange () {
      context.emit('update:modelValue', props.value)
      context.emit('change')
    }

    function toPick () {
      (proxy?.$refs.radio as RadioDOM).click()
    }

    return {
      nowPick,
      handleChange,
      toPick
    }
  }
})
</script>

<style lang="less">
  @import './css/radio.less';
</style>
