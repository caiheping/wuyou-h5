<template>
  <div class="login">
    <router-link to="/home" class="logincss">首页</router-link>
    <ul>
      <li v-for="(item, index) in 55" :key="index">{{item}}===123</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
  .logincss{
    position: fixed;
    top: 20px;
    right: 20px;
    background: red;
    color: #fff;
  }
</style>
