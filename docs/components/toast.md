# Toast(吐司)
::: warning 注意
Toast 组件是以插件的方式引入,它将在 Vue.prototype上添加全局方法$toast,请引入插件,并且在 Vue 实例化之前注入
:::

###  基础用法
 <br/>

<ClientOnly>
  <toast-demos-1></toast-demos-1>
</ClientOnly>

```html
<ash-button @click="$toast('这是我的提示')">上方弹出</ash-button>
<ash-button @click="$toast('这是我的提示', {position:'middle'})">中间弹出</ash-button>
<ash-button @click="$toast('这是我的提示', {position:'bottom'})">下方弹出</ash-button>
```
</br>


###  设置关闭
 <br/>
 
<ClientOnly>
  <toast-demos-2></toast-demos-2>
</ClientOnly>

```html
<ash-button @click="onClickButton">上方弹出</ash-button>
```

```js
 methods:{
      onClickButton () {
        this.$toast('这个可以关闭噢', {
          closeButton: {
            text: '关闭',
            callback: () => {
              console.log('you can do someThing in this')
            }
          }
        })
      }
    }
```
### 嵌入 HTML
 <br/>
 
::: warning 警告
谨慎使用此选项,预防 xss攻击
:::

<ClientOnly>
  <toast-demos-3></toast-demos-3>
</ClientOnly>


### Attributes
<br/>
<ClientOnly>
  <toast-demos-description></toast-demos-description>
</ClientOnly>
