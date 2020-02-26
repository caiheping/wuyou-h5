<template>
  <div class="resume">
    <BaseLayout>
      <div slot="navBar">
        <van-nav-bar
          title="简历"
          right-text="预览"
          @click-right="onClickRight"
        />
      </div>
      <div slot="content" class="content">
        <!--    基本信息    -->
        <div class="base">
          <van-cell title="基本信息" is-link to="/index" icon="location-o" />
          <div class="main">
            <div class="left">
              <van-image
                width="50"
                height="60"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </div>
            <div class="right">
              <p>test | 男 | 22岁</p>
              <p>广州 | 2年工作经验</p>
              <p>13433655320</p>
              <p>12346546@qq.com</p>
              <p>目前再找工作</p>
            </div>
          </div>
        </div>
        <!--    求职意向    -->
        <div class="intention">
          <van-cell title="求职意向" is-link to="/index" icon="location-o" />
          <div class="main">
            <p>职&nbsp;&nbsp;能：web开发</p>
            <p>工作地点：广州</p>
            <p>期望薪资：9200-12000</p>
            <p>个人标签：牛逼</p>
          </div>
        </div>
        <!--    工作经验    -->
        <div class="workExperience">
          <van-cell title="工作经验" is-link to="/index" icon="location-o" />
          <div class="main">
            <TimeLine :lists="workExperienceLists">
              <template v-slot:default="slotProps">
                <p>{{slotProps.scope.time}}</p>
                <p>公司：{{slotProps.scope.company}}</p>
                <p>职位：{{slotProps.scope.job}}</p>
              </template>
            </TimeLine>
          </div>
        </div>
        <!--    项目经验    -->
        <div class="projectExperience">
          <van-cell title="项目经验" is-link to="/index" icon="location-o" />
          <div class="main">
            <TimeLine :lists="projectExperienceLists">
              <template v-slot:default="slotProps">
                <p>{{slotProps.scope.time}}</p>
                <p>项目名称：{{slotProps.scope.name}}</p>
                <p v-if="slotProps.scope.company">所属公司：{{slotProps.scope.company}}</p>
              </template>
            </TimeLine>
          </div>
        </div>
        <!--    教育经历    -->
        <div class="educationExperience">
          <van-cell title="教育经历" is-link to="/index" icon="location-o" />
          <div class="main">
            <TimeLine :lists="educationExperience">
              <template v-slot:default="slotProps">
                <p>{{slotProps.scope.time}}</p>
                <p>学校：{{slotProps.scope.school}}</p>
                <p v-if="slotProps.scope.major">专业：{{slotProps.scope.major}}</p>
              </template>
            </TimeLine>
          </div>
        </div>
      </div>
    </BaseLayout>
  </div>
</template>

<script>
import keepPosition from '../../mixins/keepPosition'
import BaseLayout from '../../components/BaseLayout'
import TimeLine from '../../components/TimeLine'
export default {
  mixins: [keepPosition],
  components: {
    BaseLayout,
    TimeLine
  },
  data () {
    return {
      workExperienceLists: [
        {
          time: '2019/10/11',
          company: '阿里巴巴集团',
          job: 'web前端'
        },
        {
          time: '2015/10/11',
          company: '腾讯',
          job: 'web前端'
        }
      ],
      projectExperienceLists: [
        {
          time: '2019/10/11',
          company: '阿里巴巴',
          name: 'blog'
        },
        {
          time: '2015/10/11',
          name: '宠物网'
        }
      ],
      educationExperience: [
        {
          time: '2019/10/11',
          major: '计算机',
          school: '北大'
        },
        {
          time: '2016/10/11',
          school: '广州一中'
        }
      ]
    }
  },
  methods: {
    onClickRight () {
      console.log(9)
    }
  }
}
</script>

<style scoped lang="scss">
  .resume{
    .content{
      padding: 15px;
      .base{
        background: #ffffff;
        border-radius: 4px;
        box-shadow: 0 0 5px $box-shadow-color;
        .main{
          display: flex;
          padding: 16px;
          .left{
            margin-right: 10px;
          }
          .right{
            color: $text-color;
            p{
              margin-bottom: 5px;
            }
          }
        }
      }
      .intention{
        background: #ffffff;
        border-radius: 4px;
        box-shadow: 0 0 5px $box-shadow-color;
        margin-top: 15px;
        .main{
          padding: 16px;
          color: $text-color;
          p{
            margin-bottom: 5px;
            padding-left: 20px;
          }
        }
      }
      .workExperience, .projectExperience, .educationExperience{
        background: #ffffff;
        border-radius: 4px;
        box-shadow: 0 0 5px $box-shadow-color;
        margin-top: 15px;
        .main{
          padding: 16px;
          color: $text-color;
          p{
            line-height: 24px;
          }
        }
      }
    }
  }
</style>
