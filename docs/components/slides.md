# Slides(轮播)

###  基础用法
 <br/>
 
<ClientOnly>
  <slides-demo-1></slides-demo-1>
</ClientOnly>

```html
<ash-slides :selected.sync="selected">
   <ash-slides-item name="1">
     <div class="box">1</div>
   </ash-slides-item>
   <ash-slides-item name="2">
     <div class="box">2</div>
   </ash-slides-item>
   <ash-slides-item name="3">
     <div class="box">3</div>
   </ash-slides-item>
</ash-slides>
```

```js
return{
  selected: '1'
}
```

</br>

### Slides Attributes
<br/>

<ClientOnly>
  <slides-demos-description></slides-demos-description>
</ClientOnly>

### Slides Item Attributes
<br/>

<ClientOnly>
  <slides-item-demos-description></slides-item-demos-description>
</ClientOnly>
