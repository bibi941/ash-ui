<template>
  <div class="cascader">
    <div class="trigger" :class="{ active: popoverVisible }" @click="popoverVisible =! popoverVisible">
      {{result || '&nbsp'}}
    </div>
    <div class="popover-wrapper" v-show="popoverVisible">
      <cascader-items class="popover"
        :height="popoverHeight"
        :source="source"
        :selected="selected"
        :loadData="loadData"
        @update:selected="onUpdateSelected">
      </cascader-items>
    </div>
  </div>
</template>

<script>
  import cascaderItems from './cascader-item'

  export default {
    name: 'ash-cascader',
    components: {cascaderItems},
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
        popoverVisible: false
      }
    },
    methods: {
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
          let copy = JSON.parse(JSON.stringify(this.source))
          let toUpdateItem = complex(copy, lastItem.id)
          toUpdateItem.children = result
          // this.$set(toUpdateItem, 'children', result)
          this.$emit('update:source', copy)
        }
        if (!lastItem.isLeaf) {
          this.loadData && this.loadData(lastItem, upDateSource)  //callback
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
    }
    .trigger.active {
      border: 1px solid $purple-lv1;
    }
    .popover-wrapper {
      margin-top: 8px;
    }
  }
</style>
