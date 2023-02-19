<template>
  <div
  class="vi-time-select-part">
    <time-scroll v-if="needHour()" :choosed="choosed" :need="24" target="hour" info="时"></time-scroll>
    <time-scroll v-if="needMinute()" :choosed="choosed" target="minute" info="分"></time-scroll>
    <time-scroll v-if="needSecond()" :choosed="choosed" target="second" info="秒"></time-scroll>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import TimeScroll from '@/components/time-scroll.vue'

import type { TimeBoxProps } from '@/types/date-select-types/time-box-types'

export default defineComponent({
  name: 'ViTimeBox',
  components: { TimeScroll },
  props: {
    unit: {
      type: String,
      default: 'second'
    },
    choosed: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup (props: TimeBoxProps) {
    function needHour (): boolean {
      return true
    }

    function needMinute (): boolean {
      return props.unit !== 'hour'
    }

    function needSecond (): boolean {
      return props.unit === 'second'
    }

    return {
      needHour,
      needMinute,
      needSecond
    }
  }
})
</script>

<style lang="less">
  @import './css/time-box.less';
</style>
