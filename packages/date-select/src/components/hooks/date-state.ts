import { ref, computed } from 'vue'

import { ModelValueDate } from '@/types/date-select-types'

import { theWeekOfDay, theDays } from '@/utils/date-utils'

// 初始化日期区域
const day28: string[] = []
const day29: string[] = []
const day30: string[] = []
const day31: string[] = []
for (let i = 1; i <= 28; i++) {
  day28.push(i + '')
}
day29.push(...day28, '29')
day30.push(...day29, '30')
day31.push(...day30, '31')
const selectMonths: number[] = []
for (let i = 1; i <= 12; i++) {
  selectMonths.push(i)
}
// 这是用于控制日期状态的hooks
export default function (props: any, localDate: ModelValueDate) {
  const selectYears: number[] = []

  const endYear = props.endYear ? props.endYear : 2100
  for (let i = props.beginYear; i <= endYear; i++) {
    selectYears.push(i)
  }
  const nowDate: Date = new Date()
  // 当前展示的年份和月份
  // #region
  const viewYear = ref(localDate.year ? localDate.year : nowDate.getFullYear())
  const viewMonth = ref(localDate.month ? localDate.month : nowDate.getMonth() + 1)
  // 该月第一天的周数
  const viewFirstWeek = computed((): number => {
    return theWeekOfDay(viewYear.value, viewMonth.value, 1)
  })
  // 该月天数
  const viewDays = computed(() => {
    return theDays(viewYear.value, viewMonth.value)
  })
  // #endregion

  // 年份后退
  function yearBack (): void {
    viewYear.value--
  }
  // 年份前进
  function yearForward (): void {
    viewYear.value++
  }
  // 月份后退
  function monthBack (): void {
    if (viewMonth.value === 1) {
      viewYear.value--
      viewMonth.value = 12
    } else viewMonth.value--
  }
  // 年份前进
  function monthForward (): void {
    if (viewMonth.value === 12) {
      viewYear.value++
      viewMonth.value = 1
    } else viewMonth.value++
  }

  /**
   * 选择日期更换
   * @param d date天数
   */
  function update (d: string | number): void {
    if (typeof d === 'string') d = parseInt(d)
    if (!props.end) {
      localDate.year = viewYear.value
      localDate.month = viewMonth.value
      localDate.date = d
    } else {
      localDate.endYear = viewYear.value
      localDate.endMonth = viewMonth.value
      localDate.endDate = d
    }
  }

  /**
   * 选择月份更换
   * @param m 月份
   */
  function updateMonth (m: number | string): void {
    if (typeof m === 'string') m = parseInt(m)
    if (!props.end) {
      localDate.year = viewYear.value
      localDate.month = m
    } else {
      localDate.endYear = viewYear.value
      localDate.endMonth = m
    }
  }

  /**
   * 选择今天的日期
   */
  function today (): void {
    viewYear.value = nowDate.getFullYear()
    viewMonth.value = nowDate.getMonth() + 1
    if (!props.end) {
      localDate.date = nowDate.getDate()
      localDate.year = viewYear.value
      localDate.month = viewMonth.value
    } else {
      localDate.endDate = nowDate.getDate()
      localDate.endYear = viewYear.value
      localDate.endMonth = viewMonth.value
    }
  }
  /**
   * 选择本月
   */
  function thisMonth (): void {
    viewYear.value = nowDate.getFullYear()
    if (!props.end) {
      localDate.year = nowDate.getFullYear()
      localDate.month = nowDate.getMonth() + 1
    } else {
      localDate.endYear = nowDate.getFullYear()
      localDate.endMonth = nowDate.getMonth() + 1
    }
  }
  /**
   * 选择今年
   */
  function thisYear (): void {
    viewYear.value = nowDate.getFullYear()
    if (!props.end) {
      localDate.year = nowDate.getFullYear()
    } else {
      localDate.endYear = nowDate.getFullYear()
    }
  }

  /**
   * 选择年份更换
   * @param y year 年份
   */
  function updateYear (y: number | string): void {
    if (typeof y === 'string') y = parseInt(y)
    if (!props.end) {
      localDate.year = y
    } else {
      localDate.endYear = y
    }
  }

  // 用于视图渲染的天数数组
  const renderDays = computed((): string[] => {
    let nowDays: string[]
    switch (viewDays.value) {
      case 28:
        nowDays = [...day28]
        break
      case 29:
        nowDays = [...day29]
        break
      case 30:
        nowDays = [...day30]
        break
      case 31:
        nowDays = [...day31]
        break
    }
    return nowDays
  })
  // 日历渲染的前半部分列表
  const renderBefore = computed((): string[] => {
    const year = viewMonth.value === 1 ? viewYear.value - 1 : viewYear.value
    const month = viewMonth.value === 1 ? 12 : viewMonth.value - 1
    const beforeDays = theDays(year, month)
    const res: string[] = []
    // 前插空字符串
    for (let i = 0, j = beforeDays; i < viewFirstWeek.value; i++, j--) {
      res.unshift(j + '')
    }
    return res
  })
  // 日历渲染的后半部分列表
  const renderAfter = computed((): string[] => {
    const res: string[] = []
    const finalInsert = 42 - viewDays.value - viewFirstWeek.value
    // 后插空字符串
    for (let i = 1; i <= finalInsert; i++) {
      res.push(i + '')
    }
    return res
  })

  return {
    viewYear,
    viewMonth,
    // 该月第一天的周数
    viewFirstWeek,
    // 该月天数
    viewDays,
    // 渲染前插列表
    renderBefore,
    // 渲染列表
    renderDays,
    // 渲染后插列表
    renderAfter,
    // 年份后退
    yearBack,
    // 年份前进
    yearForward,
    // 月份后退
    monthBack,
    // 年份前进
    monthForward,
    // 选择更新
    update,
    updateMonth,
    updateYear,
    nowDate,
    today,
    thisMonth,
    thisYear,
    selectMonths,
    selectYears
  }
}
