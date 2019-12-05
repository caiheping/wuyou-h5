<template>
  <div id="app" :class="{
    isTabBar: $route.meta.hasTabBar
  }">
    <transition name="router-fade" mode="out-in">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <tab-bar v-if="$route.meta.hasTabBar"></tab-bar>
  </div>
</template>

<script>
import TabBar from './components/tabbar'
export default {
  components: {
    TabBar
  }
}
</script>

<style lang="scss">
  @import 'static/style/common';
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .2s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
  .isTabBar{
    padding-bottom: 50px;
  }
</style>
