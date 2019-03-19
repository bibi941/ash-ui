<template>
  <div v-show="active" class="ash-tabs-pane" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ash-tabs-pane',
    inject: ['eventBus'],
    props: {
      name: {
        type: [String, Number],
        required: true
      }
    },
    data() {
      return {
        active: false
      }
    },
    computed: {
      classes() {
        return {
          active: this.active
        }
      }
    },
    mounted() {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name
      })
    }
  }
</script>

<style scoped lang='scss' type="text/scss">
</style>
