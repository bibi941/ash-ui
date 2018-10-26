<template>
  <div class="tabs-item" @click="onclick" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ash-tabs-item',
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: [String, Number],
        required: true
      }
    },
    inject: ['eventBus'],
    data() {
      return {
        active: false
      }
    },
    computed: {
      classes() {
        return {
          active: this.active,
          disabled: this.disabled

        }
      }
    },
    methods: {
      onclick() {
        if (this.disabled) {
          return
        }
        this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
        //测试
        this.$emit('click', this)
      }
    },
    mounted() {
      this.eventBus && this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name
      })
    }
  }
</script>

<style scoped lang='scss' type="text/scss">
  $purple-lv3: #8640FF;
  .tabs-item {
    cursor: pointer;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    &.active {
      color: $purple-lv3;
      font-weight: bold;
    }
    &.disabled {
      color: grey;
      cursor: not-allowed;
    }
  }

</style>
