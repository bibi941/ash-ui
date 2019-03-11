/**
* @create-date :2019-Mar-Tuesday-11:11 PM
* @author : fangXinRui
*/
<template>
  <div ref="wrapper">
    <ash-popover position="bottom" :container="substitute">
      <ash-input></ash-input>
      <!--日期选择器-->
      <template slot="content">
        <div class="ash-date-piker">
          <!--年月导航-->
          <div class="ash-date-piker-nav">
            <span> <ash-icon name="leftleft"></ash-icon></span>
            <span><ash-icon name="left"></ash-icon></span>
            <span @click="onclickYear">2012年</span>
            <span @click="onclickMonth">8月</span>
            <span><ash-icon name="right"></ash-icon></span>
            <span><ash-icon name="rightright"></ash-icon></span>
          </div>
          <!--day面板-->
          <div class="ash-date-piker-panels">
            <div class="ash-date-piker-content" v-if="mode === 'years'">年</div>
            <div class="ash-date-piker-content" v-else-if="mode === 'months'">月</div>
            <div class="ash-date-piker-content" v-else>
              <div class="ash-date-piker-weekDays">
                <span v-for="i in [1,2,3,4,5,6,0]">{{weekdays[i]}}</span>
              </div>
              <div class="ash-date-piker-row" v-for="i in helper.range(1,7)">
                <span class="ash-date-piker-cell" v-for="j in helper.range(1,8)">
                  {{visibleDays[(i-1)*7+(j-1)].getDate()}}
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
    },
    data() {
      return {
        helper,
        mode: 'days', //模式
        value: new Date(),
        weekdays: ['日', '一', '二', '三', '四', '五', '六'],
        substitute: null
      }
    },
    computed: {
      //面板可见日期
      visibleDays() {
        let date = new Date(2019, 2, 1)
        let first = this.helper.firstDayOfMonth(date)
        let last = this.helper.lastDayOfMonth(date)
        let [year, month, day] = this.helper.getYearMonthDate(date)
        let arr = []
        for (let i = first.getDate(); i <= last.getDate(); i++) {
          arr.push(new Date(year, month, i))
        }
        let n = first.getDay() === 0 ? 6 : first.getDay() - 1 //前面补充几个
        let arr2 = []
        for (let i = 0; i < n; i++) {
          arr2.push(new Date(year, month, -i))
        }
        arr2.reverse()
        let arr3 = []
        let m = 42 - arr.length - arr2.length //后面补几个
        for (let i = 1; i <= m; i++) {  //i =1号
          arr3.push(new Date(year, month + 1, i))
        }
        return [...arr2, ...arr, ...arr3]
      }
    },
    mounted() {
      this.substitute = this.$refs.wrapper
    },
    methods: {
      onclickYear() {
        this.mode = 'years'
      },
      onclickMonth() {
        this.mode = 'months'
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">
  @import "var";

  .ash-date-piker {
    color: $grey-lv6;
    &-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
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
  }
  /deep/ .ash-popover-content-wrapper{
    padding: 0;
  }

</style>
