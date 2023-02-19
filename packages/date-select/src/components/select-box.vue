<template>
  <transition name="vi-date-select-box">
    <span class="vi-date-select-box">
      <DateBox :choosed="choosed" :unit="unit"></DateBox>
      <MonthBox :choosed="choosed" :unit="unit"></MonthBox>
      <TimeBox v-if="time" :choosed="choosed" :unit="timeUnit"></TimeBox>
    </span>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import DateBox from './date-box.vue'
import MonthBox from './month-box.vue'
import TimeBox from './time-box.vue'

export default defineComponent({
  name: 'ViDateSelectBox',
  components: { DateBox, TimeBox, MonthBox },
  props: {
    choosed: Object,
    time: {
      type: Boolean,
      default: false
    },
    unit: {
      type: String,
      default: 'date'
    },
    timeUnit: {
      type: String,
      default: 'second'
    }
  }
})
</script>

<style lang="less">
  @import './css/select-box.less';
</style>
