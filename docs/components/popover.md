# Popover(弹出框)

###  基础用法
 <br/>

<ClientOnly>
  <popover-demos-1></popover-demos-1>
</ClientOnly>

```html
<ash-popover>
  <ash-button>上方弹出</ash-button>
    <template slot="content">
      I am Popover!
    </template>
</ash-popover>
<ash-popover position="bottom">
  <ash-button>下方弹出</ash-button>
    <template slot="content">
        I am Popover!
    </template>
</ash-popover>
<ash-popover position="left">
  <ash-button>左边弹出</ash-button>
    <template slot="content">
      I am Popover!
    </template>
</ash-popover>
<ash-popover position="right">
  <ash-button>右边弹出</ash-button>
    <template slot="content">
      I am Popover!
    </template>
</ash-popover>
```
</br>

###  Hover 触发
 <br/>

<ClientOnly>
  <popover-demos-2></popover-demos-2>
</ClientOnly>

```html
```html
<ash-popover trigger="hover">
  <ash-button>上方弹出</ash-button>
    <template slot="content">
      I am Popover!
    </template>
</ash-popover>
<ash-popover position="bottom" trigger="hover">
  <ash-button>下方弹出</ash-button>
    <template slot="content">
        I am Popover!
    </template>
</ash-popover>
<ash-popover position="left" trigger="hover">
  <ash-button>左边弹出</ash-button>
    <template slot="content">
      I am Popover!
    </template>
</ash-popover>
<ash-popover position="right" trigger="hover">
  <ash-button>右边弹出</ash-button>
    <template slot="content">
      I am Popover!
    </template>
</ash-popover>
```
</br>

### Attributes
<br/>
<ClientOnly>
  <toast-demos-description></toast-demos-description>
</ClientOnly>
