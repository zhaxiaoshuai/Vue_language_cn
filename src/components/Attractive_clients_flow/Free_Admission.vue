<template>
  <div>
    <!-- banner图 -->
    <el-row>
      <el-col>
        <bannerStaticState>
          <img src="./images/banner-2.jpg" alt="99元包年贴膜" />
        </bannerStaticState>
      </el-col>
    </el-row>
    <!-- 自定义导航 -->
    <el-row>
      <el-col>
        <AttractiveClientsFlowNav></AttractiveClientsFlowNav>
      </el-col>
    </el-row>

    <!-- 主体内容 ↓↓↓↓↓↓↓↓ -->
    <div class="container">
      <el-row>
        <el-col
          v-for="(threeAdvantage, index) in threeAdvantages"
          :key="index"
          :span="8"
          class="threeAdvantage"
        >
          <img :src="threeAdvantage.img" :alt="threeAdvantage.h1Message" />
          <h1>{{threeAdvantage.h1Message}}</h1>
          <p>{{threeAdvantage.pMessage}}</p>
        </el-col>
      </el-row>
      <el-row class="wrap-three">
        <img src="./images/banner_backImg2.jpg" alt="IDskin三大优势" />
      </el-row>
    </div>
  </div>
</template>
<script>
import AttractiveClientsFlowNav from "./Attractive_clients_flow_nav";
import bannerStaticState from "../../pages/banner/bannerStaticState";

export default {
  data() {
    return {
      threeAdvantages: [
        {
          img: require("./images/icon-4.png"),
          h1Message: "刚需",
          pMessage: "手机屏幕贴膜为刚需，可以让客户持续回流。"
        },
        {
          img: require("./images/icon-5.png"),
          h1Message: "简单",
          pMessage:
            "选购一台IDskin手机膜切割机， 操作简单，一学就会。半成品定制材料，不会造成库存积压。"
        },
        {
          img: require("./images/icon-6.png"),
          h1Message: "成本可控",
          pMessage: "每年成本60元左右，让客户回流12次，每月回流一次，产生的潜在价值巨大。"
        }
      ]
    };
  },
  components: {
    bannerStaticState,
    AttractiveClientsFlowNav
  }
};
</script>

<style lang="scss" scoped>
.threeAdvantage {
  text-align: center;
  height: 5.48rem;
  padding: 0.25rem 0.5rem 0 0.5rem;
  box-sizing: border-box;
  margin-bottom: .5rem;
  img {
    width: 90%;
  }
  h1 {
    font-size: 0.6rem;
    color: #b60005;
  }
  p {
    font-size: 0.3rem;
    color: #000;
  }
}
.wrap-three {
  margin-top: 0.55rem;
  img {
    width: 100%;
  }
}
</style>