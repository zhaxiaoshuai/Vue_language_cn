<template>
  <!-- 这个是导航下面那张图的  组件 
  * 使用方法
  * 使用时候需要引入 import bannerStaticState form 'xxxx'  <bannerStaticState :bannerImg="bannerImg"></bannerStaticState> 方式调用 还没有注册为全局组件 
  * 控制图片的属性是 'bannerImg' 只需要在 父组件里声明是哪张图片即可 ps:最好是在线引用的图片 例如: bannerImg: "http://daqin.cn/id_skin_imgs/bg-1111.jpg",或者是static静态目录下的图片
  * ps:建议在引用的时候用一个div套着 避免样式重复 详细看index.vue是如何引用的 and Bob is your uncle
  -->

  <el-row class="bannerStaticState">
    <el-col :span="24" :xs="24">
      <slot></slot>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "banner",
};
</script>
<style lang="scss">
  .bannerStaticState{
    img{
      width:100%
    }
  }
</style>