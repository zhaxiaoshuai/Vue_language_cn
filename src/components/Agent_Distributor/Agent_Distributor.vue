<template>
  <div>
    <!-- banner -->
    <el-row>
      <el-col :span="24">
        <bannerStaticState>
          <img src="./images/banner_1.jpg" alt="代理分销商/贴牌代理" />
        </bannerStaticState>
      </el-col>
    </el-row>



    <div class="oemintroduce">
      <img src="./images/pelple.png" alt="大秦手机壳周年庆" class="width100" />
      <div class="container container-all clearfix">
        <el-col class="clearfix">
          <div class="writepeople clearfix">
            <div class="writepeople-top">
              <h1>IDskin 是大秦子品牌</h1>
              <p>多年专业材料经验</p>
            </div>
            <div class="writepeople-auto">
              <h1>
                17
                <span>年</span>
              </h1>
              <p>有17年专业基础 大秦有系手机个性增值业务</p>
            </div>
            <div class="writepeople-bottom">
              <h1>
                5000
                <span>款</span>
              </h1>
              <p>5000款数据绘制经验</p>
            </div>
          </div>
        </el-col>
        <el-col>
          <!-- IDskin采用新一代手机控制系统 -->
          <div class="Newgeneration">
            <h1>IDskin采用新一代手机控制系统</h1>
            <p>
              不需要电脑 不需要平板电脑
              <br />也不需要另外触摸屏
            </p>
          </div>
        </el-col>
        <!-- 一切都是极简的 -->
        <el-row>
          <el-col class="minimalism clearfix">
            <el-col>
              <div class="minimalism-icon-left clearfix">
                <img src="./images/icon-1.jpg" alt="只需手机下载IDskin APP就可以操作" />
                <p>
                  只需手机下载IDskin APP
                  <br />就可以 操作
                </p>
              </div>
              <div class="minimalism-icon-right clearfix">
                <img src="./images/icon-2.jpg" alt="操作界面简单又快又好" />
                <p>
                  操作界面简单
                  <br />又快又好
                </p>
              </div>
            </el-col>
            <el-col>
              <div class="minimalism-icon-left clearfix">
                <img src="./images/icon-3.jpg" alt="只需手机下载IDskin APP就可以操作" />
                <p>
                  一 切都是“极简”设计，
                  <br />用手指点3下，就开始切膜！
                </p>
              </div>
              <div class="minimalism-icon-right clearfix">
                <img src="./images/icon-4.jpg" alt="让切膜简单到酷" />
                <p>让切膜简单到酷</p>
              </div>
            </el-col>
          </el-col>
        </el-row>
        <!-- IDskin可以一站式OEM代理 -->

        <el-row>
          <el-col>
            <div class="IDskinOEM clearfix">
              <div class="IDskinOEM-top clearfix">
                <h1>IDskin可以一站式OEM代理</h1>
                <img src="./images/banner_4.jpg" alt />
              </div>
            </div>
            <div class="circular">
              <el-row type="flex" justify="center">
                <el-col :span="12">
                  <img src="./images/circular-1.png" alt />
                </el-col>
                <el-col :span="12">
                  <img src="./images/circular-2.png" alt />
                </el-col>
              </el-row>
            </div>
            <!-- 我们对软件、机器（含包装箱）、材料、工具（传输线、
            垫板、刮板、软布）等都进行一站式贴牌定制。-->
            <div class="content-p">
              <p>
                我们对软件、机器（含包装箱）、材料、工具（传输线、
                垫板、刮板、软布）等都进行
                <span>一站式贴牌定制</span> 。
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="agent-bottom">
        <div class="container">
          <el-row :gutter="10">
            <el-col :span="8" class="agent-bottom-threeImg">
              <div>
                <img src="./images/banner-bottom-1.png" alt="数据升级" />
                <p>数据升级</p>
              </div>
            </el-col>
            <el-col :span="8" class="agent-bottom-threeImg">
              <div>
                <img src="./images/banner-bottom-2.png" alt="系统维护" />
                <p>系统维护</p>
              </div>
            </el-col>
            <el-col :span="8" class="agent-bottom-threeImg">
              <div>
                <img src="./images/banner-bottom-3.png" alt="售后" />
                <p>售后</p>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col class="daqinRealization">
              <p>
                可以由大秦实现
                <br />
                <span>代理商只需要卖设备 销售市场即可</span>
              </p>
            </el-col>
          </el-row>
          <el-row class="IDskinOEM">
            <el-col>
              <h1>IDskin有专业的代理商管理功能</h1>
              <p>
                代理商可以管理旗下门店机使用情况
                <br />包括切割数量和材料管理
              </p>
            </el-col>
            <el-col>
              <img src="./images/OEMGood.png" alt="让代理商更好掌握市场">
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bannerStaticState from "../../pages/banner/bannerStaticState";

