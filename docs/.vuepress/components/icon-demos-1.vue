<template>
  <div style="border: 1px solid #555555;border-radius: 4px">
    <div>
      <ash-icon class="icon" name="leftleft"></ash-icon>
      <ash-icon class="icon" name="rightright"></ash-icon>
      <ash-icon class="icon" name="asc"></ash-icon>
      <ash-icon class="icon" name="desc"></ash-icon>
      <ash-icon class="icon" name="dots"></ash-icon>
      <ash-icon class="icon" name="reload"></ash-icon>
      <ash-icon class="icon" name="loading"></ash-icon>
      <ash-icon class="icon" name="loading1"></ash-icon>
    </div>
    <div>
      <ash-icon class="icon" name="error"></ash-icon>
      <ash-icon class="icon" name="good"></ash-icon>
      <ash-icon class="icon" name="warning"></ash-icon>
      <ash-icon class="icon" name="left"></ash-icon>
      <ash-icon class="icon" name="right"></ash-icon>
      <ash-icon class="icon" name="down"></ash-icon>
      <ash-icon class="icon" name="settings"></ash-icon>
      <ash-icon class="icon" name="download"></ash-icon>
    </div>
  </div>
</template>

<script>
  import ashIcon from '../../../src/icon'

  export default {
    components: {
      'ash-icon': ashIcon
    }
  }
</script>

<style scoped lang='scss' type="text/scss">
  .icon {
    width: 40px;
    height: 40px;
    margin: 24px;
    fill: #626362
  }
</style>
