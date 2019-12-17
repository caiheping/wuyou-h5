<template>
  <div class="user">
    <BaseLayout>
      <div slot="navBar">
        <van-nav-bar
          title="用户管理"
          right-text="按钮"
          @click-right="onClickRight"
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
              <span>疯狂的乌牛</span>
              <span>我的在线简历</span>
            </div>
          </div>
          <ul class="other">
            <li>浏览记录</li>
            <li>浏览记录</li>
            <li>浏览记录</li>
            <li>浏览记录</li>
          </ul>
        </div>
        <div class="list">
          <van-cell title="职位收藏" is-link to="index" icon="location-o" />
          <van-cell title="申请记录" is-link to="index" icon="location-o" />
          <van-cell title="不让该公司看我简历" is-link to="index" icon="location-o" />
          <van-cell title="设置" is-link to="index" icon="location-o" />
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
          }
        }
        .other{
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
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
