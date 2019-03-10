/**
* @create-date :2019-Mar-Tuesday-11:11 PM
* @author : fangXinRui
*/
<template>
  <div>
    <ash-popover position="bottom">
      <ash-input></ash-input>
      <!--日期选择器-->
      <template slot="content">
        <div class="ash-date-piker-pop">
          <!--年月导航-->
          <div class="ash-date-piker-nav">
            <span> <ash-icon name="settings"></ash-icon></span>
            <span><ash-icon name="settings"></ash-icon></span>
            <span @click="onclickYear">2012年</span>
            <span @click="onclickMonth">8月</span>
            <span><ash-icon name="settings"></ash-icon></span>
            <span><ash-icon name="settings"></ash-icon></span>
          </div>
          <!--day面板-->
          <div class="ash-date-piker-panels">
            <div class="ash-date-piker-content" v-if="mode === 'years'">年</div>
            <div class="ash-date-piker-content" v-else-if="mode === 'months'">月</div>
            <div class="ash-date-piker-content" v-else>日</div>
            <div class="ash-date-piker-actions"></div>
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

  export default {
    name: 'ash-date-piker',
    components: {AshInput, AshPopover, AshIcon},
    props: {},
    data() {
      return {
        mode: 'days' //模式
      }
    },
    computed: {},
    created() {
    },
    mounted() {
    },
    methods: {
      onclickYear(){},
      onclickMonth(){},
    }
  }
</script>

<style scoped lang='scss' type="text/scss">

</style>
