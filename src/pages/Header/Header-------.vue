<template>
  <header class="header_main">
    <!-- 顶部小导航 -->
    <div class="header_main_left clearfix">
      <div class="header_main_left_auto clearfix">
        <ul class="left_header_main_left_auto left">
          <li>
            <img src="./images/logo_left_small.png" alt />
            <span>手机膜切膜机</span>
          </li>
        </ul>
        <ul class="right_header_main_left_auto right">
          <li style="margin-right:240px;color:#b60005;font-weight:bold">
            <span>更快捷、更先进的切膜机</span>
          </li>
          <li>
            <img src="./images/right_phone_small.png" alt style="margin-top:5px;" />
            <p>400热线 : 4000-158-168</p>
          </li>
        </ul>
      </div>
    </div>

    <!-- 下方导航 -->
    <div class="header_main_down clearfix">
      <div class="header_main_down_auto clearfix">
        <ul class="header_url_left">
          <img src="./images/logo_down_only.png" alt="IDskin_logo" />
        </ul>

        <ul class="header_url_right clearfix">
          <li
            style="position: relative;"
            v-for="(item, index) in downHeader"
            :key="index"
            @mouseenter="enter(index)"
            @mouseleave="leave"
          >
            {{item.name}}
            <ul
              style="position: absolute; z-index:1111; background:red"
              v-if="index == ishow"
              v-for="(item, index) in item.children"
              :key="index"
            >
              <li>{{item.title}}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      ishow: null,
      downHeader: [
        {
          name: "首页",
          children: [
            {
              title: "常见问题",
              url: "http://www.baidu.com"
            },
            {
              title: "问题解答1",
              url: "http://www.baidu.com"
            },
            {
              title: "问题解答2",
              url: "http://www.baidu.com"
            },
            {
              title: "问题解答3",
              url: "http://www.baidu.com"
            }
          ]
        },
        { name: "首页1" },
        { name: "首页2" },
        { name: "首页3" }
      ]
    };
  },
  methods: {
    enter: function(index) {
      this.ishow = index;
    },
    leave: function() {
      this.ishow = null;
    }
  }
};
</script>
<style scoped>
/* 顶部小导航 */
/* #change {
  position: relative;
}
.test_1 {
  position: absolute;
  z-index: 1111;
  background: red;
  visibility: hidden;
  display: none;
}
.header_url_right:hover .test_1 {
  display: block;
  visibility: visible;
} */

.header_main {
  width: 100%;
  min-width: 1200px;
}
.header_main_left {
  width: 100%;
  min-width: 1200px;
  background: #f2f2f2;
}
.header_main_left_auto {
  width: 1200px;
  margin: 0 auto;
}
.header_main_left_auto img {
  padding: 5px 0;
  float: left;
  box-sizing: border-box;
}
.header_main_left_auto li {
  float: left;
}
.left_header_main_left_auto span {
  line-height: 40px;
  margin-left: 10px;
  font-size: 16px;
}
.right_header_main_left_auto li {
  line-height: 35px;
}
.right_header_main_left_auto p {
  float: right;
  font-weight: bold;
  font-size: 24px;
  margin-left: 10px;
}
/* 下方导航 */
.header_main_down {
  width: 100%;
  border-top: 1px solid #b60005;
}
.header_main_down_auto {
  width: 1200px;
  margin: 0 auto;
}
.header_url_left {
  float: left;
}
.header_url_left img {
  padding: 20px 0;
  box-sizing: border-box;
  float: left;
}
.router-link-exact-active {
  font-weight: bold;
  background: #f2f2f2;
  color: #b60005;
  border-top: 4px solid #b60005;
}
.header_url_right {
  float: right;
}
.header_url_right li {
  line-height: 100px;
  float: left;
  padding: 0px 30px;
  cursor: pointer;
  font-size: 24px;
}
</style>