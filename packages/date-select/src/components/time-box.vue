<template>
  <div
  class="vi-time-select-part">
    <time-scroll></time-scroll>
    <time-scroll></time-scroll>
    <time-scroll></time-scroll>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, reactive } from 'vue'
import type { SetupContext } from 'vue'

import TimeScroll from '@/components/time-scroll.vue'

import { formatTimeDigit } from '@/utils/date-utils'

export default defineComponent({
  name: 'ViTimeBox',
  emits: ['update', 'yearBack', 'yearForward', 'monthBack', 'monthForward'],
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
  setup (props: any, context: SetupContext) {
    const first = 80
    // 是否展示选择分钟的框框
    const needMinute = computed((): boolean => {
      return props.unit === 'minute' || props.unit === 'second'
    })
    // 是否展示选择秒的框框
    const needSecond = computed((): boolean => {
      return props.unit === 'second'
    })

    const hours: string[] = []
    const minutes: string[] = []
    const seconds: string[] = []
    // 初始化时间
    for (let i = 0; i < 24; i++) {
      hours.push(formatTimeDigit(i))
    }
    for (let i = 0; i < 60; i++) {
      const f = formatTimeDigit(i)
      minutes.push(f)
      seconds.push(f)
    }
    const choosed = reactive(props.choosed)
    if (choosed.hour === undefined) choosed.hour = 0
    if (choosed.minute === undefined) choosed.minute = 0
    if (choosed.second === undefined) choosed.second = 0

    // 判断当前是否是被选择的
    function isChoosed (index: number, type: number): boolean {
      if (type === 0 && index === props.choosed.hour) return true
      else if (type === 1 && index === props.choosed.minute) return true
      else if (type === 2 && index === props.choosed.second) return true
      return false
    }

    const hTranslate = ref(first)
    const mTranslate = ref(first)
    const sTranslate = ref(first)

    function mouseWheel (e: any) {
      if (e.wheelDelta < 0) {
        choosed.hour += 1
        hTranslate.value -= 20
      } else {
        choosed.hour--
        hTranslate.value += 20
      }
    }

    return {
      needMinute,
      needSecond,
      hours,
      minutes,
      seconds,
      isChoosed,
      hTranslate,
      mTranslate,
      sTranslate,
      mouseWheel
    }
  }
})
</script>

<style lang="less">
  @import './css/time-box.less';
</style>
