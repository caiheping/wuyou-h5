<template>
  <div class="box">
    <div class="navBar" ref="nav">
      <slot name="navBar"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

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
