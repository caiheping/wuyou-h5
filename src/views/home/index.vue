<template>
  <div class="home">
    <div class="search">
      <span>广州</span>
      <van-search
        @click.native="handleSearchClick"
        :readonly="true"
        v-model="value"
        placeholder="请输入搜索关键词"
        shape="round"
      >
      </van-search>
    </div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" style="width: 100%;height: 200px;" />
      </van-swipe-item>
    </van-swipe>
    <ul class="nav-list">
      <li v-for="item in 4" :key="item">
        <van-icon name="close" />
        <span>收益</span>
      </li>
    </ul>
    <div class="recommend">
      <div class="top">
        <div class="line"></div>
        <span>推荐</span>
        <div class="line"></div>
      </div>
      <ul class="position">
        <li v-for="item in 10" :key="item">
          <div class="left">
            <p>Web前端</p>
            <p>阿里巴巴</p>
          </div>
          <div class="right">
            <p>8k-10k</p>
            <p>广州-天河区</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  },
  methods: {
    handleSearchClick () {
      console.log('search')
    }
  },
  activated () {
    document.body.scrollTop = this.$route.meta.saveTop
  }
}
</script>

<style scoped lang="scss">
  .home{
    padding-top: 54px;
    .search{
      position: fixed;
      top: 0;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      z-index: 999;
      align-items: center;
      background: #ffffff;
      padding: 0 10px;
      span{
        font-size: 14px;
      }
      .van-search{
        flex: 1;
      }
    }
    .nav-list{
      background: #ffffff;
      display: flex;
      padding: 15px 0;
      justify-content: space-around;
      align-items: center;
      li{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span{
          font-size: 14px;
        }
      }
    }
    .recommend{
      margin-top: 10px;
      padding: 10px 0 0;
      background: #ffffff;
      .top{
        display: flex;
        justify-content: center;
        align-items: center;
        color: dodgerblue;
        span{
          font-size: 18px;
          display: block;
          padding: 5px 10px;
        }
        .line{
          background: dodgerblue;
          height: 1px;
          width: 50px;
        }
      }
      .position{
        display: flex;
        flex-direction: column;
        padding: 0 15px;
        li{
          border-bottom: 1px solid #bebebe;
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          .left{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .right{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
        }
      }
    }
  }
</style>
