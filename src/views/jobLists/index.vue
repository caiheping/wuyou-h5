<template>
  <div class="jobLists">
    <BaseLayout>
      <div class="search" slot="navBar">
        <span @click="back">返回</span>
        <van-search
          @click.native="handleSearchClick"
          v-model="search"
          placeholder="请输入搜索关键词"
          shape="round"
        >
        </van-search>
        <span>搜索</span>
      </div>
      <div class="content" slot="content">
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
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
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
            </van-pull-refresh>
          </van-list>
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
      isLoading: false,
      list: [],
      loading: false,
      finished: false,
      search: 'web前端',
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
    back () {
      this.$router.back()
    },
    toJobDetail () {
      this.$router.push({
        path: '/jobDetail',
        query: {
          id: 1
        }
      })
    },
    onRefresh () {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
        this.list = []
        this.onLoad()
      }, 500)
    },
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 20; i++) {
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
  }
}
</script>

<style scoped lang="scss">
  .jobLists{
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
    .content{
      .lists{
        background: #ffffff;
        overflow: scroll;
        height: calc(100vh - 96px);
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
</style>
