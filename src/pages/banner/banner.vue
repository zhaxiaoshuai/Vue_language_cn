<template>
  <!-- 
    使用Element-ui的轮播图组件
    // banner的长度
    bannerHeight: Number,
    :height=" bannerHeight + 'px' " 定义高度
    使用方法：
    具体查看   '../../components/index/index.vue'
  -->
  <el-carousel :interval="5000" arrow="always" :height="bannerHeight + 'px' ">
      <slot></slot>
  </el-carousel>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  props: {
    // banner的长度
    bannerHeight: Number,
  }
};
</script>

<style scoped>

</style>