let getYearMonthDate = (date) => {
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getData()
  return [year, month, day]
}
export default {
  firstDayOfMonth(date) {
    let [year, month, day] = getYearMonthDate(date)
    return new Date(year, month, 1)
  },
  lastDayOfMonth(date) {
    let [year, month, day] = getYearMonthDate(date)
    return new Date(year, month + 1, 0)
  },
  getYearMonthDate
}

