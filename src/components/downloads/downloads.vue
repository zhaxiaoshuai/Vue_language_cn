<template>
  <div>
    <bannerStaticState>
      <img src="./images/banner.png" alt="">
    </bannerStaticState>
    <el-row class="container">
      <el-col
        :span="11"
        :xs="24"
        class="downloadsColor"
        v-for="(Appdownload,index) in Appdownloads"
        :key="index"
      >
        <img src="./images/anzhuo.png" alt />
        <!--<p>Android蓝牙切割版</p>-->
        <p>{{Appdownload.pText}}</p>
        <span>{{Appdownload.spanText}} &nbsp;&nbsp;&nbsp;&nbsp;</span>
        <a :href="Appdownload.aHref">立即下载</a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import bannerStaticState from '../../pages/banner/bannerStaticState'
export default {
  name: "downloads",
  data() {
    return {
      Appdownloads: [
        {
          pText: "切膜小子IDskin",
          spanText: "版本型号：V1.00 (12.0MB)",
          aHref: "../../../static/app/cn/IDskin Cut_Zh_11-28-V6(1).apk"
        },
      ]
    };
  },
  components:{
    bannerStaticState
  }
};
</script>

<style lang="scss" scoped>
.downloadsColor {
  background: #f3f7ff;
  padding: 0.2rem 0.2rem;
  box-sizing: border-box;
  text-align: center;
  margin: 0 .2rem .2rem 0;
  img {
    max-width: 30%;
    float: left;
    padding-right: 0.2rem;
  }
  p {
    float: left;
    font-size: 0.25rem;
  }
  span {
    font-size: 0.2rem;
    float: left;
    margin-top: 0.15rem;
    color: #a7a8a9;
    display: block;
  }
  a {
    color: #26d9a8;
    font-size: 0.2rem;
    float: left;
    margin-top: 0.15rem;
    display: block;
  }
}
</style>
