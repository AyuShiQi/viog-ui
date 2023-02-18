<template>
  <transition name="vi-date-select-box">
    <span class="vi-date-select-box">
      <DateBox
      :datas="datas"
      :before="before"
      :after="after"
      :viewYear="viewYear"
      :viewMonth="viewMonth"
      :choosed="choosed"
      @yearBack="toYearBack"
      @yearForward="toYearForward"
      @monthBack="toMonthBack"
      @monthForward="toMonthForward"
      @update="toChoose"></DateBox>
      <TimeBox
      :unit="timeUnit"
      :choosed="choosed"></TimeBox>
    </span>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

// import { scroll } from '../../../scroll'
import DateBox from './date-box.vue'
import TimeBox from './time-box.vue'

export default defineComponent({
  name: 'ViDateSelectBox',
  emits: ['update', 'yearBack', 'yearForward', 'monthBack', 'monthForward'],
  components: { DateBox, TimeBox },
  props: {
    datas: Array,
    before: Array,
    after: Array,
    viewYear: Number,
    viewMonth: Number,
    choosed: Object
  },
  setup (props: any, context: SetupContext) {
    function toChoose (newDate: number) {
      context.emit('update', newDate)
    }

    function toYearBack () {
      context.emit('yearBack')
    }

    function toMonthBack () {
      context.emit('monthBack')
    }

    function toYearForward () {
      context.emit('yearForward')
    }

    function toMonthForward () {
      context.emit('monthForward')
    }

    return {
      toChoose,
      toYearBack,
      toMonthBack,
      toYearForward,
      toMonthForward
    }
  }
})
</script>

<style lang="less">
  @import './css/select-box.less';
</style>
