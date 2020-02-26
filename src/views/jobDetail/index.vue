<template>
  <div class="job-detail">
    <BaseLayout>
      <div class="nav" slot="navBar">
        <van-nav-bar
          title=""
          right-text="收藏"
          left-arrow
          @click-right="onClickRight"
          @click-left="onClickLeft"
        />
      </div>
      <div class="content" slot="content">
        <div class="job-base">
          <div class="top">
            <h4>web前端</h4>
            <span class="time">今天</span>
          </div>
          <p class="salary">10k-12k/月</p>
          <div class="bottom">
            <span>招2人</span>
            <span>大专</span>
            <span>2年</span>
          </div>
          <van-divider />
          <div class="addr">
            <p>广州 广州高新技术产业开发区科学城科汇二街13号801房</p>
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="company-info">
          <h4>公司信息</h4>
          <div class="top" @click="toCompanyDetail">
            <div>
              <p>阿里巴巴集团</p>
              <p>民营|150-200人|计算机</p>
            </div>
            <van-icon name="arrow" />
          </div>
          <div class="bottom">
            <span>五险一金</span>
            <span>免费班车</span>
            <span>节日福利</span>
          </div>
        </div>
        <div class="job-describe">
          <h4>职位描述</h4>
          <div class="describe">
            <h5>工作职责：</h5>
            <p v-for="(item, index) in duty" :key="index">{{index+1}}、{{item}}</p>
            <h5>任职要求：</h5>
            <p v-for="(item, index) in requirement" :key="item">{{index+1}}、{{item}}</p>
          </div>
        </div>
        <div class="apply">
          <van-button square type="danger" style="height: 100%;width: 100%;" text="立即申请" />
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
      duty: [
        '负责前端产品的架构设计与实现',
        '负责前端各类交互设计的实现、持续优化前端使用体验与响应速度',
        '负责同产品经理与架构师沟通，能够较好的理解功能需求与性能需求',
        '参与公司需求讨论、产品设计、功能定义等',
        '参与团队技术整体能力建设、并对新技术进行学习、研究和应用'
      ],
      requirement: [
        '2年以上开发经验',
        '熟练使用前后端分离开发模式，有独立前端产品架构设计经验；',
        '熟练HTML5/CSS3/JS/Node，对一个或多个领域有比较深入的研究；',
        '熟练浏览器的兼容调试技巧，能够解决产品的兼容问题；',
        '熟练任一现代MVVM思想的前端开发框架:Vue或React；',
        '熟悉后端框架Express、Koa2、Thinkjs、Eggjs其中一种即可；',
        '熟悉使用ES6.0/ES7.0/TS语法；',
        '熟悉使用git进行代码协同管理，具备良好的文档编写能力；',
        '附加有开源项目、技术博客或技术总结的优先考虑；'
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
    toCompanyDetail () {
      this.$router.push({
        path: '/companyDetail',
        query: {
          cId: 12
        }
      })
    }
  },
  mounted () {
    console.log(this.$route.query)
  }
}
</script>

<style scoped lang="scss">
  .job-detail{
    background: #ffffff;
    min-height: 100vh;
    .content{
      padding: 10px 15px 60px;
      .job-base{
        box-shadow: 0 0 5px $box-shadow-color;
        border-radius: 4px;
        padding: 10px;
        background: #ffffff;
        .top{
          display: flex;
          justify-content: space-between;
          align-items: center;
          h4{
            font-size: $title-font-size;
            font-weight: bold;
            line-height: 30px;
          }
          span{
            color: $span-color;
          }
        }
        .salary{
          color: #ff9b00;
          font-weight: bold;
          line-height: 30px;
        }
        .bottom{
          display: flex;
          span{
            color: $span-color;
            display: block;
            margin-right: 15px;
          }
        }
        .addr{
          display: flex;
          color: $text-color;
          justify-content: space-between;
          align-items: center;
        }
      }
      .company-info{
        margin-top: 15px;
        h4{
          font-size: $title-font-size;
          margin-bottom: 6px;
        }
        .top{
          display: flex;
          justify-content: space-between;
          align-items: center;
          div{
            color: $text-color;
            font-size: $sub-title-font-size;
            line-height: 24px;
            p:last-child{
              font-size: $text-font-size;
              color: $span-color;
            }
          }
        }
        .bottom{
          display: flex;
          flex-wrap: wrap;
          margin: 8px -8px;
          span{
            color: $text-color;
            display: block;
            padding: 0 5px;
            border-radius: 2px;
            background: #bebebe;
            margin: 0 8px;
          }
        }
      }
      .job-describe{
        margin-top: 15px;
        h4{
          font-size: $title-font-size;
          margin-bottom: 6px;
        }
        .describe{
          h5{
            line-height: 30px;
            font-size: $text-font-size;
          }
          p{
            color: $span-color;
          }
        }
      }
      .apply{
        background: #ffffff;
        position: fixed;
        display: flex;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        box-sizing: border-box;
        border-top: 1px solid $border-color;
      }
    }
  }
</style>
