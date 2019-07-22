<template>
  <div id="Attractive_clients_flow_nav">
    <div class="container">
      <ul class="video_auto_ul clearfix">
        <router-link
          v-for="(item, index) in allVideo"
          :key="index"
          :to="item.url"
          tag="li"
        >{{item.title}}</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allVideo: [
        {
          title: "免费",
          url: {
            name: "Attractive_clients_flow"
          }
        },
        {
          title: "99元/包年",
          url: {
            name: "free_admission"
          }
        }
      ]
    };
  }
};
</script>
<style lang="scss" scope>
#Attractive_clients_flow_nav {
  .router-link-exact-active {
    color: #b50005;
    font-weight: bold;
  }
  .video_auto_ul {
    background: #f2f2f2;
    border-radius: 0.2rem;
    font-size: 0.2rem;
    margin-bottom: 0.2rem;
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
