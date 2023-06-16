<template>
  <dropdown
  :noTriggerOpen="search"
  @click="toFocus"
  ref="dropdown"
  class="vi-select"
  :class="[
    `vi-select-size-${size}`,
    `vi-select-type-${type}`,
    {
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
          <span class="vi-select-choose" v-if="search">
            <input type="text"
            v-model="value"
            @input="handleInput"
            @blur="searchToBlur"
            @compositionstart="handleCompositionStart"
            @compositionend="handleCompositionAfter"
            ref="input">
          </span>
          <span class="vi-select-choose" v-else>
            {{ chooseShow }}
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
      <scroll class="vi-select-box vi-select-box-normal" v-if="finish">
        <slot></slot>
      </scroll>
      <div v-else>
        <slot name="loading">加载中</slot>
      </div>
    </template>
  </dropdown>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

import props from './props/select'

import { dropdown } from '../../dropdown'
import { scroll } from '../../scroll'

import selectState from './hooks/select-state'

export default defineComponent({
  name: 'ViSelect',
  props,
  emits: ['search', 'update:modelValue'] as string[],
  components: {
    dropdown,
    scroll
  },
  setup (props: any, ctx: SetupContext) {
    const select = selectState(props, ctx)

    return select
  }
})
</script>

<style lang="less">
@import './css/select.less';
</style>
