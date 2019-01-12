<template>
  <div>
    <b-nav :selected.sync="selected">
    <b-nav-item name="home">处理中心</b-nav-item>
    <b-nav-item name="you">优势</b-nav-item>
    <b-sub-nav name="about">
      <template slot="title">关于</template>
      <b-nav-item name="culture">企业文化</b-nav-item>
      <b-nav-item name="devTeam">开发团队</b-nav-item>
      <b-sub-nav name="concat">
        <template slot="title">联系方式</template>
        <b-nav-item name="email">邮箱</b-nav-item>
        <b-nav-item name="wechat">微信</b-nav-item>
        <b-sub-nav name="phone">
          <template slot="title">手机</template>
          <b-nav-item name="cd">电信</b-nav-item>
          <b-nav-item name="cm">移动</b-nav-item>
          <b-nav-item name="cn">联通</b-nav-item>
        </b-sub-nav>
      </b-sub-nav>
    </b-sub-nav>
  </b-nav>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <b-nav :selected.sync="selected" vertical style="width: 200px;margin: 50px;">
      <b-nav-item name="home">处理中心</b-nav-item>
      <b-sub-nav name="about">
        <template slot="title">关于</template>
        <b-nav-item name="culture">企业文化</b-nav-item>
        <b-nav-item name="devTeam">开发团队</b-nav-item>
        <b-sub-nav name="concat">
          <template slot="title">联系方式</template>
          <b-nav-item name="email">邮箱</b-nav-item>
          <b-nav-item name="wechat">微信</b-nav-item>
          <b-sub-nav name="phone">
            <template slot="title">手机</template>
            <b-nav-item name="cd">电信</b-nav-item>
            <b-nav-item name="cm">移动</b-nav-item>
            <b-nav-item name="cn">联通</b-nav-item>
          </b-sub-nav>
        </b-sub-nav>
      </b-sub-nav>
      <b-nav-item name="you">优势</b-nav-item>
    </b-nav>
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
        selected: ['culture']
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
