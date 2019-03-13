/**
* @create-date :2019-Mar-Tuesday-11:11 PM
* @author : fangXinRui
*/
<template>
  <div ref="wrapper">
    <ash-popover position="bottom" ref="popover" :container="popoverSubstitute" @close="onClosePopover">
      <ash-input :value="formattedValue"></ash-input>
      <!--日期选择器-->
      <template slot="content">
        <div class="ash-date-piker" @selectstart.prevent>
          <!--年月导航-->
          <div class="ash-date-piker-nav">
            <span @click="onClickPrevYear" class="ash-date-piker-nav-item"> <ash-icon name="leftleft"></ash-icon></span>
            <span @click="onClickPrevMonth" class="ash-date-piker-nav-item"><ash-icon name="left"></ash-icon></span>
            <!--todo scope year-->
            <span style="margin:auto" @click="onclickMonth">
              <span class="ash-date-piker-nav-year">{{display.year}}年</span>
              <span class="ash-date-piker-nav-month">{{display.month+1}}月</span>
            </span>
            <span @click="onClickNextMonth" class="ash-date-piker-nav-item"><ash-icon name="right"></ash-icon></span>
            <span @click="onClickNextYear" class="ash-date-piker-nav-item"><ash-icon name="rightright"></ash-icon></span>
          </div>
          <!--day面板-->
          <div class="ash-date-piker-panels">
            <div class="ash-date-piker-content-month" v-if="mode === 'month'">
              <div class="ash-date-piker-content-month-selects">
                <select name="" @change="onSelectYear" :value="display.year">
                  <option v-for="year in selectLimitYears" :value="year">{{year}}</option>
                </select>
                <span>年</span>
                <select name="" @change="onSelectMonth" :value="display.month">
                  <option v-for="month in helper.range(0,12)" :value="month">{{month+1}}</option>
                </select>
                <div>月</div>
              </div>
              <div class="ash-date-piker-content-month-modeToDay">
                <ash-button @click="mode='day'">返回</ash-button>
              </div>
            </div>
            <div class="ash-date-piker-content-day" v-else>
              <div class="ash-date-piker-weekDays">
                <span class="ash-date-piker-weekDay" v-for="i in [1,2,3,4,5,6,0]">{{weekdays[i]}}</span>
              </div>
              <div class="ash-date-piker-row" v-for="i in helper.range(1,7)">
                <span class="ash-date-piker-cell"
                  :class="{currentMonth:isCurrentMonth(getVisibleDay(i,j)),
                  selected:isSelected(getVisibleDay(i,j)),
                  today: isToday(getVisibleDay(i,j))}"
                  @click="onClickCell(getVisibleDay(i,j))"
                  v-for="j in helper.range(1,8)">
                  {{getVisibleDay(i,j).getDate()}}
                </span>
              </div>
            </div>
            <div class="ash-date-piker-actions">
              <ash-button @click="onClickToday">今天</ash-button>
              <ash-button @click="onClickClear">清除</ash-button>
            </div>
          </div>
        </div>
      </template>
    </ash-popover>
  </div>
</template>

