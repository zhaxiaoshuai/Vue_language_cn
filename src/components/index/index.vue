<template>
  <el-container>
    <el-main>
      <!-- banner start -->
      <el-row>
        <el-col :span="24">
          <banner :bannerHeight="bannerHeight">
            <el-carousel-item v-for="(item,index) in bannerImage" :key="index">
              <img
                :src="item.imgUrl"
                :alt="item.alt"
                @load="imgLoad"
                ref="bannerHeight"
                style="width: 100%"
              />
            </el-carousel-item>
            <!-- <img src="./images/banner-1.jpg" alt=""> -->
          </banner>
        </el-col>
      </el-row>
      <!-- banner end -->

      <!-- No1 start -->

      <div class="noOne clearfix">
        <el-row type="flex" justify="center" class="noOne-top clearfix">
          <el-col :span="10" :xs="24" :lg="13" :md="18" :sm="22" :xl="9">
            <img src="./images/NO.1.png" alt="No.1" />
            <p>一 个 快 速 简 单 的</p>
            <h1>切手机保护膜设备</h1>
          </el-col>
        </el-row>
        <el-row class="noOne-auto container">
          <el-col :span="9" class="hidden-sm-only hidden-xs-only hidden-md-only">
            <p>
              <strong>30</strong> 秒裁切出任意型号
            </p>
            <span>手机保护膜</span>
          </el-col>
          <el-col :xs="24" :lg="15" :md="20" :sm="24">
            <ul>
              <li v-for="(item, index) in noTwoSixImage.first" :key="index">
                <img :src="item.url" alt="手机保护膜展示" />
              </li>
            </ul>
          </el-col>
        </el-row>
        <el-row class="noOne-auto-two container">
          <el-col :span="9" class="hidden-sm-only hidden-xs-only hidden-md-only">
            <img src="./images/index_7.jpg" alt="极简设计" />
          </el-col>
          <el-col :span="12" :xs="24" :lg="15" :md="18" :sm="24">
            <ul>
              <li v-for="(item, index) in noTwoSixImage.two" :key="index">
                <img :src="item.url" alt=“手机保护膜展示 />
              </li>
            </ul>
          </el-col>
        </el-row>
        <el-row class="noOne-bottom">
          <el-col :span="24">
            <p>[每个环节都为切膜效率专门设计]</p>
          </el-col>
        </el-row>
      </div>

      <!-- No1 end -->

      <!-- No.2 start -->
      <div class="notwo">
        <el-row class="container">
          <el-col
            class="notwo-left hidden-sm-only hidden-xs-only hidden-md-only"
            :span="9"
            :lg="12"
          >
            <img src="./images/NO.2_1.png" alt="加盟商展示" />
          </el-col>
          <el-col class="notwo-right" :span="10" :xs="24" :lg="12" :md="18" :sm="23">
            <img src="./images/NO.2.png" alt="No.2" />
            <p>几乎不需要库存</p>
            <h1>门店手机膜不用再压货</h1>
          </el-col>
        </el-row>
      </div>
      <!-- No.2 end -->

      <!-- No.3 start -->
      <div class="noThree clearfix">
        <div class="container">
          <el-row  class="noThree-up">
            <el-col :span="18" :xs="10">
              <img src="./images/NO.3.png" alt="no.3" />
              <p>不漏单不丢客户</p>
            </el-col>
          </el-row>
          <el-row class="noThree-down">
            <el-col :span="18" :xs="20">
              <p>
                手机膜数据
                <span>4000+</span> 款
                <br />老款新款，随用随切！
              </p>
            </el-col>
          </el-row>
        </div>
        <img
          src="./images/NO.3_1.png"
          alt="App界面展示"
          class="imgPos hidden-sm-only hidden-xs-only hidden-md-only"
        />
      </div>
      <!-- No.3 end -->

      <!-- No.4 start -->
      <div class="nofour">
        <el-row class="container">
          <el-col :span="12" class="nofour-left hidden-sm-only hidden-xs-only hidden-md-only">
            <img src="./images/NO.4_1.png" alt="大秦展会" />
          </el-col>
          <el-col :span="12" class="nofour-right" :xs="20" :lg="12" :md="18" :sm="23">
            <img src="./images/No.4.png" alt="No.3" />
            <h1>{ 很多引流活动可以展开 }</h1>
            <p>
              如99元全年免费换贴膜活动，
              <br />任何型号都可以定制，落地能手！
            </p>
          </el-col>
        </el-row>
      </div>
      <!-- No.4 end -->
      <!-- No.5 start -->
      <div class="nofive">
        <el-row class="container">
          <el-col :span="10" :xs="10" class="nofive-left">
            <img src="./images/NO.5.png" alt="No.5" />
            <p>
              增加科技感
              <br />
              <span>让门店更有人气</span>
            </p>
          </el-col>
          <el-col :span="10" class="nofive-right hidden-xs-only">
            <img src="./images/NO.5_1.jpg" alt="加盟店展示" />
          </el-col>
        </el-row>
      </div>
      <!-- No.5 end -->

      <!-- No.6 start -->
      <div class="nosix">
        <el-row class="container">
          <el-col :span="14" class="nosix-left hidden-sm-only hidden-xs-only ">
            <img src="./images/NO.6_1.png" alt="No.6" />
          </el-col>
          <el-col :xs="24" :md="10" :lg="10" :sm="24" :span="10" class="nosix-right">
            <img src="./images/NO.6.png" alt="No.6" />
            <p>
              增加销售额
              <br />
              <span>提升门店转化率</span>
            </p>
          </el-col>
        </el-row>
      </div>
      <!-- No.6 end -->
      <!-- No.7-8 start -->
      <div class="noseven container">
        <el-row>
          <el-col :span="12" :xs="24" class="seven-left">
            <img src="./images/NO.7.png" alt="No.7" />
            <p>免除多品种多型号手机膜的采 购、盘库、报废等麻烦，都是 标准半成品，采购、盘库都极 其简单，不存在积压损失。</p>
          </el-col>
          <el-col :span="12" :xs="24" class="seven-right">
            <img src="./images/NO.8.png" alt="No.8" />
            <p>可以裁切前膜和后膜，好材质， 自修复，抗撞击，手感好。易 贴附，有易贴专业设计，生手 秒变熟手，30秒就贴好！不用 担心碎边，适合各种屏幕，包 括曲面屏和折叠屏贴膜。</p>
          </el-col>
        </el-row>
      </div>
      <!-- No.7-8 end -->
    </el-main>
  </el-container>
