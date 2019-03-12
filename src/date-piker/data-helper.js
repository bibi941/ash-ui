let getYearMonthDate = (date) => {
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()
  return [year, month, day]
}

export default {
  getYearMonthDate,
  firstDayOfMonth(date) {
    let [year, month, day] = getYearMonthDate(date)
    return new Date(year, month, 1)
  },
  lastDayOfMonth(date) {
    let [year, month, day] = getYearMonthDate(date)
    return new Date(year, month + 1, 0)
  },
  range(begin, end) {
    let array = []
    for (let i = begin; i < end; i++) {
      array.push(i)
    }
    return array
  },
  addMonth(date, n) {
    let [year, month, day] = getYearMonthDate(date)
    let copy = new Date(date)
    let newMonth = month + n
    copy.setMonth(newMonth)
    return copy
  },
  addYear(date, n) {
    let [year, month, day] = getYearMonthDate(date)
    let copy = new Date(date)
    let newYear = year + n
    copy.setFullYear(newYear)
    return copy
  }
}

