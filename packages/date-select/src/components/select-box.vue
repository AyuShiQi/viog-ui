<template>
  <transition name="vi-date-select-box">
    <span class="vi-date-select-box">
      <DateBox :choosed="choosed"></DateBox>
      <TimeBox :choosed="choosed"></TimeBox>
    </span>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import DateBox from './date-box.vue'
import TimeBox from './time-box.vue'

export default defineComponent({
  name: 'ViDateSelectBox',
  components: { DateBox, TimeBox },
  props: {
    choosed: Object
  }
})
</script>

<style lang="less">
  @import './css/select-box.less';
</style>
