<template>
  <div class="box" :style="{
    paddingTop: paddingTop + 'px'
  }">
    <div class="navBar" :style="{
    height: paddingTop + 'px'
  }">
      <slot name="navBar"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paddingTop: {
      type: [String, Number],
      default: 46
    }
  }
}
</script>

<style scoped lang="scss">
  .box{
    padding-top: 46px;
    .navBar{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      box-sizing: border-box;
      z-index: 9999;
    }
  }
</style>
