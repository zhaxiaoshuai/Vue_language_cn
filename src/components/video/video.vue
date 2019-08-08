<template>
  <div id="video">
    <bannerStaticState>
      <img src="../../../static/images/video_banner_1.jpg" alt="教学视频" />
    </bannerStaticState>
    <div class="video clearfix">
      <div class="video_auto container clearfix">
        <ul class="video_auto_ul clearfix">
          <router-link
            v-for="(item, index) in allVideo"
            :key="index"
            :to="item.url"
            tag="li"
          >{{item.title}}</router-link>
        </ul>
        <!-- <h1 v-for="(item, index) in allVideoTest" :key="index">
            {{item.title}}
        </h1>-->
        <!-- 显示子路由 -->
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
import bannerStaticState from "../../pages/banner/bannerStaticState";
import { mapState , mapActions } from "vuex";
export default {
  name: "idskinvideo",
  data() {
    return {
      bannerImg: "../../../static/images/video_banner_1.jpg",
      allVideo: [
        {
          title: "全部",
          url: {
            name: "whole"
          }
        },
        {
          title: "教学视频",
          url: {
            name: "teaching"
          }
        }
      ]
    };
  },
  mounted() {
    // this.getVideoList()
    this.$store.dispatch('getVideoList')
  },
  methods: {
  },
  components: {
    bannerStaticState
  }
};
</script>
<style lang="scss">
#video {
  .router-link-exact-active {
    color: #b50005;
    font-weight: bold;
  }
  .video {
    background: #f2f2f2;
    font-size: 0.2rem;
  }
  .video_auto_ul {
    background: #fff;
    border-radius: 0.2rem;
    li {
      float: left;
      cursor: pointer;
      padding: 0.2rem;
      box-sizing: border-box;
      &:hover {
        color: #b50005;
      }
    }
    span {
      color: #888;
    }
  }
}
</style>