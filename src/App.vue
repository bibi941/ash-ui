<template>
  <date-piker style="margin: 100px" :today="date" ></date-piker>
</template>

<script>
  import datePiker from './date-piker/date-piker'

  export default {
    name: 'app',
    components: {
      datePiker
    },
    data() {
      return {
        date: new Date()
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
