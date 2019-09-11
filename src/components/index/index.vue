<template>
  <div class="features_two">
    <bannerStatic>
      <img src="./images/Two/banner.jpg" alt />
    </bannerStatic>
    <div class="container">
      <!--new IDskin -->
      <el-row class="oneIDskin">
        <span class="ellipse">有一台IDskin</span>
        <h1>就拥有一个 手机膜加工厂</h1>
        <img src="./images/Two/machineImg.png" alt="IDskin机器展示" />
      </el-row>
      <!--IDskin机器图片展示-->
      <el-row class="imgExhibition">
        <img src="./images/Two/imgDisplay.png" alt="切膜小子 2.0" />
      </el-row>
      <!--手机切膜机-->
      <el-row class="idskinPhone">
        <span class="ellipse">手机切膜机</span>
        <h1>进入无线掌控时代</h1>
        <img src="./images/Two/twoImg.png" alt="IDskin优势" />
      </el-row>
      <!--拿出手机操控机器-->
      <el-row class="caokong">
        <img src="./images/Two/caokong.png" alt="拿出手机就可以操控" />
      </el-row>
      <!--三个优点-->
      <el-row class="threeAdvantage">
        <el-col :span="8" v-for="(threeAdvantage, index) in threeAdvantages" :key="index">
          <img :src="threeAdvantage.imgUrl" :alt="threeAdvantage.title" />
          <p>{{threeAdvantage.title}}</p>
        </el-col>
      </el-row>
      <!--4000+型号任意裁切-->
      <el-row class="Four-thousand">
        <p>
          <span>4000+</span>
          <strong>型号 任意裁切</strong>
          <br />无论前膜 背膜 想切就切
        </p>
      </el-row>
      <!--六张产品图-->
      <el-row class="Six-product-maps" :gutter="15">
        <el-col :span="8" v-for="(SixProductMap , index) in SixProductMaps" :key="index">
          <img :src="SixProductMap.imgUrl" :alt="SixProductMap.title" />
          <p>{{SixProductMap.title}}</p>
        </el-col>
      </el-row>
      <!--轻库存-->
      <el-row class="Light-Inventory">
        <span class="ellipse">轻库存</span>
        <h1>告别传统库存积压</h1>
        <img src="./images/Two/kucunImg.jpg" alt="大秦加盟店展示" />
      </el-row>
      <!--软膜已成市场趋势，重收益！-->
      <el-row class="return-oriented">
        <span>软膜已成市场趋势，重收益！</span>
      </el-row>
      <!--多一种选择  多一条赚钱之路-->
      <el-row class="Choice">
        <p>
          多一种
          <strong>选择</strong> 多一条
          <strong>赚钱</strong>之路
        </p>
      </el-row>
    </div>
  </div>
</template>

<script>
import bannerStatic from "../../pages/banner/bannerStaticState";
export default {
  name: "index",
  data() {
    return {
      threeAdvantages: [
        { title: "更先进", imgUrl: require("./images/Two/xianjin.png") },
        { title: "更快捷", imgUrl: require("./images/Two/kuaijie.png") },
        { title: "更简单", imgUrl: require("./images/Two/jiandan.png") }
      ],
      SixProductMaps: [
        { title: "高清柔性软膜", imgUrl: require("./images/Two/moOne.jpg") },
        { title: "皮纹膜", imgUrl: require("./images/Two/moTwo.jpg") },
        { title: "抗蓝光钢化膜", imgUrl: require("./images/Two/moThree.jpg") },
        {
          title: "全屏曲面纳米防爆膜",
          imgUrl: require("./images/Two/moFour.jpg")
        },
        { title: "防爆钢化膜", imgUrl: require("./images/Two/moFive.jpg") },
        { title: "裸机果冻膜", imgUrl: require("./images/Two/moSix.jpg") }
      ]
    };
  },
  components: {
    bannerStatic
  }
};
</script>

<style lang="scss" scoped>
.features_two {
  text-align: center;

  .oneIDskin {
    background: url("./images/Two/oneBack.jpg") center no-repeat;

    img {
      margin-top: 0.7rem;
    }
  }

  .imgExhibition {
    background: #eeeeee;
    padding: 0.5rem;
    box-sizing: border-box;
  }

  .idskinPhone {
    background: url("./images/Two/twoBack.png") center no-repeat;

    img {
      padding: 0.7rem 0;
      box-sizing: border-box;
    }
  }

  .caokong {
    background: url("./images/Two/ThreeImg.png") center no-repeat;
    padding: 0.7rem 0;
    box-sizing: border-box;
  }

  .threeAdvantage {
    div {
      background: #d2d2d2;
      border: 1px solid #fff;
      padding: 0.3rem 0;
      box-sizing: border-box;

      img {
        max-width: 100%;
        padding: 0.3rem 0;
      }

      p {
        font-size: 0.5rem;
      }
    }
  }

  .Four-thousand {
    background: url("./images/Two/4000+.png") center no-repeat;
    padding: 0.6rem 0;
    box-sizing: border-box;

    p {
      font-size: 0.5rem;
      color: #ffffff;

      span {
        font-size: 0.8rem;
        font-weight: bold;
        background: linear-gradient(to right, #b90e0d, #9006b8);
        -webkit-background-clip: text;
        color: transparent;
      }
    }
  }

  .Six-product-maps {
    font-size: 0.3rem;
    padding: 0.2rem;
    box-sizing: border-box;
    p {
      margin: 0.3rem 0;
    }
    img {
      max-width: 100%;
    }
  }
  .Light-Inventory {
    background: url("./images/Two/kucunBGimg.jpg") center no-repeat;
    img {
      padding: 0.5rem 0;
      box-sizing: border-box;
    }
  }
  .return-oriented {
    background: url("./images/Two/shouyiBGimg.jpg");
    font-size: 0.5rem;
    color: #ffffff;
    padding: 1rem 0;
    span {
      padding: 0.1rem;
      box-sizing: border-box;
      border-radius: 0.2rem;
      box-sizing: border-box;
      background: linear-gradient(
        to right,
        #b90e0d,
        #9006b8 200%
      ); /* 标准的语法 */
    }
  }
  .Choice {
    font-size: 0.5rem;
    color: #ffffff;
    padding: 1.2rem 0;
    box-sizing: border-box;
    background: linear-gradient(
      to right,
      #b90e0d,
      #9006b8 200%
    ); /* 标准的语法 */
  }
}

.ellipse {
  font-size: 0.4rem;
  border: 2px solid #fff;
  padding: 0.1rem;
  border-radius: 0.2rem;
  color: #fff;
}

h1 {
  font-size: 0.6rem;
  color: #fff;
}

img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}

</style>
