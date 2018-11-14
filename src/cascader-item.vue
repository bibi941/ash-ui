<template>
  <div class="cascader-item">
    <div class="left">
      <!--{{selected}}}-->
      <div v-for="item in items" @click="onClickLabel(item)">
        {{item.name}}
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <ash-cascader-items :items="rightItems" :selected="selected" :level="level+1" @update:selected="onUpdateSelected"></ash-cascader-items>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ash-cascader-items',
    props: {
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
  .cascader-item {
    display: flex;
    .left {
      border: 1px solid forestgreen;
    }
    .right {
      border: 1px solid mediumpurple;
    }
  }
</style>
