<template>
  <dropdown
  ref="dropdown"
  class="vi-select"
  :class="[
    `is-${size}`,
    `is-${type}`,
    {
      'is-dark': dark,
      'is-disabled': disabled
    }
  ]">
    <template v-slot:default="{open}">
      <span class="vi-select-input"
      :class="[
        {
          'be-open': open
        }
      ]">
          <span class="vi-select-choose">
            {{isEmpty()? placeholder : modelValue}}
          </span>
          <svg
          class="vi-select-arrow"
          viewBox="0 0 40 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
            <path d="M17.4019 1.5C18.5566 -0.5 21.4434 -0.5 22.5981 1.5L39.0526 30C40.2073 32 38.7639 34.5 36.4545 34.5H3.54552C1.23612 34.5 -0.207259 32 0.947441 30L17.4019 1.5Z"/>
          </svg>
      </span>
    </template>
    <template v-slot:content>
      <scroll class="vi-select-box vi-select-box-normal">
        <slot></slot>
      </scroll>
    </template>
  </dropdown>
</template>

<script lang="ts">
import { defineComponent, provide, computed, ref } from 'vue'
import type { SetupContext } from 'vue'

import { dropdown } from '../../dropdown'
import { scroll } from '../../scroll'

import props from './props/select'

export default defineComponent({
  name: 'ViSelectN',
  components: {
    dropdown,
    scroll
  },
  props,
  setup (props: any, ctx: SetupContext) {
    const dropdown = ref()
    const choosed = computed(() => props.modelValue)
    provide('choosed', choosed)
    provide('update:choosed', changeSelect)
    provide('choose-type', props.chooseType)

    function changeSelect (newValue: any) {
      if (props.once) {
        dropdown.value?.toClose()
      }
      // console.log(newValue)
      ctx.emit('update:modelValue', newValue)
    }

    function isEmpty () {
      return !props.modelValue
    }

    return {
      isEmpty,
      dropdown
    }
  }
})
</script>

<style lang="less">
@import './css/select.less';
</style>
