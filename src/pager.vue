/**
* @create-date :2019-Jan-Tuesday-10:10 PM
* @author : fangXinRui
*/
<template>
  <div class="ash-pager">
    <span v-for="page in pages" class="ash-pager-item"
      :class="{active:page === currentPage,separator:page=== '...'}">
      {{page}}
    </span>
  </div>
</template>

<style scoped lang='scss' type="text/scss">
  @import 'var';

  .ash-pager {
    &-item {
      color: $grey-lv5;
      font-size: 12px;
      border: 1px solid $grey-lv2;
      border-radius: $border-radius;
      padding: 0 4px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      min-width: 20px;
      height: 20px;
      margin: 0 4px;
      font-weight: 500;
      cursor: pointer;
      &.active, &:hover {
        border-color: $purple-lv2;
      }
      &.separator{
        border: none;
        cursor: default;
      }
      &.active {
        cursor: default;
      }
    }
  }
</style>

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
      let pages = this.unique([1, this.currentPage - 2,
        this.currentPage - 1, this.currentPage,
        this.currentPage + 1, this.currentPage + 2, this.totalPage]
      .sort((a, b) => a - b))
      .reduce((prev, current, index, arr) => {
        prev.push(current)
        if (arr[index + 1] && arr[index + 1] - arr[index] > 1) {
          prev.push('...')
        }
        return prev
      }, [])

      return {
        pages
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


