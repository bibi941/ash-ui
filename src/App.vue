<template>
  <div style="padding: 100px">
    <div class="ddd">
      <ash-input v-model="value1" clearable></ash-input>
    </div>
    <div class="ddd">
      <ash-input disabled clearable></ash-input>
    </div>
    <div class="ddd">
      <ash-input v-model="value2" readonly clearable></ash-input>
    </div>
    <div class="ddd">
      <ash-input error="丢你老母"></ash-input>
    </div>

    <div style="width: 200px;height: 200px;background: green;padding: 20px;position: relative" @mouseenter="aaa=true"  @mouseleave="aaa= false">
      <div v-if="aaa" style="width: 5px;height: 5px;background: red;position: absolute;top:50px;right: 50px;"></div>
    </div>
  </div>
</template>

<script>
  import ashInput from './input'

  export default {
    name: 'app',
    components: {
      ashInput
    },
    data() {
      return {
        value1: '牛批',
        value2: '啊啊啊啊',
        aaa:false,
      }
    },
    methods: {
      click() {
        console.log(1)
      }
    },
    created() {
    }
  }
</script>

<style lang="scss" type="text/scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .ddd {
    margin: 18px;
  }
</style>
