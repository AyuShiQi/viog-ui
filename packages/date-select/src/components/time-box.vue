<template>
  <div
  class="vi-time-select-part">
    <div class="vi-time-hour">
      <ul>
        <li
        v-for="(item, i) in hours"
        :key="item"
        :class="{
          'be-choosed': isChoosed(i, 2)
        }">{{item}}</li>
      </ul>
    </div>
    <div class="vi-time-minute" v-if="needMinute">
      <ul>
        <li
        v-for="(item, i) in minutes"
        :key="item"
        :class="{
          'be-choosed': isChoosed(i, 2)
        }">{{item}}</li>
      </ul>
    </div>
    <div class="vi-time-second" v-if="needSecond">
      <ul
      :style="{
        transform: 'translateY(80px)'
      }">
        <li
        v-for="(item, i) in seconds"
        :key="item"
        :class="{
          'be-choosed': isChoosed(i, 2)
        }">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, reactive } from 'vue'
import type { SetupContext } from 'vue'

import { formatTimeDigit } from '@/utils/date-utils'

export default defineComponent({
  name: 'ViTimeBox',
  emits: ['update', 'yearBack', 'yearForward', 'monthBack', 'monthForward'],
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

    function isChoosed (index: number, type: number): boolean {
      if (type === 0 && index === props.choosed.hour) return true
      else if (type === 1 && index === props.choosed.minute) return true
      else if (type === 2 && index === props.choosed.second) return true
      return false
    }
    return {
      needMinute,
      needSecond,
      hours,
      minutes,
      seconds,
      isChoosed
    }
  }
})
</script>

<style lang="less">
  @import './css/time-box.less';
</style>
