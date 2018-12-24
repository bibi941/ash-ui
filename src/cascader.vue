<template>
  <div class="cascader" v-click-outside="close">
    <div class="trigger" :class="{ active: popoverVisible }" @click="toggle">
      <span>{{result || '&nbsp'}}</span>
      <icon name="down" class="arrow"></icon>
    </div>
    <div class="popover-wrapper" v-show="popoverVisible">
      <cascader-items class="popover"
        :height="popoverHeight"
        :source="source"
        :selected="selected"
        :loadData="loadData"
        :loadingItem="loadingItem"
        @update:selected="onUpdateSelected">
      </cascader-items>
    </div>
  </div>
</template>

<script>
  import cascaderItems from './cascader-item'
  import ClickOutside from './click-outside'
  import icon from './icon'

  export default {
    name: 'ash-cascader',
    components: {cascaderItems, icon},
    directives: {ClickOutside},
    props: {
      selected: {
        type: Array,
        default: () => []
      },
      source: {
        type: Array
      },
      popoverHeight: {
        type: String
      },
      loadData: {
        type: Function
      }
    },
    data() {
      return {
        popoverVisible: false,
        loadingItem: {}
      }
    },
    methods: {
      toggle() {
        this.popoverVisible ? this.close() : this.open()
      },
      close() {
        this.popoverVisible = false
      },
      open() {
        this.popoverVisible = true
      },
      onUpdateSelected(newSelected) {
        this.$emit('update:selected', newSelected)
        let lastItem = newSelected[newSelected.length - 1]  //用户点的那一项

        let simplest = (children, id) => {
          return children.filter(item => item.id === id)[0]
        }
        let complex = (children, id) => {
          let hasChildren = []
          let noChildren = []
          children.forEach(item => {
            if (item.children) {
              hasChildren.push(item)
            } else {
              noChildren.push(item)
            }
          })
          let found = simplest(noChildren, id)
          if (found) {
            return found
          } else {
            found = simplest(hasChildren, id)
            if (found) {
              return found
            } else {
              //hasChildren全部找一遍
              for (let i = 0; i < hasChildren.length; i++) {
                found = complex(hasChildren[i].children, id)  //递归 精髓！！
                if (found) {
                  return found
                }
              }
              return null
            }
          }
        }
        let upDateSource = (result) => {
          this.loadingItem = {}
          let copy = JSON.parse(JSON.stringify(this.source))
          let toUpdateItem = complex(copy, lastItem.id)
          toUpdateItem.children = result
          this.$emit('update:source', copy)
        }
        if (!lastItem.isLeaf && this.loadData) {
          this.loadData(lastItem, upDateSource)  //callback
          this.loadingItem = lastItem
        }
      }
    },
    computed: {
      result() {
        return this.selected.map((item) => item.name).join('/')
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">
  @import "base";

  .cascader {
    display: inline-block;
    position: relative;
    .trigger {
      height: $input-height;
      min-width: 10em;
      display: inline-flex;
      align-items: center;
      padding: 0 1em;
      border: 1px solid $grey-lv2;
      border-radius: $border-radius-light;
      color: $font-color;
      cursor: pointer;
      .arrow {
        fill: $grey-lv4;
        position: absolute;
        top: 25%;
        right: 2%;
        transition: transform .3s;
        transform: rotate(180deg);

      }
    }
    .trigger.active {
      border: 1px solid $purple-lv1;
      .arrow {
        transform: rotate(0deg);
      }
    }

    .popover-wrapper {
      position: absolute;
      top: 100%;
      left: 0;
      background: white;
      display: flex;
      margin-top: 8px;
      z-index: 1;
    }
  }
</style>
