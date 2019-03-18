# Grid(网格)

###  基础布局
 <br/>
 
<ClientOnly>
  <grid-demos-1></grid-demos-1>
</ClientOnly>

```html
<ash-row class="demoRow">
  <ash-col span="8">
    <div class="demoCol">8</div>
  </ash-col>
  <ash-col span="8">
    <div class="demoCol">8</div>
  </ash-col>
  <ash-col span="8">
    <div class="demoCol">8</div>
  </ash-col>
</ash-row>

<ash-row class="demoRow">
  <ash-col span="6">
    <div class="demoCol">6</div>
  </ash-col>
  <ash-col span="6">
    <div class="demoCol">6</div>
  </ash-col>
  <ash-col span="6">
    <div class="demoCol">6</div>
  </ash-col>
  <ash-col span="6">
    <div class="demoCol">6</div>
  </ash-col>
</ash-row>

<ash-row class="demoRow">
  <ash-col span="4">
    <div class="demoCol">4</div>
  </ash-col>
  <ash-col span="4">
    <div class="demoCol">4</div>
  </ash-col>
  <ash-col span="4">
    <div class="demoCol">4</div>
  </ash-col>
  <ash-col span="4">
    <div class="demoCol">4</div>
  </ash-col>
  <ash-col span="4">
    <div class="demoCol">4</div>
  </ash-col>
  <ash-col span="4">
    <div class="demoCol">4</div>
  </ash-col>
</ash-row>

<ash-row class="demoRow">
  <ash-col span="2">
    <div class="demoCol">2</div>
  </ash-col>
  <ash-col span="2">
    <div class="demoCol">2</div>
  </ash-col>
  <ash-col span="2">
    <div class="demoCol">2</div>
  </ash-col>
  <ash-col span="2">
    <div class="demoCol">2</div>
  </ash-col>
  <ash-col span="2">
    <div class="demoCol">2</div>
  </ash-col>
  <ash-col span="2">
    <div class="demoCol">2</div>
  </ash-col>
  <ash-col span="2">
    <div class="demoCol">2</div>
  </ash-col>
  <ash-col span="2">
    <div class="demoCol">2</div>
  </ash-col>
  <ash-col span="2">
    <div class="demoCol">2</div>
  </ash-col>
  <ash-col span="2">
    <div class="demoCol">2</div>
  </ash-col>
  <ash-col span="2">
    <div class="demoCol">2</div>
  </ash-col>
  <ash-col span="2">
    <div class="demoCol">2</div>
  </ash-col>
</ash-row>

```
### 分栏间隔
<br/>

<ClientOnly>
  <grid-demos-2></grid-demos-2>
</ClientOnly>

```html
  <ash-row class="demoRow" gutter="10">
    <ash-col span="8">
      <div class="demoCol">8</div>
    </ash-col>
    <ash-col span="8">
      <div class="demoCol">8</div>
    </ash-col>
    <ash-col span="8">
      <div class="demoCol">8</div>
    </ash-col>
  </ash-row>

  <ash-row class="demoRow" gutter="10">
    <ash-col span="6">
      <div class="demoCol">6</div>
    </ash-col>
    <ash-col span="6">
      <div class="demoCol">6</div>
    </ash-col>
    <ash-col span="6">
      <div class="demoCol">6</div>
    </ash-col>
    <ash-col span="6">
      <div class="demoCol">6</div>
    </ash-col>
  </ash-row>
```

### 设置空隙
<br/>
<ClientOnly>
  <grid-demos-3></grid-demos-3>
</ClientOnly>

```html
  <ash-row class="demoRow" gutter="10">
      <ash-col span="8">
        <div class="demoCol">8</div>
      </ash-col>
      <ash-col span="8" offset="8">
        <div class="demoCol">8</div>
      </ash-col>
    </ash-row>
    <ash-row class="demoRow" gutter="10">
      <ash-col span="6" offset="6">
        <div class="demoCol">6</div>
      </ash-col>
      <ash-col span="6" offset="6">
        <div class="demoCol">6</div>
      </ash-col>
    </ash-row>
    <ash-row class="demoRow" gutter="10">
      <ash-col span="4">
        <div class="demoCol">4</div>
      </ash-col>
      <ash-col span="4" offset="4">
        <div class="demoCol">4</div>
      </ash-col>
      <ash-col span="4" offset="8">
        <div class="demoCol">4</div>
      </ash-col>
    </ash-row>
    <ash-row class="demoRow" gutter="10">
      <ash-col span="2">
        <div class="demoCol">2</div>
      </ash-col>
      <ash-col span="2" offset="2">
        <div class="demoCol">2</div>
      </ash-col>
      <ash-col span="2">
        <div class="demoCol">2</div>
      </ash-col>
      <ash-col span="2" offset="2">
        <div class="demoCol">2</div>
      </ash-col>
      <ash-col span="2">
        <div class="demoCol">2</div>
      </ash-col>
      <ash-col span="2" offset="2">
        <div class="demoCol">2</div>
      </ash-col>
      <ash-col span="2">
        <div class="demoCol">2</div>
      </ash-col>
      <ash-col span="2" offset="2">
        <div class="demoCol">2</div>
      </ash-col>
    </ash-row>
```

### 响应式布局
<br/>
<ClientOnly>
  <grid-demos-4></grid-demos-4>
</ClientOnly>

```html
<ash-row class="demoRow">
  <ash-col class="demoCol" :span="24" :notebook="{span:4}" :ipad="{span:6}" :pc="{span:8}"></ash-col>
  <ash-col class="demoCol" :span="24" :notebook="{span:8}" :ipad="{span:6}" :pc="{span:4}"></ash-col>
  <ash-col class="demoCol" :span="24" :notebook="{span:8}" :ipad="{span:6}" :pc="{span:4}"></ash-col>
  <ash-col class="demoCol" :span="24" :notebook="{span:4}" :ipad="{span:6}" :pc="{span:8}"></ash-col>
</ash-row>
```
### Row Attributes
<br/>
<ClientOnly>
  <grid-row-demos-description></grid-row-demos-description>
</ClientOnly>

### Col Attributes
<br/>
<ClientOnly>
  <grid-col-demos-description></grid-col-demos-description>
</ClientOnly>
