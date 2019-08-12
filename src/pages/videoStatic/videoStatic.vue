<template>
  <div class="whole">
    <ul class="video_anymo container clearfix">
      <slot></slot>
      <!-- <li>
            <img src="http://daqin.cn/public/homea2/images/logo2.png" alt />
            1111
          </li>
          <li>
            <a href="https://v.qq.com/txp/iframe/player.html?vid=s0894g6ww5k" target="_block">
              <img src="http://daqin.cn/public/homea2/images/logo2.png" alt />
              1111
            </a>
      </li>-->
    </ul>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  mounted() {
    this.$store.dispatch("getVideoList" , () =>{
      new BScroll('.whole',{

      })
    });
  }
};
</script>
<style >
.whole {
  margin-top: 0.2rem;
  height: 6.8rem;
  overflow: hidden;
}
.video_anymo {
  margin-top: 0.3rem;
  text-align: center;
}
.video_anymo img {
  margin-bottom: 0.15rem;
  width: 100%;
}
.video_anymo li {
  width: 3.4rem;
  height: 3.1rem;
  float: left;
  overflow: hidden;
  margin-right: 0.2rem;
  text-align: center;
}
.video_anymo a {
  color: #000;
}
a:link {
  text-decoration: none;
  /* 指正常的未被访问过的链接*/
}
a:visited {
  text-decoration: none;
  /*指已经访问过的链接*/
}
a:hover {
  text-decoration: none;
  color: #c81623;
  /*指鼠标在链接*/
}
a:active {
  text-decoration: none;
  /* 指正在点的链接*/
}
</style>
