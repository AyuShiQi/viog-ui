<template>
  <vi-dropdown
  class="vi-select"
  ref="dropdown"
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
        <span class="vi-select-choose">
            <!-- 渲染为多选节点 -->
            <template v-if="chooseShow instanceof Array">
              <selectItem v-for="item in chooseShow" :key="item">{{ aliasShow(item) }}</selectItem>
            </template>
            <template v-else>
              {{ chooseShow }}
            </template>
        </span>
        <svg
        class="vi-select-arrow"
        viewBox="0 0 40 35"
        xmlns="http://www.w3.org/2000/svg">
          <path d="M17.4019 1.5C18.5566 -0.5 21.4434 -0.5 22.5981 1.5L39.0526 30C40.2073 32 38.7639 34.5 36.4545 34.5H3.54552C1.23612 34.5 -0.207259 32 0.947441 30L17.4019 1.5Z"/>
        </svg>
      </span>
    </template>
    <template v-slot:content>
      <vi-virtual-scroll class="vi-select-box vi-select-box-normal" :datas="datas" hidden>
        <template v-slot="{data}">
          <vi-option class="vi-select-box__virtual-scroll-item" :value="data"></vi-option>
        </template>
      </vi-virtual-scroll>
    </template>
  </vi-dropdown>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import type { SetupContext } from 'vue'

import props from './props/virtual-select'

import { SelectProps } from '@/types/select-types'

import selectState from './hooks/select-state'

import selectItem from './select-item.vue'

export default defineComponent({
  name: 'ViVirtualSelect',
  emits: ['update:modelValue'] as string[],
  props,
  components: {
    selectItem
  },
  setup (props: SelectProps, ctx: SetupContext) {
    const select = selectState(props, ctx, false)

    return select
  }
})
</script>

<style lang="less">
@import './css/select.less';
</style>
