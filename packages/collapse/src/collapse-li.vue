<template>
  <li
  ref="openDOM"
  class="vi-collapse"
  :class="[
    `vi-collapse-type-${type}`,
    {
      'is-open': id === -1 ? open : isOpen,
    }
  ]">
    <div class="vi-collapse__title" @click="toChoose">
        <span>
          <slot name="title">
            {{ title }}
          </slot>
        </span>
        <svg
        class="vi-collapse__title-arrow"
        viewBox="0 0 40 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
            <path d="M17.4019 1.5C18.5566 -0.5 21.4434 -0.5 22.5981 1.5L39.0526 30C40.2073 32 38.7639 34.5 36.4545 34.5H3.54552C1.23612 34.5 -0.207259 32 0.947441 30L17.4019 1.5Z"/>
        </svg>
    </div>
    <div class="vi-collapse__content">
      <li class="vi-collapse__content-view vi-collapse__content-view-li">
        <slot></slot>
      </li>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

import props from './props/collapse'

import collapseState from './hooks/collapse-state'

export default defineComponent({
  name: 'ViCollapseLi',
  props,
  setup (props: any, ctx: SetupContext) {
    const collapse = collapseState(props, ctx)
    return {
      ...collapse
    }
  }
})
</script>

<style lang="less">
@import './css/collapse.less';
</style>
