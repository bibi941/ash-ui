/**
* @create-date :2019-Jan-Tuesday-10:10 PM
* @author : fangXinRui
*/
<template>
  <div class="ash-pager">
    <span class="ash-pager-nav prev" :class="{disabled:currentPage===1}">
    <ash-icon name="left"></ash-icon>
    </span>
    <template v-for="page in pages">
      <template v-if="page === currentPage">
        <span class="ash-pager-item active">{{page}}</span>
      </template>
      <template v-else-if="page ==='...'">
        <ash-icon class="ash-pager-item separator" name="dots"></ash-icon>
      </template>
      <template v-else>
        <span class="ash-pager-item other">{{page}}</span>
      </template>
    </template>
    <span class="ash-pager-nav next" :class="{disabled:currentPage===totalPage}">
    <ash-icon name="right"></ash-icon>
    </span>
  </div>
</template>

<script>
  import AshIcon from './icon'

  export default {
    name: 'ash-pager',
    components: {AshIcon},
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
        this.currentPage + 1, this.currentPage + 2, this.totalPage].filter(n => n >= 1 & n <= this.totalPage)
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

<style scoped lang='scss' type="text/scss">
  @import 'var';

  $width: 20px;
  $height: 20px;
  $font-size: 12px;
  .ash-pager {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &-nav {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      height: $height;
      width: $width;
      background: $grey-lv0;
      font-size: $font-size;
      border-radius: $border-radius;
      &:hover{
        border: 1px solid $purple-lv2;
      }
      &.disabled {
        border: none;
        svg {
          fill: $grey-lv2;
        }
      }
    }
    &-item {
      color: $grey-lv5;
      font-size: $font-size;
      border: 1px solid $grey-lv2;
      border-radius: $border-radius;
      min-width: $width;
      height: $height;
      background: $grey-lv0;
      padding: 0 4px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin: 0 4px;
      font-weight: 500;
      cursor: pointer;
      &.active, &:hover {
        border-color: $purple-lv2;
      }
      &.separator {
        border: none;
        cursor: default;
        width: $white;
        font-size: $font-size;
      }
      &.active {
        cursor: default;
      }
    }
  }
</style>


