<template>
  <div
  class="vi-date-select-part">
    <!-- top 栏 -->
    <div class="vi-date-select-top">
    <!-- 年份后退 -->
    <svg
    @click="yearBack"
    class="vi-year-back" width="16px" height="16.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M535.21136474 141.21142578c12.82928467 0 23.75271607 4.47912598 32.874115 13.59310914 9.04724122 9.12139893 13.62277222 19.93359375 13.62277221 32.75546264 0 12.82928467-4.59777833 23.78979492-13.83782958 33.05950927L275.63711548 512l292.23330689 291.53622437C577.11047364 812.64279175 581.70825195 823.61071778 581.70825195 836.44000244c0 12.82928467-4.57553101 23.78979492-13.62277221 32.75546264C558.96408081 878.30944823 548.04064942 882.78857422 535.21136474 882.78857422c-13.07400513 0-24.10125732-4.47912598-33.05950927-13.4447937L176.8590393 545.06692505C167.95269776 536.10125732 163.45874023 525.1333313 163.45874023 512c0-12.9776001 4.49395753-23.9529419 13.40029907-32.91119385l325.29281617-324.44000244C511.11010742 145.69796753 522.13735962 141.37457276 535.21136474 141.37457276V141.21142578zM814.04437257 141.21142578c12.82928467 0 23.76013184 4.47912598 32.88894652 13.59310914C855.97314453 163.92593383 860.54125977 174.73812867 860.54125977 187.55999756c0 12.82928467-4.59777833 23.78979492-13.83782959 33.05950927L554.47012329 512l292.23330689 291.53622437C855.94348145 812.64279175 860.54125977 823.61071778 860.54125977 836.44000244c0 12.82928467-4.56811523 23.78979492-13.61535645 32.75546264-9.12139893 9.11398315-20.06707763 13.59310913-32.88894653 13.59310914-13.07400513 0-24.10125732-4.47912598-33.04467773-13.4447937L455.69204711 545.06692505c-8.9211731-8.95825195-13.41513062-19.92617798-13.4151306-33.05950928 0-12.9776001 4.49395753-23.9529419 13.42254638-32.91119384l325.29281617-324.44000245C789.92828369 145.69796753 800.96295166 141.37457276 814.03695679 141.37457276V141.21142578z" />
    </svg>
    <!-- 月份后退 -->
    <svg
    @click="monthBack"
    class="vi-month-back" width="16px" height="16.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M319.64 512.016l336.016-336.008 45.248 45.248L364.896 557.28zM365.216 466.464l339.976 339.968-45.256 45.256-339.976-339.976z" />
    </svg>
    <!-- 当前显示年月标识 -->
    <span class="vi-date-show">
      <vi-virtual-select
      class="vi-date-show_year"
      type="button"
      :datas="selectYears"
      v-model="viewYear"
      placeholder=""></vi-virtual-select>年
      <vi-virtual-select
      class="vi-date-show_month"
      type="button"
      :datas="selectMonths"
      v-model="viewMonth"
      placeholder=""></vi-virtual-select>月
    </span>
    <!-- 月份前进 -->
    <svg
    @click="monthForward"
    class="vi-month-forward" width="16px" height="16.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M658.56 557.392L322.536 221.384l45.248-45.256 336.016 336.008zM704.088 512.2L364.12 852.16l-45.256-45.248 339.976-339.976z" />
    </svg>
    <!-- 年份前进 -->
    <svg
    @click="yearForward"
    class="vi-year-forward" width="16px" height="16.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M209.94821167 141.21142578C222.78491211 141.21142578 233.66384888 145.69055176 242.65176391 154.50048828l325.24832154 324.51416016C577.13272094 488.12121582 581.70825195 499.24487305 581.70825195 511.92584229c0 12.82928467-4.58294677 23.9529419-13.81558227 33.06692505l-325.25573731 324.35101318C233.67126465 878.30944824 222.79974365 882.78857422 209.94821167 882.78857422c-12.8218689 0-23.77496338-4.47912598-32.83703613-13.6005249C168.02685547 860.22979737 163.48840333 849.25445557 163.45874023 836.44000244c0-13.14074708 4.46429443-24.1086731 13.40029907-32.91860962l292.27038575-291.58813477-292.27038575-291.43981933C167.92303467 211.51293945 163.45874023 200.5524292 163.45874023 187.41168213 163.45874023 174.12261963 167.84146118 163.16210937 176.7033081 154.34475708 185.55032349 145.53482055 196.60723877 141.21142578 209.91854859 141.21142578h0.02966308z m278.82559204 0c12.82928467 0 23.71563721 4.47912598 32.70355225 13.2890625l325.24832153 324.51416016C855.94348145 488.12121582 860.54125977 499.24487305 860.54125977 511.92584229c0 12.82928467-4.59777833 23.9529419-13.81558228 33.06692505l-325.25573731 324.35101318c-8.98049927 8.96566773-19.87426758 13.4447937-32.70355224 13.4447937-12.8218689 0-23.78979492-4.47912598-32.83703614-13.6005249-9.09173584-8.95825195-13.61535645-19.93359375-13.64501953-32.75546265 0-13.14074708 4.45687867-24.1086731 13.40029908-32.91860962l292.27038574-291.58813476-292.27038574-291.43981934C446.74121094 211.51293945 442.28433227 200.5524292 442.28433227 187.41168213c0-13.2890625 4.37530518-24.25698852 13.24456788-33.06692505C464.37591553 145.53482055 475.43283081 141.21142578 488.73672485 141.21142578h0.03707886z" />
    </svg>
    </div>
    <div class="vi-date-select-content">
     <!-- 日期标识 -->
      <div class="vi-canlendary-title">
        <div
        class="vi-canlendary-week"
        v-for="item in dates"
        :key="item">{{item}}</div>
      </div>
      <ul class="vi-canlendary-days">
        <!-- 前插 -->
        <li
        class="vi-canlendary-default"
        v-for="(item, i) in renderBefore"
        :key="`${i}#${item}`">{{item}}</li>
        <!-- 正式数据 -->
        <li
        class="vi-canlendary-day"
        v-for="(item, i) in renderDays"
        :key="`${i}$${item}`"
        @click="update(item)"
        :class="{
        'be-choosed': isChoose(item)
        }">{{item}}</li>
        <!-- 后插 -->
        <li
        class="vi-canlendary-default"
        v-for="(item, i) in renderAfter"
        :key="`${i}*${item}`">{{item}}</li>
      </ul>
    </div>
    <!-- bottom 栏 -->
    <div class="vi-date-select-bottom">
      <ViButton
      class="vi-date-bottom-button"
      small type="transparent" color="purple"
      @click="today">今日</ViButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

import type { DateBoxProps } from '@/types/date-select-types/date-box-types'

import { dateViewState, dateState } from './hooks'

export default defineComponent({
  name: 'ViDateBox',
  props: {
    choosed: {
      default: {}
    },
    unit: {
      type: String,
      default: 'date'
    },
    defaultUnit: {
      default: {}
    },
    beginYear: Number,
    endYear: Number,
    end: {
      type: Boolean,
      default: false
    }
  },
  setup (props: DateBoxProps, context: SetupContext) {
    const mainDate = dateState(props, props.choosed)
    const { viewYear, viewMonth } = mainDate
    const dateBoxView = dateViewState(props, viewYear, viewMonth)

    return {
      ...mainDate,
      ...dateBoxView
    }
  }
})
</script>

<style lang="less">
  @import './css/date-box.less';
</style>
