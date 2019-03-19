# sticky(粘滞器)
::: warning 警告
使用Input应当处理 input 事件，并更新组件的绑定值（或使用v-model）。否则，输入框内显示的值将不会改变。
不支持 v-model 修饰符。
:::

###  基础用法
 <br/>
 
<ClientOnly>
  <sticky-demos-1></sticky-demos-1>
</ClientOnly>

```html
 <ash-sticky :distance="50">
  <div style="background: lightskyblue;height: 100px;display: flex;align-items: center;font-size: 30px">我就是 sticky</div>
 </ash-sticky>
```
</br>

### Attributes
<br/>
<ClientOnly>
  <sticky-demo-description></sticky-demo-description>
</ClientOnly>
