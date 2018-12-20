<template>
  <div class="cascader-item" :style="{height}">
    <div class="left">
      <div class="label" v-for="item in source" @click="onClickLabel(item)">
        <span class="name">{{item.name}}</span>
        <icon v-if="rightArrowVisible(item)" class="icon" name="right"></icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <ash-cascader-items :height="height" :source="rightItems" :selected="selected" :level="level+1" @update:selected="onUpdateSelected">
      </ash-cascader-items>
    </div>
  </div>
</template>

<script>
  import icon from './icon'

  export default {
    name: 'ash-cascader-items',
    components: {icon},
    props: {
      height: {
        type: String,
        default: '160px'
      },
      selected: {
        type: Array,
        default: () => []
      },
      source: {
        type: Array
      },
      level: {
        type: Number,
        default: 0
      },
      loadData: {
        type: Function
      }
    },
    computed: {
      //递归组件的精髓，source 永远是上一层的 children
      rightItems() {
        if (this.selected[this.level]) {
          let item = this.source.filter(item => item.name === this.selected[this.level].name)
          if (item && item[0].children && item[0].children.length > 0) {
            return item[0].children
          }
        }
      }
    },
    data() {
      return {}
    },
    methods: {
      rightArrowVisible(item) {
        return this.loadData ? !item.isLeaf : item.children
      },
      onClickLabel(item) {
        let copy = JSON.parse(JSON.stringify(this.selected))
        copy[this.level] = item
        copy.splice(this.level + 1) // 精髓,删除后面
        this.$emit('update:selected', copy)
      },

      onUpdateSelected(newSelected) {
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
      min-width: 140px;
      border: 1px solid $border-color-light;
      box-shadow: $box-shadow-light;
      padding: 0.3em 0;
      height: 100%;
      overflow: auto;
      .label {
        display: flex;
        padding: 0.3em 0.5em;
        align-items: center;
        cursor: pointer;
        > .name {
          margin-left: 0.5em;
        }
        .icon {
          fill: $grey-lv3;
          margin-left: auto;
        }
        &:hover {
          background: $purple-lv0;
        }
      }
    }
  }
</style>
