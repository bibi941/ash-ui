<template>
  <div class="tabs-item" @click="onclick" :class="classes">
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
    data () {
      return {
        active: false
      }
    },
    computed: {
      classes () {
        return {
          active: this.active
        }
      }
    },
    methods: {
      onclick () {
        this.eventBus.$emit('update:selected', this.name)
      }
    },
    mounted () {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name
      })
    }
  }
</script>

<style scoped lang='scss' type="text/scss">
  .tabs-item {
    cursor: pointer;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    &.active{
      background: red;
    }
  }

</style>
