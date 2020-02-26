<template>
  <div class="user">
    <BaseLayout>
      <div slot="navBar">
        <van-nav-bar
          title="用户管理"
        />
      </div>
      <div slot="content" class="content">
        <div class="base">
          <div class="baseInfo">
            <div class="left">
              <van-image
                round
                width="50px"
                height="50px"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </div>
            <div class="right">
              <span class="username">疯狂的乌牛</span>
              <router-link to="/resume">我的在线简历</router-link>
            </div>
          </div>
          <ul class="other">
            <!--<li>沟通过</li>-->
            <li>邀请面试</li>
            <li>申请记录</li>
            <li>收藏记录</li>
          </ul>
        </div>
        <div class="list">
          <van-cell title="邀请记录" is-link to="invite" icon="location-o" />
          <van-cell title="申请记录" is-link to="application" icon="location-o" />
          <van-cell title="我的收藏" is-link to="jobCollections" icon="location-o" />
          <van-cell title="不让该公司看我简历" is-link to="shield" icon="location-o" />
          <van-cell title="设置" is-link to="setting" icon="location-o" />
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
  methods: {
    onClickRight () {
      this.$toast('按钮')
    }
  }
}
</script>

<style scoped lang="scss">
  .user {
    .content{
      padding: 15px;
      .base{
        padding: 10px;
        background: #ffffff;
        border-radius: 4px;
        box-shadow: 0 0 5px $box-shadow-color;
        .baseInfo{
          display: flex;
          font-size: $text-font-size;
          .left{
            margin-right: 15px;
          }
          .right{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .username{
              font-size: 18px;
              font-weight: bold;
              color: $title-color;
            }
          }
        }
        .other{
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
          color: $text-color;
        }
      }
      .list{
        margin-top: 15px;
        border-radius: 4px;
        overflow: hidden;
        box-shadow: 0 0 5px $box-shadow-color;
      }
    }
  }
</style>
