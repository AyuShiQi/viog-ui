/**
 * 判断某天是星期几,返回1~7, 可能有bug
 * @param y 年
 * @param m 月
 * @param d 日
 * @returns 周数
 */
function theWeekOfDay(y: number, m: number, d: number): number {
  // 公式信息初始化,zeller
  if(m === 1 || m === 2) {
    y--
    m += 12
  }
  // 世纪
  const c = Math.trunc(y/100)
  // 年
  y %= 100
  // 0 ~ 6
  let week = (y + Math.trunc(y / 4) + Math.trunc(c / 4) - 2 * c + Math.trunc(26 * (m + 1) / 10) + d - 1) % 7

  if(week <= 0) week = Math.abs(week+=7)
  return week
}

/**
 * 判断该月有几天
 * @param year 年份
 * @param month 月份
 * @returns {Number} 月份天数
 */
function theDays(year: number, month: number): 29 | 30 | 31 {
  switch(year) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31
    case 2:
      if(isLeapYear(year)) return 29
    default:
      return 30
  }
}

/**
 * 判断年份是否为闰年
 * @param year 年份
 * @returns true or false
 */
function isLeapYear(year: number): boolean {
  return year % 4 === 0 && year % 100 !== 0
}

/**
 * 格式化数字,把月、日、小时等出现个位数的情况前面补充 0 ，补充为两位
 * @param digit 待格式化的数字
 * @returns 格式化好后的字符串
 */
function formatTimeDigit(digit: number): string {
  if(digit / 10 < 1){
    return '0' + digit;
  }
  return '' + digit;
}


export {
  theWeekOfDay,
  theDays,
  isLeapYear,
  formatTimeDigit
}