/**
* @create-date :2019-Jan-Sunday-10:30 PM
* @author : fangXinRui
*/
<template>
  <div class="b-nav" :class="{vertical}" >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ash-nav',
    provide() {
      return {
        root: this,
        vertical:this.vertical
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
      },
      vertical:{
        type:Boolean,
        default:false
      }
    },
    data() {
      return {
        items: [],
        namePath:[]
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
  @import "_var";

  .b-nav {
    &.vertical{
      flex-direction: column;
    }
    font-family: $font-family;
    font-size: $font-size;
    font-weight: 300;
    display: flex;
    border: 1px solid $grey-lv1;
    user-select: none;
    cursor: pointer;
  }
</style>
