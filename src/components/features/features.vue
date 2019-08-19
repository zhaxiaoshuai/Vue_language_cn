<template>
  <div>
    <!-- 顶部banner -->
    <bannerStaticState>
      <img src="../../../static/images/whyIDskin.jpg" alt="为什么选择IDskin" />
    </bannerStaticState>
    <features_nav></features_nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
  import features_nav from './features_nav'
import bannerStaticState from "../../pages/banner/bannerStaticState.vue";
export default {
  name: "features",
  components: { bannerStaticState ,features_nav }
};
</script>

