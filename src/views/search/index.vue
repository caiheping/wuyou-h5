<template>
  <div class="searchView">
    <BaseLayout paddingTop="54">
      <div class="search" slot="navBar">
        <span @click="back">返回</span>
        <van-search
          v-model="searchVal"
          placeholder="请输入搜索关键词"
          shape="round"
        >
        </van-search>
        <span @click="handleSearch">搜索</span>
      </div>
      <div class="content" slot="content">
        <div class="history">
          <div class="top">
            <h3>历史记录</h3>
            <span>删除</span>
          </div>
          <ul>
            <li>java</li>
            <li>c</li>
            <li>监考老师</li>
            <li>监考老师</li>
            <li>监考老师</li>
            <li>监考老师</li>
            <li>监考老师</li>
            <li>监考老师</li>
            <li>监考老师</li>
            <li>web</li>
          </ul>
        </div>
        <div class="love">
          <div class="top">
            <h3>猜你喜欢</h3>
          </div>
          <ul>
            <li>java</li>
            <li>c</li>
            <li>监考老师</li>
            <li>监考老师</li>
            <li>监考老师</li>
            <li>监考老师</li>
            <li>监考老师</li>
            <li>监考老师</li>
            <li>监考老师</li>
            <li>web</li>
          </ul>
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
      searchVal: ''
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    handleSearch () {
      this.$router.push('/jobLists')
    }
  }
}
</script>

<style scoped lang="scss">
.searchView{
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
    .history{
      margin-top: 10px;
      background: #ffffff;
      padding: 10px;
      .top{
        position: relative;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        .h3{
          color: $title-color;
        }
      }
      ul{
        display: flex;
        flex-wrap: wrap;
        li{
          height: 20px;
          line-height: 20px;
          font-size: $sub-title-font-size;
          display: block;
          color: $text-color;
          margin: 5px 10px;
          padding: 0 10px;
          border: 1px solid $border-color;
          border-radius: 10px;
        }
      }
    }
    .love{
      margin-top: 10px;
      background: #ffffff;
      padding: 10px;
      .top{
        position: relative;
        margin-bottom: 10px;
        .h3{
          color: $title-color;
        }
      }
      ul{
        display: flex;
        flex-wrap: wrap;
        li{
          height: 20px;
          line-height: 20px;
          font-size: $sub-title-font-size;
          display: block;
          color: $text-color;
          margin: 5px 10px;
          padding: 0 10px;
          border: 1px solid $border-color;
          border-radius: 10px;
        }
      }
    }
  }
}
</style>
