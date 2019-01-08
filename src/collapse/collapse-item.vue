<template>
  <div class="collapse-item" ref="collapseItem">
    <div class="title" @click="toggle">
      {{title}}
    </div>
    <div class="contents" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ash-collapse-item',
    props: {
      title: {
        type: String,
        required: true
      },
      name: {
        type: String
      }
    },
    inject: ['eventBus'],
    data() {
      return {
        open: false
      }
    },
    mounted() {
      this.banContent()
      this.eventBus && this.eventBus.$on('update:selected', (names) => {
        this.open = names.indexOf(this.name) >= 0;
      })
    },
    methods: {
      toggle() {
        if (this.open) {
          this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
        } else {
          this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
        }
      },
      banContent() {//如果没有 content 则禁用collapse
        if (!this.$refs.collapseItem.querySelector('.content').childNodes[0]) {
          this.$refs.collapseItem.querySelector('.title').style.cursor = 'not-allowed'
        }
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">
  @import "var";
  .collapse-item {
    .title {
      border: 1px solid $grey-lv3;
      margin-top: -1px;
      margin-left: -1px;
      margin-right: -1px;
      min-height: 32px;
      display: flex;
      align-items: center;
      padding: 0 8px;
      cursor: pointer;
      background: $grey-lv2;
    }
    &:first-child {
      .title {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
    }
    &:last-child {
      .title:last-child {
        /*border-bottom: none;*/
        /*border-bottom-left-radius: 4px;*/
        /*border-bottom-right-radius: 4px;*/
      }
    }
  }
</style>
