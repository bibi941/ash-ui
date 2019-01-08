/**
* @create-date :2019-Jan-Sunday-10:30 PM
* @author : fangXinRui
*/
<template>
  <div class="b-nav">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ash-nav',
    provide() {
      return {
        root: this
      }
    },
    props: {
      selected: {
        type: Array,
        default: () => []
      },
      multiple: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        items: []
      }
    },
    created() {
    },
    mounted() {
      this.updateChildren()
      this.listenToChildren()
    },
    updated() {
      this.updateChildren()
    },
    computed: {},
    methods: {
      addItem(vm) {
        this.items.push(vm)
      },
      updateChildren() {
        this.items.forEach(vm => {
            vm.selected = this.selected.indexOf(vm.name) >= 0
          }
        )
      },
      listenToChildren() {
        this.items.forEach(vm => {
          vm.$on('add:selected', (name) => {
            //多个展开
            if (this.multiple) {
              if (this.selected.indexOf(name) < 0) {
                let copy = JSON.parse(JSON.stringify(this.selected))
                copy.push(name)
                this.$emit('update:selected', copy)
              }
            } else {
              this.$emit('update:selected', [name])
            }
          })
        })
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">
  @import "_base";
  .b-nav {
    display: flex;
    border: 1px solid $grey-lv2;
  }
</style>
