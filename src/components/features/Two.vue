<template>
  <div class="features_two">
    <div class="container">
      <!--new IDskin -->
      <el-row class="oneIDskin">
        <span class="ellipse">有一台IDskin</span>
        <h1>就拥有一个 手机膜加工厂</h1>
        <img src="./images/Two/machineImg.png" alt="">
      </el-row>
      <!--IDskin机器图片展示-->
      <el-row class="imgExhibition">
        <img src="./images/Two/imgDisplay.png" alt="">
      </el-row>
      <!--手机切膜机-->
      <el-row class="idskinPhone">
        <span class="ellipse">手机切膜机</span>
        <h1>进入无线掌控时代</h1>
        <img src="./images/Two/twoImg.png" alt="">
      </el-row>
      <!--拿出手机操控机器-->
      <el-row class="caokong">
        <img src="./images/Two/caokong.png" alt="">
      </el-row>
      <!--三个优点-->
      <el-row class="threeAdvantage">
        <el-col :span="8" v-for="(threeAdvantage, index) in threeAdvantages" :key="index">
          <img :src="threeAdvantage.imgUrl" alt="">
          <p>{{threeAdvantage.title}}</p>
        </el-col>
      </el-row>
      <!--4000+型号任意裁切-->
    </div>
    <div style="height:500px"></div>
  </div>
</template>

<script>
  import features_nav from './features_nav'

  export default {
    name: "Two",
    data() {
      return{
        threeAdvantages:[
          {title:"更先进",imgUrl:require('./images/Two/xianjin.png')},
          {title:"更快捷",imgUrl:require('./images/Two/kuaijie.png')},
          {title:"更简单",imgUrl:require('./images/Two/jiandan.png')},
        ]
      }
    },
    components: {
      features_nav
    }
  }
</script>

<style lang="scss" scoped>
  .features_two {
    text-align: center;
    .oneIDskin {
      background: url("./images/Two/oneBack.jpg");

      img {
        margin-top: .7rem;
      }
    }
    .imgExhibition {
      background: #eeeeee;
      padding: .5rem;
      box-sizing: border-box;
    }
    .idskinPhone {
      background: url("./images/Two/twoBack.png") center no-repeat;
      img {
        padding: .7rem 0;
        box-sizing: border-box;
      }
    }
    .caokong {
      background: url("./images/Two/ThreeImg.png");
      padding: .7rem 0;
      box-sizing: border-box;
    }
    .threeAdvantage {
      div {
        background: #d2d2d2;
        border: 1px solid #fff;
        padding: .3rem 0;
        box-sizing: border-box;
        img {
          max-width: 100%;
          padding: .3rem 0;
        }
        p {
          font-size: .5rem;
        }
      }
    }
  }
  .container {
    height: auto;
  }


  .ellipse {
    font-size: .4rem;
    border: 2px solid #fff;
    padding: .1rem;
    border-radius: .2rem;
    color: #fff
  }

  h1 {
    font-size: .6rem;
    color: #fff;
  }

  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }
</style>
