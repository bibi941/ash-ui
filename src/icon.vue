<template>
  <svg class="ash-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>
<script>
  import './svg';

  export default {
    name:'ash-icon',
    props: ['name']
  };
</script>
<style lang="scss" scoped>
  .ash-icon {
    width: 1em;
    height: 1em;
  }
</style>
