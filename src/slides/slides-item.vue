/**
* @create-date :2018-Dec-Thursday-11:47 PM
* @author : fangXinRui
*/
<template>
  <transition name="slide">
    <div class="ash-slides-item" v-if="visible" :class="{reverse}">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'ash-slides-item',
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        selected: null,
        reverse:false
      }
    },
    computed: {
      visible() {
        return this.name === this.selected
      }
    },
    methods: {},
    created() {
    },
    mounted() {
    }
  }
</script>

<style scoped lang='scss' type="text/scss">
  .slide-leave-active {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 0.5s;
  }

  .slide-enter {
    transform: translateX(100%);
  }
  .slide-enter.reverse {
    transform: translateX(-100%);
  }

  .slide-leave-to {
    transform: translateX(-100%);
  }
  .slide-leave-to.reverse {
    transform: translateX(100%);
  }

</style>
