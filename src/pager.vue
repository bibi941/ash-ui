/**
* @create-date :2019-Jan-Tuesday-10:10 PM
* @author : fangXinRui
*/
<template>
  <div class="ash-pager">
    <span v-for=""></span>
  </div>
</template>

<script>
  export default {
    name: 'ash-pager',
    props: {
      totalPage: {
        type: Number,
        required: true
      },
      currentPage: {
        type: Number,
        required: true
      },
      hideIfOnePage: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        pages:[]
      }
    },
    created() {
    },
    mounted() {
    },
    computed: {},
    methods: {}
  }
</script>

<style scoped lang='scss' type="text/scss">

</style>
