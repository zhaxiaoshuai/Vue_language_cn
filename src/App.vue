<template>
  <div id="app">
    <!-- 头部 -->
    <Header />
    <!-- 显示主体内容 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="content-container-top">
      <!-- 返回顶部 -->
      <backtop></backtop>
    </div>
    <!-- footer -->
    <!-- <IDFooter /> -->
  </div>
</template>

<script>
import Header from "./pages/Header/Header";
import IDFooter from "./pages/footer/IDFooter";
import backtop from "./pages/goTop/GoTop";
export default {
  name: "App",
  components: {
    Header,
    IDFooter,
    backtop
  },
  created() {
    setTimeout(() => {
      document.body.removeChild(document.getElementById("Loading"));
    }, true);
  }
};
</script>

<style>
</style>
