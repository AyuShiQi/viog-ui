<template>
  <span
  class="vi-select"
  :class="[
    `is-${size}`,
    `is-${type}`,
    {
      'is-dark': dark,
      'be-open': open,
      'is-disabled': disabled,
      'is-filter': filter
    }
  ]"
  ref="select">
    <span class="vi-select-input"
    @click="toSelect">
        <span class="vi-select-choose">
          <template
          v-if="!multi || (modelValue as []).length === 0">
            {{isPlaceholder? placeholder : modelValue}}
          </template>
          <span
          class="vi-select-multi"
          v-else>
            <ViSelectItem
            v-for="item in selectedMulti"
            :key="item"
            :data="item"
            @delete="toDelete">
              {{item}}
            </ViSelectItem>
          </span>
        </span>
        <svg
        class="vi-select-arrow"
        viewBox="0 0 40 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
            <path d="M17.4019 1.5C18.5566 -0.5 21.4434 -0.5 22.5981 1.5L39.0526 30C40.2073 32 38.7639 34.5 36.4545 34.5H3.54552C1.23612 34.5 -0.207259 32 0.947441 30L17.4019 1.5Z"/>
        </svg>
    </span>
    <span class="vi-select-list">
        <ViSelectBox
        v-show="open"
        :datas="datas"
        :selected="modelValue"
        :selectedMulti="modelValue"
        :multi="multi"
        @update="toUpdate"></ViSelectBox>
    </span>
  </span>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import type { SetupContext } from 'vue'

import props from './props'

import { SelectProps } from '@/types/select-types'

import { openState, valueState } from './hooks'

import ViSelectBox from './components/select-box.vue'
import ViSelectItem from './components/select-item.vue'

export default defineComponent({
  name: 'ViSelectV',
  emits: ['update:modelValue'] as string[],
  components: {
    ViSelectBox,
    ViSelectItem
  },
  props,
  setup (props: SelectProps, context: SetupContext) {
    const selectedMulti = ref(props.modelValue)
    const open = openState()
    const value = valueState(props.multi, selectedMulti, context)

    const isPlaceholder = computed((): boolean => {
      if (props.multi) {
        if (props.modelValue.length === 0) return true
      } else {
        if (props.modelValue === '') return true
      }
      return false
    })

    return {
      ...open,
      ...value,
      selectedMulti,
      isPlaceholder
    }
  }
})
</script>

<style lang="less">
  @import './css/select.less';
</style>
