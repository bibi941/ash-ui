<template>
  <div>
    <ash-button-group>
      <ash-button type="default">上一页</ash-button>
      <ash-button type="default">确定</ash-button>
      <ash-button type="default">下一页</ash-button>
    </ash-button-group>
  </div>
</template>

<script>
  import ashButtonGroup from './button/button-group'
  import ashButton from './button/button'

  export default {
    name: 'app',
    components: {ashButton,ashButtonGroup},
    data() {
      return {

      }
    },
    methods: {},
    created() {
    }
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    boash-sizing: border-box;
  }

</style>
