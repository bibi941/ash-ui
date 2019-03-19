<template>
  <div>
    <div>
      <ash-slides :selected.sync="selected">
        <ash-slides-item name="1">
          <div class="box">1</div>
        </ash-slides-item>
        <ash-slides-item name="2">
          <div class="box">2</div>
        </ash-slides-item>
        <ash-slides-item name="3">
          <div class="box">3</div>
        </ash-slides-item>
      </ash-slides>
    </div>
  </div>
</template>

<script>
  import slides from '../../../src/slides/slides'
  import slidesItem from '../../../src/slides/slides-item'

  export default {
    components: {
      'ash-slides': slides,
      'ash-slides-item': slidesItem,
    },
    data(){
      return{
        selected: '1'
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">
  @import "var";
  .box{
    height: 300px;
    background: $purple-lv1;
    color: white;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