<script>
  import AshInput from '../input'
  import AshPopover from '../popover'
  import AshIcon from '../icon'
  import AshButton from '../button/button'
  import helper from './data-helper'

  export default {
    name: 'ash-date-piker',
    components: {AshInput, AshPopover, AshIcon, AshButton},
    props: {
      // todo 周日 star or 周一 star
      firstDayOfWeek: {
        type: Number,
        default: 1
      },
      value: {
        type: [Date]//input 内日期
      },
      scope: {
        type: Array,
        default: () => [new Date(1900, 0, 1), helper.addYear(new Date(), 100)]
      }
    },
    data() {
      let [year, month] = helper.getYearMonthDate(this.value || new Date())
      return {
        helper,
        mode: 'day', //模式
        weekdays: ['日', '一', '二', '三', '四', '五', '六'],
        popoverSubstitute: null,
        today: new Date(),
        display: {year, month} //展示的日期(42个 span)
      }
    },
    computed: {
      //面板可见日期
      visibleDays() {
        let arr = []
        let date = new Date(this.display.year, this.display.month, 1)
        let first = this.helper.firstDayOfMonth(date)
        let last = this.helper.lastDayOfMonth(date)
        let [year, month, day] = this.helper.getYearMonthDate(date)
        let weekdayOfFirst = first.getDay() //本月一号是星期几
        let x = first - (weekdayOfFirst === 0 ? 6 : weekdayOfFirst - 1) * 86400 * 1000
        for (let i = 0; i < 42; i++) {
          arr.push(new Date(x + i * 86400 * 1000))
        }
        return arr
      },
      formattedValue() {
        if (!this.value) {
          return ''
        }
        let [year, month, day] = helper.getYearMonthDate(this.value)
        return `${year}-${helper.padLeft(month + 1)}-${helper.padLeft(day)}`
      },
      selectLimitYears() {
        return helper.range(this.scope[0].getFullYear(), this.scope[1].getFullYear() + 1)
      }

    },
    mounted() {
      this.popoverSubstitute = this.$refs.wrapper
    },
    methods: {
      onclickMonth() {
        if (this.mode !== 'month') {
          this.mode = 'month'
        } else {
          this.mode = 'days'
        }
      },
      onClickCell(date) {
        if (this.isCurrentMonth(date)) {
          this.$emit('update:value', date)
          this.$refs.popover.close()
        }
      },
      onClickPrevYear() {
        let oldDate = new Date(this.display.year, this.display.month)
        let newDate = helper.addYear(oldDate, -1)
        let [year, month] = helper.getYearMonthDate(newDate)
        this.display = {year, month}

      },
      onClickPrevMonth() {
        let oldDate = new Date(this.display.year, this.display.month)
        let newDate = helper.addMonth(oldDate, -1)
        let [year, month] = helper.getYearMonthDate(newDate)
        this.display = {year, month}
      },
      onClickNextMonth() {
        let oldDate = new Date(this.display.year, this.display.month)
        let newDate = helper.addMonth(oldDate, 1)
        let [year, month] = helper.getYearMonthDate(newDate)
        this.display = {year, month}
      },
      onClickNextYear() {
        let oldDate = new Date(this.display.year, this.display.month)
        let newDate = helper.addYear(oldDate, 1)
        let [year, month] = helper.getYearMonthDate(newDate)
        this.display = {year, month}

      },
      onSelectYear(e) {
        let year = +e.target.value
        let date = new Date(year, this.display.month)
        if (date >= this.scope[0] && date <= this.scope[1]) {
          this.display.year = year
        } else {
          e.target.value = this.display.year

        }

      },
      onSelectMonth(e) {
        let month = +e.target.value
        let date = new Date(this.display.year, month)
        if (date >= this.scope[0] && date <= this.scope[1]) {
          this.display.month = month
        } else {
          e.target.value = this.display.month
        }

      },
      onClickToday() {
        let [year, month, day] = helper.getYearMonthDate(this.today)
        this.display = {year, month}
        this.$emit('update:value', new Date(year, month, day))
      },
      onClickClear() {
        this.$emit('update:value', null)
        this.$refs.popover.close()
      },
      onClosePopover(){
        this.mode = 'day'
      },
      getVisibleDay(i, j) {
        return this.visibleDays[(i - 1) * 7 + (j - 1)]
      },
      isCurrentMonth(date) {
        let [year, month] = helper.getYearMonthDate(date)
        return year === this.display.year && month === this.display.month
      },
      isSelected(date) {
        if (!this.value) {
          return false
        }
        let [year, month, day] = helper.getYearMonthDate(date)
        let [year2, month2, day2] = helper.getYearMonthDate(this.value)
        return year === year2 && month === month2 && day === day2
      },
      isToday(date) {
        let [year, month, day] = helper.getYearMonthDate(date)
        let [year2, month2, day2] = helper.getYearMonthDate(this.today)
        return year === year2 && month === month2 && day === day2
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">
  @import "var";

  .ash-date-piker {
    color: $grey-lv6;
    font-weight: 400;
    font-size: 12px;
    &-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-year, &-month {
        font-weight: 500;
        font-size: 14px;
      }
      > span {
        cursor: pointer;
        &:hover {
          color: $purple-lv4;
        }
        > svg {
          &:hover {
            fill: $purple-lv4;
          }
          fill: $grey-lv4;
        }
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
    }
    &-cell {
      color: $grey-lv1;
      cursor: not-allowed;
      &.currentMonth {
        color: $grey-lv6;
        &:hover {
          color: $purple-lv1;
          cursor: pointer;
        }
      }
      &.currentMonth.selected,
      &.currentMonth.selected.today {
        background: $purple-lv1;
        color: white;
        border-radius: 4px;
      }
      &.currentMonth.today {
        background: white;
        color: $purple-lv1;
        font-weight: 500;
        border-radius: 0;
      }
    }
    &-weekDay {
      border-bottom: 1px solid $grey-lv1;
      cursor: default;
    }
    &-cell, &-weekDay, &-nav-item {
      width: 32px;
      height: 32px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    &-content-month {
      width: 224px;
      height: 224px;
      padding: 0 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      &-selects {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &-modeToDay {
        margin-top: 8px;
      }
    }
    &-actions {
      padding: 8px 0;
      text-align: right;
      > button {
        margin-left: 4px;
      }
    }
  }

  /deep/ .ash-popover-content-wrapper {
    padding: 0 8px;
  }

</style>
