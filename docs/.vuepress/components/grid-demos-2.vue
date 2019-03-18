/**
* @create-date :2019-Mar-Monday-9:50 PM
* @author : fangXinRui
*/
<template>
<div>
  <ash-row class="demoRow" gutter="10" >
    <ash-col span="8">
      <div class="demoCol">8</div>
    </ash-col>
    <ash-col span="8">
      <div class="demoCol">8</div>
    </ash-col>
    <ash-col span="8">
      <div class="demoCol">8</div>
    </ash-col>
  </ash-row>

  <ash-row class="demoRow" gutter="10" >
    <ash-col span="6">
      <div class="demoCol">6</div>
    </ash-col>
    <ash-col span="6">
      <div class="demoCol">6</div>
    </ash-col>
    <ash-col span="6">
      <div class="demoCol">6</div>
    </ash-col>
    <ash-col span="6">
      <div class="demoCol">6</div>
    </ash-col>
  </ash-row>
</div>
</template>

<script>
  import col from '../../../src/grid/col'
  import row from '../../../src/grid/row'

  export default {
    name: 'grid-demos-2',
    components: {ashCol: col, ashRow: row}
  }
</script>

<style scoped lang='scss' type="text/scss">
  @import "var";
  * {
    box-sizing: border-box;
  }
  .ddd{
  }
  .demoRow{
    margin: 10px 0;
    display: flex;
    flex-wrap: wrap;
  }
  .demoCol{
    height: 50px;
    border-radius: 4px;
    border: 1px solid $grey-lv1;
    background: $purple-lv1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

