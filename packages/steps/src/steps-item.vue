<template>
  <div
  class="vi-steps-item"
  :class="[
    {
      'vi-steps-item-choosed': choosed,
      'vi-steps-item-now-choose': nowChoose
    }
  ]">
    <div class="vi-steps-item__line"></div>
    <div class="vi-steps-item__content">
      <div class="vi-steps-item__content__circle">
        <slot name="doing" v-if="nowChoose">
          {{ id + 1 }}
        </slot>
        <slot name="finish" v-if="choosed">
          <vi-result type="transparent" v-model="choosed"></vi-result>
        </slot>
      </div>
      <div class="vi-steps-item__content__title">
        <slot>
          {{ '步骤' + (id + 1) }}
        </slot>
      </div>
      <div class="vi-steps-item__content__desc">
        <slot name="description"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/steps-item'
// 组件引用components
import stepsItemState from './hooks/steps-item-state'

export default defineComponent({
  name: 'ViStepsItem',
  props,
  setup (props: any, ctx: SetupContext) {
    const stepsItem = stepsItemState()

    return stepsItem
  }
})
</script>

<style lang="less">
@import './css/steps-item.less';
</style>
