<template>
  <div>
    <ash-pager ></ash-pager>
  </div>
</template>

<script>
  import pager from 'pager'

  export default {
    name: 'app',
    components: {
      'ash-pager': pager,

    },
    data() {
      return {
        selected: 'culture'
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
    box-sizing: border-box;
  }

</style>
