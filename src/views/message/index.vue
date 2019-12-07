<template>
  <div class="message">
    <BaseLayout>
      <div slot="navBar">
        <van-nav-bar
          title="消息"
          right-text="清空记录"
          @click-right="onClickRight"
        />
      </div>
      <div slot="content" class="content">
        <ul class="list">
          <li v-for="item in 10" :key="item">
            <van-swipe-cell>
              <div slot="default" class="msg">
                <p>阿里巴巴</p>
                <p>上市公司｜50-100人｜电子商务</p>
                <p>Hr处理时间：2019-11-25 10:00</p>
                <span class="my-resume">我的投递</span>
              </div>
              <template slot="right">
                <van-button square type="danger" style="height: 100%;" text="删除" />
                <van-button square type="primary" style="height: 100%;" text="收藏"/>
              </template>
            </van-swipe-cell>
          </li>
        </ul>
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
  .message {
    .content{
      padding: 15px;
      .list{
        li{
          position: relative;
          background: #ffffff;
          margin-bottom: 15px;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 0 5px $box-shadow-color;
          .msg{
            padding: 10px 15px;
            color: $text-color;
          }
          &:last-child{
            margin-bottom: 0;
          }
          .my-resume{
            position: absolute;
            right: 10px;
            top: 10px;
            color: #ffffff;
            background: red;
            display: block;
            padding: 0 3px;
            font-size: 12px;
          }
        }
      }
    }
  }
</style>
