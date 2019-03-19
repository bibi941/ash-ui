# pager(分页器)

###  基础用法
 <br/>
 
<ClientOnly>
  <pager-demos-1></pager-demos-1>
</ClientOnly>

 <br/>
 
```html
  <ash-pager :total-page="20" :current-page.sync="currentPage"></ash-pager>
```
</br>

```js
data() {
  return {
    currentPage: 10
  }
},
```



### Attributes
<br/>
<ClientOnly>
  <input-demos-description></input-demos-description>
</ClientOnly>
