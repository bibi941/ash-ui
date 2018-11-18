<template>
  <div class="cascader-item" :style="{height}">
    <div class="left">
      <div  class="label" v-for="item in items" @click="onClickLabel(item)">
        {{item.name}}
        <icon v-if="item.children" class="icon" name="right"></icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <ash-cascader-items :height="height" :items="rightItems" :selected="selected" :level="level+1" @update:selected="onUpdateSelected"></ash-cascader-items>
    </div>
  </div>
</template>

<script>
  import icon from './icon'
  export default {
    name: 'ash-cascader-items',
    components:{icon},
    props: {
      height:{
        type:String,
        default:'100px'
      },
      selected: {
        type: Array,
        default: () => []
      },
      items: {
        type: Array
      },
      level: {
        type: Number,
        default: 0
      }
    },
    computed: {
      rightItems() {
        let currentSelected = this.selected[this.level]
        if (currentSelected && currentSelected.children) {
          return currentSelected.children
        } else {
          return null
        }
      }
    },
    data() {
      return {}
    },
    methods: {
      onClickLabel(item) {
        let copy = JSON.parse(JSON.stringify(this.selected))
        copy[this.level] = item
        copy.splice(this.level + 1) // 一句话
        this.$emit('update:selected', copy)
      },
      onUpdateSelected(newSelected){
        this.$emit('update:selected', newSelected)
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">
  @import "base";
  .cascader-item {
    color: $font-color;
    display: flex;
    .left {
      border: 1px solid $border-color-light;
      box-shadow: $box-shadow-light;
      padding: 0.3em 0;
      height: 100%;
      .label{
        display: flex;
        padding: .3em 0.5em;
        align-items: center;
        .icon{
          fill: $purple-lv2;
        }
      }
    }
    .right {
    }
  }
</style>
