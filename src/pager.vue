/**
* @create-date :2019-Jan-Tuesday-10:10 PM
* @author : fangXinRui
*/
<template>
  <div class="ash-pager">
    <span v-for="page in pages">
      {{page}}
    </span>
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
      let pages = [
        1, this.currentPage - 2,
        this.currentPage - 1, this.currentPage,
        this.currentPage + 1, this.currentPage + 2, this.totalPage
      ]
      pages = pages.sort((a, b) => a - b)
      pages = this.unique(pages)
      let u = pages.reduce((prev, current, index) => {
        if (pages[index + 1] && pages[index + 1] - pages[index] > 1) {
          prev.push(current)
          prev.push('...')
        } else {
          prev.push(current)
        }
        return prev
      }, [])
      return {
        pages:u
      }
    },
    computed: {},
    created() {
    },
    mounted() {

    },
    methods: {
      unique(arr) {
        return [...new Set(arr)]
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">

</style>
