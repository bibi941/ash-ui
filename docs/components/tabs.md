# tabs(标签页)

###  基础用法
 <br/>
 
<ClientOnly>
  <tabs-demos-1></tabs-demos-1>
</ClientOnly>

 <br/>
 
```html
<ash-tabs :selected="selected">
    <ash-tabs-head>
        <ash-tabs-item name="1">新闻</ash-tabs-item>
        <ash-tabs-item name="2">科技</ash-tabs-item>
        <ash-tabs-item name="3" disabled>社会</ash-tabs-item>
    </ash-tabs-head>
    <ash-tabs-body>
        <ash-tabs-pane name="1">我是新闻</ash-tabs-pane>
        <ash-tabs-pane name="2">我是科技</ash-tabs-pane>
        <ash-tabs-pane name="3">我是社会</ash-tabs-pane>
    </ash-tabs-body>
</ash-tabs>
```
</br>

```js
data(){
      return {
        selected:'1'
      }
    }
```

### Tabs Attributes
<br/>
<ClientOnly>
  <tabs-demos-description></tabs-demos-description>
</ClientOnly>

<br/>

### Tabs-Item Attributes
<br/>
<ClientOnly>
  <tabs-item-demos-description></tabs-item-demos-description>
</ClientOnly>

<br/>

### Tabs-Pane Attributes
<br/>
<ClientOnly>
  <tabs-pane-demos-description></tabs-pane-demos-description>
</ClientOnly>
