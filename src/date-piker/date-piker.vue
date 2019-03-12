/**
* @create-date :2019-Mar-Tuesday-11:11 PM
* @author : fangXinRui
*/
<template>
  <div ref="wrapper">
    <ash-popover position="bottom" :container="popoverSubstitute">
      <ash-input :value="formattedValue"></ash-input>
      <!--日期选择器-->
      <template slot="content">
        <div class="ash-date-piker" @selectstart.prevent>
          <!--年月导航-->
          <div class="ash-date-piker-nav">
            <span @click="onClickPrevYear" class="ash-date-piker-nav-item"> <ash-icon name="leftleft"></ash-icon></span>
            <span @click="onClickPrevMonth" class="ash-date-piker-nav-item"><ash-icon name="left"></ash-icon></span>
            <span style="margin:auto" @click="onclickMonth">
              <span class="ash-date-piker-nav-year">{{display.year}}年</span>
              <span class="ash-date-piker-nav-month">{{display.month}}月</span>
            </span>
            <span @click="onClickNextMonth" class="ash-date-piker-nav-item"><ash-icon name="right"></ash-icon></span>
            <span @click="onClickNextYear" class="ash-date-piker-nav-item"><ash-icon name="rightright"></ash-icon></span>
          </div>
          <!--day面板-->
          <div class="ash-date-piker-panels">
            <div class="ash-date-piker-content" v-if="mode === 'month'">月</div>
            <div class="ash-date-piker-content" v-else>
              <div class="ash-date-piker-weekDays">
                <span class="ash-date-piker-weekDay" v-for="i in [1,2,3,4,5,6,0]">{{weekdays[i]}}</span>
              </div>
              <div class="ash-date-piker-row" v-for="i in helper.range(1,7)">
                <span class="ash-date-piker-cell"
                  :class="{currentMonth:isCurrentMonth(getVisibleDay(i,j))}"
                  @click="onClickCell(getVisibleDay(i,j))"
                  v-for="j in helper.range(1,8)">
                  {{getVisibleDay(i,j).getDate()}}
                </span>
              </div>
            </div>
            <div class="ash-date-piker-actions"></div>
            <button>清除</button>
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
  import helper from './data-helper'

  export default {
    name: 'ash-date-piker',
    components: {AshInput, AshPopover, AshIcon},
    props: {
      // todo 周日 star or 周一 star
      firstDayOfWeek: {
        type: Number,
        default: 1
      },
      value: {
        type: Date,
        default: () => new Date()
      }
    },
    data() {
      let [year, month] = helper.getYearMonthDate(this.value)
      return {
        helper,
        mode: 'day', //模式
        weekdays: ['日', '一', '二', '三', '四', '五', '六'],
        popoverSubstitute: null,
        display: {year, month} //展示的日期
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
        let [year, month, day] = helper.getYearMonthDate(this.value)
        return `${year}-${month + 1}-${day}`
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
          // this.value = date
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
      getVisibleDay(i, j) {
        return this.visibleDays[(i - 1) * 7 + (j - 1)]
      },
      isCurrentMonth(date) {
        let [year, month] = helper.getYearMonthDate(date)
        return year === this.display.year && month === this.display.month
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
  }

  /deep/ .ash-popover-content-wrapper {
    padding: 0 8px;
  }

</style>
