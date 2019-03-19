# DatePiker(日期选择器)

###  基础用法
 <br/>
 
<ClientOnly>
  <datepiker-demos-1></datepiker-demos-1>
</ClientOnly>

```html
  <date-piker :value.sync="date" :scope="scope"></date-piker>
```

```js
return {
  date:new Date(),
  scope:[new Date(2001,0,1),new Date(2019,4,1)]
}
```
</br>


### Attributes
<br/>
<ClientOnly>
  <datepiker-demos-description></datepiker-demos-description>
</ClientOnly>
