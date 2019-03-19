# Nav(导航)


###  基础用法
 <br/>
 
<ClientOnly>
  <nav-demos-1></nav-demos-1>
</ClientOnly>

 <br/>

```html
<ash-nav :selected.sync="selected">
  <ash-nav-item name="home">处理中心</ash-nav-item>
  <ash-nav-item name="you">优势</ash-nav-item>
  <ash-sub-nav name="about">
    <template slot="title">关于</template>
    <ash-nav-item name="culture">企业文化</ash-nav-item>
    <ash-nav-item name="devTeam">开发团队</ash-nav-item>
    <ash-sub-nav name="concat">
      <template slot="title">联系方式</template>
      <ash-nav-item name="email">邮箱</ash-nav-item>
      <ash-nav-item name="wechat">微信</ash-nav-item>
      <ash-sub-nav name="phone">
        <template slot="title">手机</template>
        <ash-nav-item name="cd">电信</ash-nav-item>
        <ash-nav-item name="cm">移动</ash-nav-item>
        <ash-nav-item name="cn">联通</ash-nav-item>
      </ash-sub-nav>
    </ash-sub-nav>
  </ash-sub-nav>
</ash-nav>
```

```js
return {
  selected: 'you'
  }
```
</br>

###  竖向展示
 <br/>

<ClientOnly>
  <nav-demos-2></nav-demos-2>
</ClientOnly>

```html
<ash-nav :selected.sync="selected" vertical style="width: 200px;margin: 50px;">
  <ash-nav-item name="home">处理中心</ash-nav-item>
  <ash-sub-nav name="about">
    <template slot="title">关于</template>
    <ash-nav-item name="culture">企业文化</ash-nav-item>
    <ash-nav-item name="devTeam">开发团队</ash-nav-item>
    <ash-sub-nav name="concat">
      <template slot="title">联系方式</template>
      <ash-nav-item name="email">邮箱</ash-nav-item>
      <ash-nav-item name="wechat">微信</ash-nav-item>
      <ash-sub-nav name="phone">
        <template slot="title">手机</template>
        <ash-nav-item name="cd">电信</ash-nav-item>
        <ash-nav-item name="cm">移动</ash-nav-item>
        <ash-nav-item name="cn">联通</ash-nav-item>
      </ash-sub-nav>
    </ash-sub-nav>
  </ash-sub-nav>
  <ash-nav-item name="you">优势</ash-nav-item>
</ash-nav>
```

```js
data() {
  return {
  selected: 'you'
  }
},
```

### Nav Attributes
<br/>
<ClientOnly>
  <nav-demos-description></nav-demos-description>
</ClientOnly>

<br/>

### Nav Item Attributes
<br/>
<ClientOnly>
  <nav-item-demos-description></nav-item-demos-description>
</ClientOnly>

<br/>

### Sub Nav  Attributes
<br/>
<ClientOnly>
  <nav-item-demos-description></nav-item-demos-description>
</ClientOnly>
