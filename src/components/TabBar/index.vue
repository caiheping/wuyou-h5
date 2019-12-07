<template>
  <van-tabbar v-model="active">
    <van-tabbar-item name="home" icon="home-o" to="/home" replace>首页</van-tabbar-item>
    <van-tabbar-item name="message" icon="search" to="/message" replace>信息</van-tabbar-item>
    <van-tabbar-item name="resume" icon="friends-o" to="/resume" replace>test</van-tabbar-item>
    <van-tabbar-item name="user" icon="setting-o" to="/user" replace>我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data () {
    return {
      active: ''
    }
  },
  created () {
    this.active = this.$route.name
  }
}
</script>

<style scoped lang="scss">
  .van-tabbar{
    z-index: 9999 !important;
  }
</style>
