<template>
  <div>
    <div>
      <ash-popover trigger="hover">
        <ash-button>上方弹出</ash-button>
        <template slot="content">
          I am Popover!
        </template>
      </ash-popover>
      <ash-popover position="bottom" trigger="hover">
        <ash-button>下方弹出</ash-button>
        <template slot="content">
          I am Popover!
        </template>
      </ash-popover>
      <ash-popover position="left" trigger="hover">
        <ash-button>左边弹出</ash-button>
        <template slot="content">
          I am Popover!
        </template>
      </ash-popover>
      <ash-popover position="right" trigger="hover">
        <ash-button>右边弹出</ash-button>
        <template slot="content">
          I am Popover!
        </template>
      </ash-popover>
    </div>
  </div>
</template>

<script>
  import Button from '../../../src/button/button'
  import popover from '../../../src/popover'

  export default {
    components: {
      'ash-button': Button,
      'ash-popover': popover,
    },
  }
</script>

<style scoped lang='scss' type="text/scss">

</style>
