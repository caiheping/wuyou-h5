<template>
  <ul class="timeline">
    <li v-for="(item, index) in lists" :key="index">
      <slot v-bind:scope="item"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    lists: {
      type: Array,
      require: true
    }
  }
}
</script>

<style scoped lang="scss">
  .timeline{
    position: relative;
    &:after{
      content: '';
      position: absolute;
      left: 3px;
      top: 8px;
      height: 100%;
      width: 1px;
      background: #dddddd;
      border-radius: 50%;
    }
    li{
      margin-bottom: 15px;
      :not(html){
        text-indent: 20px;
        display: block;
        &:nth-child(1){
          position: relative;
          &:before{
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            margin-top: -4px;
            height: 7px;
            width: 7px;
            background: #1989fa;
            border-radius: 50%;
            z-index: 999;
          }
          &:after{
            content: '';
            position: absolute;
            left: -2px;
            top: 50%;
            margin-top: -6px;
            height: 11px;
            width: 11px;
            border: 1px solid #1989fa;
            box-sizing: border-box;
            border-radius: 50%;
            z-index: 998;
          }
        }
      }
    }
  }
</style>
