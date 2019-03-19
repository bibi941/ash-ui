<template>
  <div style="display: flex;justify-content: center;align-items: center;">
    <ash-pager :total-page="20" :current-page.sync="currentPage"></ash-pager>
  </div>
</template>

<script>
  import pager from '../../../src/pager'

  export default {
    name: 'app',
    components: {
      'ash-pager': pager,

    },
    data() {
      return {
        currentPage: 10
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
