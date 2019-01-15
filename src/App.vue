<template>
  <div>
  </div>
</template>

<script>
  import Nav from './nav/nav'
  import NavItem from './nav/nav-item'
  import SubNav from './nav/sub-nav'
  import Button from './button/button'

  export default {
    name: 'app',
    components: {
      'b-nav': Nav,
      'b-nav-item': NavItem,
      'b-sub-nav': SubNav,
      'b-button': Button

    },
    data() {
      return {
        selected: 'culture'
      }
    },
    methods: {},
    created() {
    }
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

</style>
