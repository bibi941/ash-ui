<template>
  <div>
    <div>
      <h2>主色</h2>
      <div style="width: 250px;height: 150px;display: flex;flex-direction: column;">
        <div class="base" style="width: 100%;height: 50%;border-radius: 4px;color: white;font-size: 24px">Base color #e1bee7</div>
        <div style="display: flex;height: 50%;">
          <div class="item base-0">1</div>
          <div class="item base-1">2</div>
          <div class="item base-2">3</div>
          <div class="item base-3">4</div>
          <div class="item base-4">5</div>
        </div>
      </div>
    </div>

    <div style="display: flex;">
      <div class="xx">
        <h2>辅助色</h2>
        <div style="width: 250px;height: 150px;display: flex;flex-direction: column;">
          <div class="base1" style="width: 100%;height: 100%;border-radius: 4px;color: white;font-size: 24px">Success #2DCE6E</div>
        </div>
      </div>

      <div class="xx">
        <h2>辅助色</h2>
        <div style="width: 250px;height: 150px;display: flex;flex-direction: column;">
          <div class="base2" style="width: 100%;height: 100%;border-radius: 4px;color: white;font-size: 24px">Warning #E6A23B</div>
        </div>
      </div>

      <div class="xx">
        <h2>辅助色</h2>
        <div style="width: 250px;height: 150px;display: flex;flex-direction: column;">
          <div class="base3" style="width: 100%;height: 100%;border-radius: 4px;color: white;font-size: 24px">Error #EF5350</div>
        </div>
      </div>
    </div>

    <div>
      <h2>中性色</h2>
      <div style="width: 250px;height: 150px;display: flex;flex-direction: column;">
        <div class="base4" style="width: 100%;height: 50%;border-radius: 4px;color:  black;font-size: 24px">Neutral #EEEEEE</div>
        <div style="display: flex;height: 50%;">
          <div class="item base-5">1</div>
          <div class="item base-6">2</div>
          <div class="item base-7">3</div>
          <div class="item base-8">4</div>
          <div class="item base-9">5</div>
          <div class="item base-10">6</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    components: {}
  }
</script>

<style scoped lang='scss' type="text/scss">
  @import "var";

  .base {
    background: $purple-lv1;
  }

  .base1 {
    background: #2DCE6E;
  }

  .base2 {
    background: $orange;
  }
  .base3 {
    background: $red-error;
  }
  .base4 {
    background: $grey-lv1;
  }

  .xx {
    margin:  0 18px 0 0;
  }
  .item {
    height: 100%;
    flex: 1;
  }

  .base-0 {
    background: $purple-lv0;
  }

  .base-1 {
    background: $purple-lv2;
  }

  .base-2 {
    background: $purple-lv3;
  }

  .base-3 {
    background: $purple-lv4;
  }

  .base-4 {
    background: $purple-lv5;
  }
  .base-4 {background: $white}
  .base-5 {background: $grey-lv0;}
  .base-6 {background: $grey-lv2;}
  .base-7 {background: $grey-lv3;}
  .base-8 {background: $grey-lv4;}
  .base-9 {background: $grey-lv5;}
  .base-10 {background: $grey-lv6;}
</style>
