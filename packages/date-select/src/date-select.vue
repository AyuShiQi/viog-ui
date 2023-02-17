<template>
  <span
  class="vi-date-select"
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
    <span class="vi-date-select-input"
    :style="{
      width
    }"
    @click="toSelect">
      <span class="vi-date-select-choose">
        {{modelValue}}
      </span>
      <svg
      class="vi-date-select-icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
        <path d="M725.333333 170.666667h74.709334C864.853333 170.666667 917.333333 223.189333 917.333333 288.096V799.893333C917.333333 864.757333 864.832 917.333333 800.042667 917.333333H223.957333C159.146667 917.333333 106.666667 864.810667 106.666667 799.904V288.106667C106.666667 223.242667 159.168 170.666667 223.957333 170.666667H298.666667v-32a32 32 0 0 1 64 0v32h298.666666v-32a32 32 0 0 1 64 0v32z m0 64v32a32 32 0 0 1-64 0v-32H362.666667v32a32 32 0 0 1-64 0v-32h-74.709334A53.354667 53.354667 0 0 0 170.666667 288.096V799.893333A53.301333 53.301333 0 0 0 223.957333 853.333333h576.085334A53.354667 53.354667 0 0 0 853.333333 799.904V288.106667A53.301333 53.301333 0 0 0 800.042667 234.666667H725.333333z m-10.666666 224a32 32 0 0 1 0 64H309.333333a32 32 0 0 1 0-64h405.333334zM586.666667 618.666667a32 32 0 0 1 0 64H309.333333a32 32 0 0 1 0-64h277.333334z"  />
      </svg>
    </span>
    <span class="vi-date-select-list">
      <ViDateSelectBox
        v-show="open"
        :datas="renderDays"
        :before="renderBefore"
        :after="renderAfter"
        :viewYear="viewYear"
        :viewMonth="viewMonth"
        :choosed="{
          year,
          month,
          date
        }"
        @yearBack="yearBack"
        @yearForward="yearForward"
        @monthBack="monthBack"
        @monthForward="monthForward"
        @update="update"></ViDateSelectBox>
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

import props from './props'

import ViDateSelectBox from './components/select-box.vue'

import openState from '@/hooks/open-state'
import dateState from './hooks/date-state'

export default defineComponent({
  name: 'ViDateSelect',
  props,
  components: { ViDateSelectBox },
  setup (props: any, context: SetupContext) {
    const open = openState()
    const date = dateState(props.modelValue, context)

    return {
      ...open,
      ...date
    }
  }
})
</script>

<style lang="less">
  @import './css/date-select.less';
</style>
