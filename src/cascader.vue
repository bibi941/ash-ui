<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible=!popoverVisible">
      {{result||'&nbsp'}}
    </div>
    <div class="popover-wrapper">
      <cascader-items class="popover" :height="popoverHeight" :items="source" :selected="selected" @update:selected="onUpdateSelected"></cascader-items>
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
      popoverHeight:{
        type:String,
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
    }
    .popover-wrapper{
      margin-top: 8px;
    }
  }
</style>
