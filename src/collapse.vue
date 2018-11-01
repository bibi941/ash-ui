<template>
<div class="collapse">
<slot></slot>
</div>
</template>

<script>
  export default {
    name: 'ash-collapse'
  }
</script>

<style scoped lang='scss' type="text/scss">
.collapse{
  border: 1px solid #999999;
  border-radius: 4px;
}
</style>
