# Input(输入框)
::: warning 警告
使用Input应当处理 input 事件，并更新组件的绑定值（或使用v-model）。否则，输入框内显示的值将不会改变。
不支持 v-model 修饰符。
:::

###  基础用法
 <br/>
 
<ClientOnly>
  <input-demos-1></input-demos-1>
</ClientOnly>

```html
<ash-input value="请输入内容" ></ash-input>
<ash-input value="请输入内容" disabled></ash-input>
<ash-input value="请输入内容" readonly></ash-input>
```
</br>

###  进阶用法
 <br/>
 
<ClientOnly>
  <input-demos-2></input-demos-2>
</ClientOnly>

``` html
<ash-input v-model="value1" clearable></ash-input>
<ash-input value="错误的内容" error="你输入的不对"></ash-input>
<ash-input v-model="value" ></ash-input>
<div style="line-height: 35px">{{value}}</div>

```
```js
   data(){
      return{
        value1:'请输入内容',
        value:'我是双向绑定'
      }
    }
```


### Attributes
<br/>
<ClientOnly>
  <input-demos-description></input-demos-description>
</ClientOnly>
