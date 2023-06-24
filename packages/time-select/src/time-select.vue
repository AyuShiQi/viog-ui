<template>
  <dropdown class="vi-time-select"
  :disabled="disabled"
  :class="[
    `vi-time-select-size-${size}`,
    `vi-time-select-type-${type}`,
    {
      'is-disabled': disabled,
    }
  ]">
    <span class="vi-time-select-input">
      <span class="vi-time-select-choose" :class="{ 'show-placeholder': formatTime === placeholder }">
        {{formatTime}}
      </span>
      <span class="vi-time-select-choose-gap" v-if="range">{{ separate }}</span>
      <span class="vi-time-select-choose" v-if="range" :class="{ 'show-placeholder': formatTimeEnd === placeholder }">
        {{formatTimeEnd}}
      </span>
      <svg
      class="vi-time-select-icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
        <path d="M511.333 127.333c51.868 0 102.15 10.144 149.451 30.15 45.719 19.337 86.792 47.034 122.078 82.321 35.287 35.286 62.983 76.359 82.321 122.078 20.006 47.3 30.15 97.583 30.15 149.451s-10.144 102.15-30.15 149.451c-19.337 45.719-47.034 86.792-82.321 122.078-35.286 35.287-76.359 62.983-122.078 82.321-47.3 20.006-97.583 30.15-149.451 30.15s-102.15-10.144-149.451-30.15c-45.719-19.337-86.792-47.034-122.078-82.321-35.287-35.286-62.983-76.359-82.321-122.078-20.006-47.3-30.15-97.583-30.15-149.451s10.144-102.15 30.15-149.451c19.337-45.719 47.034-86.792 82.321-122.078 35.286-35.287 76.359-62.983 122.078-82.321 47.301-20.006 97.583-30.15 149.451-30.15m0-64c-247.424 0-448 200.576-448 448s200.576 448 448 448 448-200.576 448-448-200.576-448-448-448z"/>
        <path d="M702.856 543.333H511.333c-17.673 0-32-14.326-32-32v-286.73c0-17.673 14.327-32 32-32s32 14.327 32 32v254.73h159.522c17.673 0 32 14.327 32 32s-14.326 32-31.999 32z"/>
      </svg>
    </span>
    <template v-slot:content>
      <div class="vi-time-select-box">
        <time-scroll v-if="needHour()" :choosed="value" :need="24" target="hour" info="时"></time-scroll>
        <time-scroll v-if="needMinute()" :choosed="value" target="minute" info="分"></time-scroll>
        <time-scroll v-if="needSecond()" :choosed="value" target="second" info="秒"></time-scroll>
        <div class="vi-time-select-box-gap" v-if="range">{{ separate }}</div>
        <time-scroll v-if="range && needHour()" :choosed="value" :need="24" target="endHour" info="时"></time-scroll>
        <time-scroll v-if="range && needMinute()" :choosed="value" target="endMinute" info="分"></time-scroll>
        <time-scroll v-if="range && needSecond()" :choosed="value" target="endSecond" info="秒"></time-scroll>
      </div>
    </template>
  </dropdown>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { TimeSelectProps } from '@/types/time-select-types'

import props from './props'

import { timeSelectState } from './hooks'

import { dropdown } from '../../dropdown'
import TimeScroll from '@/components/time-scroll.vue'

export default defineComponent({
  name: 'ViTimeSelect',
  props,
  components: { TimeScroll, dropdown },
  setup (props: TimeSelectProps) {
    const timeSelect = timeSelectState(props)

    return timeSelect
  }
})
</script>

<style lang="less">
  @import './css/time-select.less';
</style>
