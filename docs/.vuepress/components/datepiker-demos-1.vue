<template>
  <date-piker :value.sync="date" :scope="scope"></date-piker>
</template>

<script>
  import datePiker from '../../../src/date-piker/date-piker'

  export default {
    name: 'app',
    components: {
      datePiker
    },
    data() {
      return {
        date:new Date(),
        scope:[new Date(2001,0,1),new Date(2019,4,1)]
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
