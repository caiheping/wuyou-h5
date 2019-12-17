<template>
  <div class="home">
    <BaseLayout>
      <div class="search" slot="navBar">
        <span @click="show = true">广州</span>
        <van-search
          @click.native="handleSearchClick"
          :readonly="true"
          v-model="search"
          placeholder="请输入搜索关键词"
          shape="round"
        >
        </van-search>
      </div>
      <div slot="content">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" style="width: 100%;height: 200px;" />
          </van-swipe-item>
        </van-swipe>
        <ul class="nav-list">
          <li v-for="(item, index) in navLists" :key="index">
            <svg-icon :style="{
            color: item.color
            }" :icon-class="item.icon" class-name="icon"/>
            <span>{{item.name}}</span>
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
                <p>test</p>
                <p>阿里巴巴</p>
              </div>
              <div class="right">
                <p>test</p>
                <p>广州-天河区</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </BaseLayout>
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '50%' }"
    >
      <van-area :area-list="areaList" :columns-num="3" value="110101" />
    </van-popup>
  </div>
</template>

<script>
import BaseLayout from '../../components/BaseLayout'
import keepPosition from '../../mixins/keepPosition'
import area from '../../utils/area'
export default {
  mixins: [keepPosition],
  components: {
    BaseLayout
  },
  data () {
    return {
      show: false,
      areaList: area,
      search: '',
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ],
      navLists: [
        {
          color: 'rgb(129, 132, 255)',
          icon: 'nav-look',
          name: '谁看过我'
        },
        {
          color: 'rgb(255, 136, 129)',
          icon: 'nav-apply',
          name: '申请记录'
        },
        {
          color: 'rgb(255, 129, 198)',
          icon: 'nav-nearby',
          name: '附近工作'
        },
        {
          color: 'rgb(129, 255, 157)',
          icon: 'nav-school-recruit',
          name: '校园招聘'
        },
        {
          color: 'rgb(255, 211, 129)',
          icon: 'nav-strategy',
          name: '求职攻略'
        }
      ]
    }
  },
  methods: {
    handleSearchClick () {
      console.log('search')
      this.$router.push('/search')
    }
  }
}
</script>

<style scoped lang="scss">
  .home{
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
        font-size: $text-font-size;
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
        .icon{
          font-size: 40px;
        }
        span{
          display: block;
          margin-top: 5px;
          font-size: 12px;
        }
      }
    }
    .recommend{
      margin-top: 10px;
      padding: 10px 0 0;
      background: #ffffff;
      position: relative;
      .top{
        display: flex;
        justify-content: center;
        align-items: center;
        color: dodgerblue;
        span{
          font-size: $title-font-size;
          display: block;
          padding: 5px 20px;
          background: linear-gradient(to right, red, blue);
          -webkit-background-clip: text;
          color: transparent;
        }
        .line{
          background: dodgerblue;
          height: 1px;
          width: 75px;
        }
      }
      .position{
        display: flex;
        flex-direction: column;
        padding: 0 15px;
        li{
          border-bottom: 1px solid $border-color;
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          color: $text-color;
          .left{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .right{
            display: flex;
            text-align: right;
            flex-direction: column;
            justify-content: space-between;
          }
        }
      }
    }
  }
</style>
