<template>
  <div>
    <bannerStaticState>
      <img src="./images/banner.png" alt />
    </bannerStaticState>
    <el-row class="container containerAppVideo">
      <!-- App下载 -->
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
        <p>{{Appdownload.spanText}}</p>
        <a :href="Appdownload.aHref">立即下载</a>
      </el-col>
    </el-row>
    <!-- 教学视频展示以及材料充值步骤 -->
    <div class="teachingSetps">
      <el-row class="container teachingVideo">
        <el-col
          :span="8"
          :xs="12"
          v-for="(video, index) in videos"
          :key="index"
          style="margin-top:.3rem;"
        >
          <a :href="video.videoHref" target="_blank">
            <img src="./images/video.png" alt />
            {{video.videoText}}
          </a>
        </el-col>

        <el-col class="setps">
          <h1>材料加点方式</h1>
          <ul class="clearfix">
            <li v-for="(setpsContent, index) in setpsContents" :key="index">
              步骤{{index++ +1}} ：{{setpsContent.setpsContentText}}
              <img
                :src="setpsContent.setpsContentImg"
                alt
              />
            </li>
          </ul>
          <h1>如遇问题请留言或联系经销商</h1>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import bannerStaticState from "../../pages/banner/bannerStaticState";
export default {
  name: "downloads",
  data() {
    return {
      setpsNumber:1,
      Appdownloads: [
        {
          pText: "切膜小子IDskin",
          spanText: "版本型号：V1.00 (12.0MB)",
          aHref: "../../../static/app/cn/IDskin Cut_Zh_11-28-V6(1).apk"
        }
      ],
      videos: [
        {
          videoText: "开箱视频及设备介绍",
          videoHref: "https://v.qq.com/txp/iframe/player.html?vid=z3030gamug9"
        },
        {
          videoText: "软件安装及调试",
          videoHref: "https://v.qq.com/txp/iframe/player.html?vid=e3030t4zysn"
        },
        {
          videoText: "刀头调试",
          videoHref: "https://v.qq.com/txp/iframe/player.html?vid=a30301opyil"
        },
        {
          videoText: "材料展示",
          videoHref: "https://v.qq.com/txp/iframe/player.html?vid=d3030dxr5y5"
        },
        {
          videoText: "测试切割",
          videoHref: "https://v.qq.com/txp/iframe/player.html?vid=y30306ie0he"
        }
      ],
      setpsContents: [
        {
          setpsContentText: "进入切膜小子App",
          setpsContentImg: require("./images/steps1.jpg")
        },
        {
          setpsContentText: "进入个人中心",
          setpsContentImg: require("./images/steps2.jpg")
        },
        {
          setpsContentText: "点击扫描材料数据",
          setpsContentImg: require("./images/steps3.jpg")
        },
        {
          setpsContentText: "扫描材料二维码",
          setpsContentImg: require("./images/steps4.jpg")
        }
      ]
    };
  },
  components: {
    bannerStaticState
  },

};
</script>

<style lang="scss" scoped>
.containerAppVideo {
  display: flex;
  justify-content: center;
  .downloadsColor {
    background: #f3f7ff;
    padding: 0.2rem 0.2rem;
    box-sizing: border-box;
    text-align: center;
    margin: 0 0.2rem 0.2rem 0;
    display: flex;
    align-items: center;
    img {
      max-width: 30%;
      float: left;
      padding-right: 0.2rem;
    }
    p {
      font-size: 0.2rem;
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
      font-size: 0.6rem;
      float: left;
      margin-top: 0.15rem;
      display: block;
    }
  }
}
.teachingSetps {
  background: #f2f2f2;
  padding: 0.2rem 0;
  text-align: center;
  .teachingVideo {
    a {
      font-size: 0.2rem;
      display: block;
      color: #000;
      text-decoration: none;
      img {
        margin-bottom: 0.1rem;
        max-width: 95%;
      }
    }
  }
  .setps {
    margin-top: 0.5rem;
    h1 {
      font-size: 0.5rem;
      margin-top: 0.3rem;
    }
    ul {
      li {
        width: 50%;
        float: left;
        font-size: 0.2rem;
        margin-top: 0.3rem;
        img {
          max-width: 95%;
          margin-top: 0.2rem;
        }
      }
    }
  }
}
</style>