</template>
<script>
import banner from "../../pages/banner/banner";
export default {
  name: "index",
  data() {
    return {
      show: false,
      // 控制banner组件的高度
      bannerHeight: null,
      // banner图的位置
      bannerImage: [
        { imgUrl: require("./images/banner-1.jpg"), alt: "门店引流" }
        // { imgUrl: require("./images/banner-2.jpg"), alt: "手机壳套通用规范团体标准审查会" }
      ],
      // No.2 six images
      noTwoSixImage: {
        first: [
          {
            alt: "手机背膜展示",
            url: require("./images/index_1.jpg")
          },
          {
            alt: "手机背膜展示",
            url: require("./images/index_2.jpg")
          },
          {
            alt: "手机背膜展示",
            url: require("./images/index_3.jpg")
          }
        ],
        two: [
          {
            alt: "手机背膜展示",
            url: require("./images/index_4.jpg")
          },
          {
            alt: "手机背膜展示",
            url: require("./images/index_5.jpg")
          },
          {
            alt: "手机背膜展示",
            url: require("./images/index_6.jpg")
          }
        ]
      }
    };
  },

  methods: {
    // 获取图片高度
    imgLoad() {
      // console.log(1)
      this.$nextTick(() => {
        this.bannerHeight = this.$refs.bannerHeight[0].height;
        // console.log(this.$refs.bannerHeight[0].height)
      });
    }
  },

  mounted() {
    // 这是获取一共有多少张轮播图
    for (let i = 0; i < this.bannerImage.length; i++) {
      // 取最大下标 + 1
      this.bannerSize = Math.max(i + 1);
    }
    // 页面加载完成调用 imgLoad 方法
    this.imgLoad();
    // window窗口监测
    window.addEventListener(
      "resize",
      () => {
        this.bannerHeight = this.$refs.bannerHeight[0].height;
        this.imgLoad();
      },
      false
    );

    let offsetWidth =
      document.documentElement.offsetWidth || document.body.offsetWidth;
    if (offsetWidth < 1000) {
      this.show = true;
    }
  },

  components: {
    banner
  }
};
</script>

