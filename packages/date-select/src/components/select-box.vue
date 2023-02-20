<template>
  <transition name="vi-date-select-box">
    <span class="vi-date-select-box">
      <DateBox :beginYear="beginYear" :endYear="endYear" v-if="unit === 'date'" :choosed="choosed" :unit="unit"></DateBox>
      <MonthBox :beginYear="beginYear" :endYear="endYear" v-if="unit === 'month'" :choosed="choosed" :unit="unit"></MonthBox>
      <YearBox :beginYear="beginYear" :endYear="endYear" v-if="unit === 'year'" :choosed="choosed" :unit="unit"></YearBox>
      <TimeBox :beginYear="beginYear" :endYear="endYear" v-if="time" :choosed="choosed" :unit="timeUnit"></TimeBox>
    </span>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import DateBox from './date-box.vue'
import MonthBox from './month-box.vue'
import TimeBox from './time-box.vue'
import YearBox from './year-box.vue'

export default defineComponent({
  name: 'ViDateSelectBox',
  components: { DateBox, TimeBox, MonthBox, YearBox },
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
    },
    beginYear: {
      type: Number
    },
    endYear: {
      type: Number
    }
  }
})
</script>

<style lang="less">
  @import './css/select-box.less';
</style>
