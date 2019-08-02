<template>
  <div>
    <!-- 顶部banner -->
    <bannerStaticState>
      <img src="../../../static/images/whyIDskin.jpg" alt="为什么选择IDskin" />
    </bannerStaticState>
    <div class="container characteristic">
      <!-- 操作系统 -->
      <el-row>
        <el-col>
          <div class="system_one">
            <span>IDskin的操作系统</span>
            <p class="font50">更简单 更先进 采用新一代手机控制系统</p>
            <p class="font40">不需链接电脑，不需要平板电脑，也不需要触摸屏</p>
            <img src="./images/features_1.jpg" alt="只需要下载IDskin_app即可操作" />
          </div>
        </el-col>
      </el-row>

      <!-- 操作界面机器简单 -->
      <div class="system_easy clearfix">
        <el-row>
          <el-col :xs="24">
            <p class="easy">操作界面极其简单</p>
            <ul class="clearfix">
              <li v-for="(item, index) in fourSizeEasy" :key="index">
                <span>{{item.title}}</span>
              </li>
            </ul>
            <p class="easy_two">
              一切都是“极简”设计，用手指点3下，就开始切膜！
              让切膜简单到酷！
            </p>
            <img src="./images/easy_1.png" alt="App操作界面" />
          </el-col>
        </el-row>
      </div>

      <!-- 增值服务十七年 -->
      <div class="seventeen clearfix">
        <el-row class="container">
          <el-col>
            <div class="seventeen_auto clearfix">
              <img src="./images/idSkin.png" alt class="seventeen_auto_img" />
              <p class="seventeen_auto_p">是大秦子品牌 专注手机增值服务17年</p>
              <span>
                5000多款手机数据绘制经验
                <br />长期合作优秀伙伴！
              </span>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 服务更到位 -->
      <div class="service ">
        <div class="service_auto container">
          <h1>IDskin服务更到位</h1>
          <p>
            除常用工具外，还配置专用垫板，
            <br />适合各种软材料，直接放入垫板切割。比如量身定做的材料。
            <br />大秦材料更有优势，质量更好，价格更好！
            <br />于长期合作。
          </p>
          <img src="./images/features_2.jpg" alt="质量更好" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bannerStaticState from "../../pages/banner/bannerStaticState.vue";
export default {
  name: "features",

  data() {
    return {
      // 操作界面简单
      fourSizeEasy: [
        { title: "好省钱" },
        { title: "好简单" },
        { title: "好快捷" },
        { title: "好先进" }
      ]
    };
  },
  components: { bannerStaticState }
};
</script>
<style lang="scss">
.characteristic {
  text-align: center;
  background: #f2f2f2;

  .system_one {
    span {
      background: #0083d6;
      color: #fff;
      font-size: 0.4rem;
      border-radius: 0.25rem;
      padding: 0.1rem;
      box-sizing: border-box;
    }
    img {
      margin: 0.7rem 0;
      width: 85%;
    }
    .font40 {
      font-size: 0.4rem;
    }
    .font50 {
      font-size: 0.5rem;
      font-weight: bold;
      margin: 0.35rem 0 0.2rem 0;
    }
  }
  .system_easy {
    .easy {
      font-size: 0.5rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    img{
      width: 95%
    }
    li {
      width: 25%;
      float: left;
      span {
        background: #0083d6;
        box-sizing: border-box;
        border-radius: 50%;
        padding: 0.74rem 0.42rem;
        box-sizing: border-box;
        display: inline-block;
        font-size: 0.4rem;
        color: #fff;
      }
    }
    .easy_two {
      font-size: 0.4rem;
      margin: 0.4rem 0;
    }
  }
  .seventeen {
    margin-top: 1rem;
    img {
      width: 2.34rem;
    }
    .seventeen_auto {
      background: url("./images/zengzhi.png");
      position: relative;
      .seventeen_auto_img {
        position: absolute;
        left: 50%;
        top: -1rem;
        margin-left: -1rem;
      }
      .seventeen_auto_p {
        background: linear-gradient(to right, #fed701, #fe121a);
        -webkit-background-clip: text;
        color: transparent;
        margin-top: 1.54rem;
        font-size: .5rem;
        font-weight: bold;
      }
      span {
        color: #fff;
        font-size: .4rem;
        margin: .2rem 0 .5rem 0;
        display: inline-block;
      }
    }
  }
  .service {
    margin-top: .8rem;
    .service_auto {
      img{
        width:100%;
      }
      h1 {
        font-size: .5rem;
        margin-bottom: .2rem;
      }
      p {
        font-size: .4rem;
        margin-bottom: .6rem;
      }
    }
  }
}
</style>