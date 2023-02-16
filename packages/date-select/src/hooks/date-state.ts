import { ref } from 'vue'

import { theWeekOfDay, theDays, formatTimeDigit } from '@/utils/date-utils' 
// 这是用于控制日期状态的hooks
export default function () {
  // 被选择的，需要上层传过来， 暂时初始化
  const year = ref(2022)
  const month = ref(2022)
  const date = ref(1)
  const week = ref(theWeekOfDay(year.value, month.value, date.value))
  // 当前展示的年份和月份
  const viewYear = ref(year.value)
  const viewMonth = ref(month.value)
  // 该月第一天的周数
  const viewFirstWeek = ref(theWeekOfDay(viewYear.value, viewMonth.value, 1))
  // 该月天数
  const viewDays = ref(theDays(viewYear.value, viewMonth.value))

  // 年份后退
  function yearBack(): void {
    viewYear.value--
    viewFirstWeek.value = theWeekOfDay(viewYear.value, viewMonth.value, 1)
    viewDays.value = theDays(viewYear.value, viewMonth.value)
}
  // 年份前进
  function yearForward(): void {
    viewYear.value++
    viewFirstWeek.value = theWeekOfDay(viewYear.value, viewMonth.value, 1)
    viewDays.value = theDays(viewYear.value, viewMonth.value)
  } 
  // 月份后退
  function monthBack(): void {
    if(viewMonth.value === 1) {
      viewYear.value--
      viewMonth.value = 12
    }
    else viewMonth.value--

    viewFirstWeek.value = theWeekOfDay(viewYear.value, viewMonth.value, 1)
    viewDays.value = theDays(viewYear.value, viewMonth.value)
  }
  // 年份前进
  function monthForward(): void {
    if(viewMonth.value === 12) {
      viewYear.value++
      viewMonth.value = 1
    }
    else viewMonth.value++
  
    viewFirstWeek.value = theWeekOfDay(viewYear.value, viewMonth.value, 1)
    viewDays.value = theDays(viewYear.value, viewMonth.value)
  }
  
  /**
   * 选择日期更换
   * @param d date天数
   */
  function update(d: number): void {
    year.value = viewYear.value
    month.value = viewMonth.value
    date.value = d
    week.value = theWeekOfDay(year.value, month.value, date.value)
  }
}