export default {
  components: {
    bannerStaticState
  }
};
</script>

<style lang="scss">
.oemintroduce {
  position: relative;
  .width100 {
    width: 100%;
  }
  .container-all {
    .writepeople {
      background: url("./images/whitepeople.jpg") center no-repeat;
      text-align: center;
      .writepeople-top {
        margin: 0.5rem 0 0.5rem 0;
      }
      .writepeople-auto {
        margin-bottom: 0.3rem;
      }
      .writepeople-bottom {
        margin-bottom: 0.3rem;
      }
      h1 {
        color: #b60005;
        font-size: 0.6rem;
        span {
          font-size: 0.4rem;
        }
      }
      p {
        font-size: 0.4rem;
      }
    }
    .Newgeneration {
      background: url("./images/banner_2.jpg") center no-repeat;
      text-align: center;
      color: #fff;
      padding: 0.5rem 0;
      h1 {
        font-size: 0.6rem;
      }
      p {
        font-size: 0.4rem;
      }
    }
    .minimalism {
      background: url("./images/IDskinclear.png") center no-repeat;
      padding: 0.8rem 0.55rem;
      box-sizing: border-box;
      img {
        width: 0.84rem;
      }
      p {
        font-size: 0.3rem;
      }
      .minimalism-icon-left {
        float: left;
        margin-bottom: 1rem;
      }
      .minimalism-icon-right {
        float: right;
        text-align: right;
      }
    }
    .IDskinOEM {
      background: url("./images/banner_3.jpg") center no-repeat;
      color: #fff;
      text-align: center;
      position: relative;
      .IDskinOEM-top {
        h1 {
          font-size: 0.6rem;
          padding: 0.6rem 0;
          box-sizing: border-box;
        }
        img {
          width: 90%;
          padding-bottom: 1.5rem;
        }
      }
    }
    .circular {
      margin-top: -1.22rem;
      text-align: center;
      img {
        width: 2.44rem;
      }
    }
    .content-p {
      background: #b60005;
      text-align: center;
      padding: 0.3rem 0.25rem;
      box-sizing: border-box;
      width: 90%;
      margin: 0 auto;
      margin-bottom: 0.7rem;
      p {
        font-size: 0.4rem;
        color: #fff;
        span {
          font-size: 0.45rem;
          font-weight: bold;
        }
      }
    }
  }
  .agent-bottom {
    background: url("./images/banner-bottom.png") center no-repeat;
    padding: 0.8rem 0;
    height: 12.7rem;
    box-sizing: border-box;
    .agent-bottom-threeImg {
      text-align: center;
      div {
        background: #fff;
        padding: 0.5rem 0 0.3rem 0;
        box-sizing: border-box;
      }
      img {
        display: block;
        margin: 0 auto;
        width: 1.95rem;
      }
      p {
        font-size: 0.4rem;
        margin-top: 0.4rem;
      }
    }
    .daqinRealization {
      margin-top: 0.3rem;
      text-align: center;
      padding: 0.5rem 0;
      box-sizing: border-box;
      background: #fff;
      p {
        font-size: 0.4rem;
        color: #b60005;
        span {
          font-size: 0.6rem;
          font-weight: bold;
        }
      }
    }
    .IDskinOEM{
      color:#fff;
      text-align: center;
      margin-top: 1rem;
      h1{
        font-size: .6rem;
      }
      p{
        font-size: .4rem;
      }
      img{
        width: 4.64rem;
      }
    }
  }
}
</style>