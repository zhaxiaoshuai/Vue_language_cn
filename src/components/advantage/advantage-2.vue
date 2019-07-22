<template>
  <div>
    <el-row>
      <el-col :span="24" :xs="24">
        <bannerStaticState>
          <img src="./images/IDskinVs_banner.jpg" alt />
        </bannerStaticState>
      </el-col>
    </el-row>
    <div class="container container-all">
      <!-- 循环 -->
      <!-- <el-row v-for="(categorys, index) in categorysArr" :key="index"> 
        <el-col :span="11" :xs="24" :sm="24" :md="11" class="container-left" v-for="(protection, index) in protections" :key="index">
          <ul>
            <li>
              <h1> {{protection.h1Message}} </h1>
              <p>{{protection.pMessage}}</p>
            </li>
          </ul>
        </el-col>
        <el-col :span="11" :xs="24" :sm="24" :md="11" class="container-right" v-for="(Noprotection, indexs) in Noprotections" :key="indexs">
          <ul>
            <li>
              <h1> {{Noprotection.h1Message}} </h1>
              <p> {{Noprotection.pMessage}} </p>
            </li>
          </ul>
        </el-col>
      </el-row> -->
      <!-- 不循环 -->

      <el-row>
        <el-col :span="11" :xs="24" :sm="24" :md="11" class="container-left">
          <ul>
            <li>
              <h1>环保 不产生烟尘废气</h1>
              <p>IDskin切割手机膜过程中，无烟尘气味， 环保健康，适用任何商场。无地区限制。</p>
            </li>
          </ul>
        </el-col>
        <el-col :span="11" :xs="24" :sm="24" :md="11" class="container-right">
          <ul>
            <li>
              <h1>不环保 产生烟尘废气</h1>
              <p>激光切割手机膜时，由于采用高温燃烧 方式，会产生大量烟尘废气。这种气体 不环保，在很多商场卖场是受限制的。</p>
            </li>
          </ul>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11" :xs="24" :sm="24" :md="11" class="container-left">
          <ul>
            <li>
              <h1>切手机膜边缘细腻无毛刺</h1>
              <p>IDskin采用物理刀，切割圆滑细腻，边 缘不糊边，不易起边。切割膜效果更好， 更有档次。客户体验更好！</p>
            </li>
          </ul>
        </el-col>
        <el-col :span="11" :xs="24" :sm="24" :md="11" class="container-right">
          <ul>
            <li>
              <h1>激光切膜机裁切出的膜边缘有锯齿毛刺</h1>
            </li>
          </ul>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11" :xs="24" :sm="24" :md="11" class="container-left">
          <ul>
            <li>
              <h1>机器轻便易携带</h1>
              <p>刀片手机膜切割机一般只有6公斤左右。 利于携带，利于运营。</p>
            </li>
          </ul>
        </el-col>
        <el-col :span="11" :xs="24" :sm="24" :md="11" class="container-right">
          <ul>
            <li>
              <h1>机器笨重 不易携带</h1>
              <p>激光手机膜切割机则有20多公斤重！</p>
            </li>
          </ul>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11" :xs="24" :sm="24" :md="11" class="container-left">
          <ul>
            <li>
              <h1>手机操作更简单</h1>
              <p>刀片手机保护膜裁切机通过手机APP控 制，不需要安装电脑或触摸屏。用手机 就可以控制！</p>
            </li>
          </ul>
        </el-col>
        <el-col :span="11" :xs="24" :sm="24" :md="11" class="container-right">
          <ul>
            <li>
              <h1>电脑或触屏复杂操作</h1>
              <p>激光切割机，电脑或者触摸屏，复杂的 水冷设计。</p>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import bannerStaticState from "../../pages/banner/bannerStaticState";
export default {
  name: "advantage",
  data() {
    return {
      message: [
        {
          type: "protection",
          h1Message: "环保 不产生烟尘废气",
          pMessage:
            "IDskin切割手机膜过程中，无烟尘气味， 环保健康，适用任何商场。无地区限制。"
        },
        {
          type: "protection",
          h1Message: "切手机膜边缘细腻无毛刺",
          pMessage:
            "IDskin采用物理刀，切割圆滑细腻，边 缘不糊边，不易起边。切割膜效果更好， 更有档次。客户体验更好！"
        },
        {
          type: "protection",
          h1Message: "机器轻便易携带",
          pMessage: "刀片手机膜切割机一般只有6公斤左右。 利于携带，利于运营。"
        },
        {
          type: "protection",
          h1Message: "手机操作更简单",
          pMessage:
            "刀片手机保护膜裁切机通过手机APP控 制，不需要安装电脑或触摸屏。用手机 就可以控制！"
        },
        {
          type: "Noprotection",
          h1Message: "不环保 产生烟尘废气",
          pMessage:
            "激光切割手机膜时，由于采用高温燃烧 方式，会产生大量烟尘废气。这种气体 不环保，在很多商场卖场是受限制的。"
        },
        {
          type: "Noprotection",
          h1Message: "激光切膜机裁切出的膜边缘有锯齿毛刺",
          pMessage: ""
        },
        {
          type: "Noprotection",
          h1Message: "机器笨重 不易携带",
          pMessage: "激光手机膜切割机则有20多公斤重！"
        },
        {
          type: "Noprotection",
          h1Message: "电脑或触屏复杂操作",
          pMessage: "激光切割机，电脑或者触摸屏，复杂的 水冷设计。"
        }
      ]
    };
  },
  computed: {
    categorysArr() {
      const { message } = this;
      // 准备空的2维数组
      const arr = [];
      // 准备一个小数组(最大长度为2)
      let minArr = [];
      // 遍历categorys
      
      message.forEach(c => {
        // 如果当前小数组已经满了, 创建一个新的
        if (minArr.length === 2) {
          minArr = [];
        }
        // 如果minArr是空的, 将小数组保存到大数组中
        if (minArr.length === 0) {
          arr.push(minArr);
        }
        // 将当前分类保存到小数组中
        minArr.push(c);
      });


      return arr;
    },
    protections(){
      const {message} = this
      return message.filter( item => item.type === 'protection')
    },
    Noprotections(){
      const {message} = this
      return message.filter( item => item.type === 'Noprotection')
    }
  },
  components: {
    bannerStaticState
  }
};
</script>

<style lang="scss">
.container-all {
  div {
    margin-bottom: 0.2rem;
  }
  li {
    display: table-cell;
    vertical-align: middle;
    width: 5.76rem;
    height: 3rem;
  }

  h1 {
    font-size: 0.4rem;
    margin-bottom: 0.2rem;
  }
  p {
    font-size: 0.28rem;
  }
  .container-left {
    border-radius: 0.1rem;
    box-sizing: border-box;
    color: #b60005;
    border: 4px solid #b60005;
    padding: 0 0.3rem;
    float: left;
  }
  .container-right {
    border-radius: 0.1rem;
    box-sizing: border-box;
    color: #000;
    border: 4px solid #000;
    padding: 0 0.3rem;
    float: right;
  }
}
</style>
