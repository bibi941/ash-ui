<template>
  <div>
      <b-nav :selected.sync="selected">
        <b-nav-item name="home">首页</b-nav-item>
        <b-nav-item name="email">邮箱</b-nav-item>
        <b-nav-item name="about">关于</b-nav-item>
      </b-nav>
  </div>
</template>

<script>
  import Nav from './nav/nav'
  import NavItem from './nav/nav-item'
  import SubNav from './nav/sub-nav'

  export default {
    name: 'app',
    components: {
      'b-nav': Nav,
      'b-nav-item': NavItem,
      'b-sub-nav': SubNav,

    },
    data() {
      return {
        selected: ['home']
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
