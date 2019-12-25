<template>
  <div class="company-detail">
    <BaseLayout>
      <div class="nav" slot="navBar">
        <van-nav-bar
          title=""
          right-text="设置"
          left-arrow
          @click-right="onClickRight"
          @click-left="onClickLeft"
        />
      </div>
      <div class="content" slot="content">
        <div class="company-base">
          <div class="top">
            <h4>阿里巴巴集团</h4>
            <svg-icon icon-class="nav-look" class-name="icon"/>
          </div>
          <div class="bottom">
            <p>
              <span>民营公司</span>
              <span>1000-5000人</span>
            </p>
            <p>多元化业务集团公司 交通/运输/物流</p>
          </div>
        </div>
        <div class="other">
          <van-tabs v-model="active">
            <van-tab title="公司介绍" name="introduce">
              <div class="introduce">
                <div class="top">
                  <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt="">
                </div>
                <div class="content">
                  <p>阿里巴巴网络技术有限公司（简称：阿里巴巴集团或阿里巴巴）是以曾担任英语教师的马云为首的18人于1999年在浙江杭州创立的公司。 [1-2]</p>
                  <p>阿里巴巴集团经营多项业务，另外也从关联公司的业务和服务中取得经营商业生态系统上的支援。业务和关联公司的业务包括：淘宝网、天猫、聚划算、全球速卖通、阿里巴巴国际交易市场、1688、阿里妈妈、阿里云、蚂蚁金服、菜鸟网络等。 [3]</p>
                  <p>2014年9月19日，阿里巴巴集团在纽约证券交易所正式挂牌上市，创造了史上最大IPO记录，股票代码“BABA”，创始人为马云。2019年11月26日，阿里巴巴港股上市，总市值超4万亿，登顶港股成为港股“新股王” [4-5]  。</p>
                  <p>2019年9月6日，阿里巴巴集团宣布20亿美元全资收购网易考拉，领投网易云音乐7亿美元融资。 [6]  2019年9月1日，2019中国服务业企业500强榜单在济南发布，阿里巴巴集团控股有限公司排名第24位。 [7]  2019年10月，2019福布斯全球数字经济100强榜位列10位。 [8]  2019年10月23日， 2019《财富》未来50强榜单公布，阿里巴巴集团排名第11。 [9]  “一带一路”中国企业100强榜单排名第5位。 [10]  11月16日，胡润研究院发布《2019胡润全球独角兽活跃投资机构百强榜》，阿里巴巴排名第7位。 [11]  2019年12月，阿里巴巴集团入选2019中国品牌强国盛典榜样100品牌。</p>
                </div>
              </div>
              <div class="addr">
                <p>广州 广州高新技术产业开发区科学城科汇二街13号801房</p>
                <van-icon name="arrow" />
              </div>
            </van-tab>
            <van-tab title="所有职位" name="job">
              <van-dropdown-menu>
                <van-dropdown-item v-model="value1" :options="option1" />
                <van-dropdown-item v-model="value2" :options="option2" />
                <van-dropdown-item v-model="value3" :options="option3" />
                <van-dropdown-item v-model="value4" :options="option4" />
              </van-dropdown-menu>
              <div class="lists">
                <van-list
                  v-model="loading"
                  :finished="finished"
                  finished-text="没有更多了"
                  @load="onLoad"
                >
                  <div class="item" v-for="item in list" :key="item" @click="toJobDetail">
                    <div class="left">
                      <h3>前端开发</h3>
                      <p>阿里巴巴</p>
                      <p>民营｜本科｜两年</p>
                    </div>
                    <div class="right">
                      <p class="salary">10k-15k</p>
                      <p>广州-天河区</p>
                      <span>今天</span>
                    </div>
                  </div>
                </van-list>
              </div>
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </BaseLayout>
  </div>
</template>

<script>
import BaseLayout from '../../components/BaseLayout'
export default {
  components: {
    BaseLayout
  },
  data () {
    return {
      active: 'introduce',
      finished: false,
      loading: false,
      list: [],
      value1: 0,
      value2: 'a',
      value3: 0,
      value4: 'a',
      option1: [
        { text: '所有行业', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '广州', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' }
      ],
      option3: [
        { text: '薪资范围', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option4: [
        { text: '更多筛选', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' }
      ]
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    onClickRight () {
      console.log(99)
    },
    toJobDetail () {
      this.$router.push({
        path: '/jobDetail',
        query: {
          id: 1
        }
      })
    },
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
  .company-detail{
    .content{
      .company-base{
        padding: 15px;
        background: #ffffff;
        margin-bottom: 15px;
        .top{
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          position: relative;
          h4{
            font-size: $title-font-size;
          }
          .svg-icon{
            position: absolute;
            right: 0;
            top: 0;
            font-size: 40px;
          }
        }
        .bottom{
          p{
            display: flex;
            line-height: 20px;
            color: $text-color;
            span{
              display: block;
              margin-right: 20px;
            }
          }
        }
      }
      .other{
        background: #ffffff;
        .introduce{
          padding: 15px;
          .top{
            margin-bottom: 10px;
          }
          .content{
            font-size: $text-font-size;
            color: $text-color;
            p{
              text-indent: 2em;
              line-height: 24px;
            }
          }
        }
        .addr{
          padding: 15px;
          display: flex;
          color: #333333;
          justify-content: space-between;
          align-items: center;
          p{
            margin-right: 10px;
          }
        }
        .lists{
          background: #ffffff;
          .item{
            border-bottom: 1px solid $border-color;
            display: flex;
            justify-content: space-between;
            padding: 10px;
            color: $text-color;
            .left{
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
            .right{
              text-align: right;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              h3{
                color: $title-color;
              }
              .salary{
                font-weight: bold;
                color: #ff9b00;
              }
              span{
                color: $span-color;
              }
            }
          }
        }
      }
    }
  }
</style>