<style lang="scss">
.el-main {
  padding: 0;
  overflow: hidden;
  // No.1 start
  .noOne {
    background: url("./images/NO.1_back.png") center no-repeat;
    .noOne-top {
      margin-top: 0.3rem;
      img {
        float: left;
        width: 2.3rem;
        margin-right: 0.2rem;
        margin-top: 0.3rem;
      }
      p {
        float: left;
        font-size: 0.5rem;
      }
      h1 {
        float: left;
        font-size: 0.55rem;
      }
    }
    .noOne-auto {
      margin-top: 0.3rem;
      font-size: 0.4rem;
      p {
        font-weight: bold;
        strong {
          font-size: 0.55rem;
        }
      }
      li {
        float: left;
        img {
          width: 2.4rem;
        }
      }
      .xl {
        margin-right: 0.2rem;
      }
    }
    .noOne-auto-two {
      li {
        float: left;
        img {
          width: 2.4rem;
        }
      }
    }
    .noOne-bottom {
      p {
        text-align: center;
        font-size: 0.4rem;
        margin-top: 0.3rem;
        font-weight: 700;
      }
    }
  }
  // No.1 end
  // No.2 start
  .notwo {
    background: url("./images/NO.2_back.png");
    box-sizing: border-box;
    .notwo-left {
      img {
        width: 100%;
      }
    }
    .notwo-right {
      text-align: center;
      color: #fff;
      margin-top: 0.1rem;
      img {
        width: 2.74rem;
        padding: 0.2rem;
      }
      p {
        font-size: 0.4rem;
      }
      h1 {
        font-size: 0.5rem;
      }
    }
  }
  // No.2 end
  // No.3 start
  .noThree {
    background: url("./images/NO.3_back.png");
    position: relative;
    .imgPos {
      position: absolute;
      right: 1.5rem;
      top: 0.5rem;
      z-index: 1111;
      width: 7.4rem;
    }
    .noThree-up {
      margin-top: 1rem;
      img {
        width: 2.45rem;
      }
      p {
        font-size: 0.4rem;
      }
    }
    .noThree-down {
      margin: 0.6rem 0 0.6rem 0;
      p {
        font-size: 0.5rem;
        font-weight: bold;
        span {
          font-size: 0.7rem;
        }
      }
    }
  }
  // No.3 end
  // No.4 start
  .nofour {
    background: url("./images/NO.4_back.png");
    .nofour-left {
      margin: 0.8rem 0 0.6rem 0;
      img {
        width: 5.87rem;
      }
    }
    .nofour-right {
      color: #fff;
      text-align: center;
      padding: 1.5rem 0;
      img {
        width: 5.1rem;
      }
      h1 {
        font-size: 0.5rem;
        font-weight: bold;
      }
      p {
        font-size: 0.3rem;
        margin-top: 0.2rem;
      }
    }
  }
  // No.4 end
  // No.5 start
  .nofive {
    color: #fff;
    background: #b60005;
    font-size: 0.4rem;
    .nofive-left {
      padding: 0.5rem 0;
      box-sizing: border-box;
      span {
        font-weight: bold;
      }
      img {
        width: 2.47rem;
      }
    }
    .nofive-right {
      text-align: center;
    }
  }
  // No.5 end
  // No.6 start
  .nosix {
    background: url("./images/NO.6-back.jpg");
    padding: 1.5rem 0;
    box-sizing: border-box;
    .nosix-left {
      img {
        width: 100%;
      }
    }
    .nosix-right {
      text-align: center;
      font-size: 0.5rem;
      span {
        font-weight: bold;
      }
      img {
        width: 2.47rem;
      }
    }
  }
  // No.6 end
  // No.7-8 start
  .noseven {
    img {
      width: 2.45rem;
    }
    p {
      font-size: 0.4rem;
      line-height: 0.55rem;
    }
    .seven-left {
      background: #0084d8;
      padding: 0.75rem 0.28rem;
      color: #fff;
      p {
        font-size: 0.4rem;
        line-height: 0.55rem;
        margin-top: 0.45rem;
      }
    }
    .seven-right {
      padding: 0.2rem 0.28rem;
    }
  }
  // No.7-8 end
}
</style>