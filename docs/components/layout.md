# Layout(布局容器)

###  常见布局
 <br/>
 
<ClientOnly>
  <layout-demos-1></layout-demos-1>
</ClientOnly>

``` html
<ash-layout style="color: white; margin-bottom:50px;">
 <ash-header style="height: 50px; background:lightskyblue;">
    header
 </ash-header>
 <ash-content style="height: 150px; background:deepskyblue;">
    content
 </ash-content>
 <ash-footer style="height: 50px; background:lightskyblue;">
    footer
 </ash-footer>
</ash-layout>

<ash-layout style="color: white; overflow:hidden; margin-bottom:50px;">
    <ash-sider style=" background:lightblue; width:200px;">
        sider
    </ash-sider>
    <ash-layout>
        <ash-header style="height: 50px; background:lightskyblue;">
            header
        </ash-header>
        <ash-content style="height: 100px; background:deepskyblue;">
            content
        </ash-content>
        <ash-footer style="height: 50px; background:lightskyblue;">
            footer
        </ash-footer>
    </ash-layout>
</ash-layout>
```
</br>




