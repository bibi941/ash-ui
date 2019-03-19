<template>
  <div style="display: flex;align-items: center;">
    <ash-switch class="ddd" v-model="type1"></ash-switch>
    <ash-switch class="ddd"  disabled ></ash-switch>
    <ash-switch class="ddd"  v-model="type2" false-color="mediumpurple" true-color="dodgerblue"></ash-switch>
    <ash-switch class="ddd"  false-text="按月付费" true-text="按年付费" v-model="type3"></ash-switch>
  </div>
</template>

<script>
  import ashSwitch from '../../../src/switch'

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
    box-sizing: border-box;
  }
  .ddd{
    margin: 0 8px;
  }

</style>
