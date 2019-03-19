<template>
  <div>
    <ash-switch v-model="type1"></ash-switch>
    <ash-switch disabled ></ash-switch>
    <ash-switch v-model="type2" false-color="mediumpurple" true-color="dodgerblue"></ash-switch>
    <ash-switch false-text="按月付费" true-text="按年付费" v-model="type3"></ash-switch>
  </div>
</template>

<script>
  import ashSwitch from './switch'

  export default {
    name: 'app',
    components: {ashSwitch},
    data() {
      return {
        type1:'',
        type2:'',
        type3:'',
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
