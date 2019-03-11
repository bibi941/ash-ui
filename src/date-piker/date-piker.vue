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
        <div class="ash-date-piker">
          <!--年月导航-->
          <div class="ash-date-piker-nav">
            <span class="ash-date-piker-nav-item"> <ash-icon name="leftleft"></ash-icon></span>
            <span class="ash-date-piker-nav-item"><ash-icon name="left"></ash-icon></span>
            <span style="margin:auto">
              <span @click="onclickYear" class="ash-date-piker-nav-year">2012年</span>
              <span @click="onclickMonth" class="ash-date-piker-nav-month">8月</span>
            </span>
            <span class="ash-date-piker-nav-item"><ash-icon name="right"></ash-icon></span>
            <span class="ash-date-piker-nav-item"><ash-icon name="rightright"></ash-icon></span>
          </div>
          <!--day面板-->
          <div class="ash-date-piker-panels">
            <div class="ash-date-piker-content" v-if="mode === 'years'">年</div>
            <div class="ash-date-piker-content" v-else-if="mode === 'months'">月</div>
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
      today: {
        type: Date,
        default: () => new Date()
      }
    },
    data() {
      return {
        helper,
        mode: 'days', //模式
        weekdays: ['日', '一', '二', '三', '四', '五', '六'],
        popoverSubstitute: null,
        selectedValue: this.today
      }
    },
    computed: {
      //面板可见日期
      visibleDays() {
        let arr = []
        let date = this.today
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
        let [year, month, day] = helper.getYearMonthDate(this.selectedValue)
        return `${year}-${month + 1}-${day}`
      }
    },
    mounted() {
      this.popoverSubstitute = this.$refs.wrapper
    },
    methods: {
      onclickYear() {
        this.mode = 'years'
      },
      onclickMonth() {
        this.mode = 'months'
      },
      onClickCell(date) {
        if (this.isCurrentMonth(date)) {
          this.selectedValue = date
        }
      },
      getVisibleDay(i, j) {
        return this.visibleDays[(i - 1) * 7 + (j - 1)]
      },
      isCurrentMonth(date) {
        let [year1, month1] = helper.getYearMonthDate(date)
        let [year2, month2] = helper.getYearMonthDate(this.today)
        return year1 === year2 && month1 === month2
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
