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
          <van-swipe-item v-for="(item, index) in banners" :key="index">
            <img v-lazy="item.image" style="width: 100%;height: 200px;" />
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
      <van-area :area-list="areasList" :columns-num="2" value="110101" @confirm="selectArea" @cancel="show = false" />
    </van-popup>
  </div>
</template>

<script>
import BaseLayout from '../../components/BaseLayout'
import keepPosition from '../../mixins/keepPosition'
// import area from '../../utils/area'
import { banners, areas } from '../../api/home/index'
export default {
  mixins: [keepPosition],
  components: {
    BaseLayout
  },
  data () {
    return {
      show: false,
      areasList: {},
      search: '',
      banners: [
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
    },
    selectArea () {
      this.show = false
    },
    returnArea2 (arr) {
      let areasObj = {}
      console.log(arr)
      arr.forEach(item => {
        item['children'] = []
        areasObj[item.id] = item
      })
      let areas = []
      arr.forEach(list => {
        if (list.parent !== null) {
          areasObj[list.parent]['children'].push(list)
        } else {
          areas.push(list)
        }
      })
      return {
        areas,
        areasObj
      }
    },
    returnArea3 (arr) {
      console.log(arr)
      let datas = this.returnArea2(arr)
      let provinceList = {}
      let cityList = {}
      // let countyList = {}
      datas.areas.forEach(item1 => {
        provinceList[item1.id] = item1.aTitle
        if (item1.children && item1.children.length) {
          item1.children.forEach(item2 => {
            cityList[item2.id] = item2.aTitle
            // if (item2.children && item2.children.length) {
            //   item2.children.forEach(item3 => {
            //     countyList[item3.id] = item3.aTitle
            //   })
            // }
          })
        }
      })
      return {
        province_list: provinceList,
        city_list: cityList
        // county_list: countyList
      }
    },
    getAreas () {
      return areas().then(res => {
        this.areasList = this.returnArea3(res)
        console.log(this.areasList)
      })
    },
    getBanners () {
      return banners().then(res => {
        this.banners = res.results
      })
    },
    async init () {
      await this.getAreas()
      await this.getBanners()
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.init()
    })
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
        width: 44px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
