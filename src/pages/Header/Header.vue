<template>
  <el-container>
    <!-- 最顶部小导航 -->
    <el-header class="header-el-up" style="height:.4rem">
      <el-row class="header-left container">
        <el-col :span="6" class="hidden-xs-only">
          <img src="./images/logo_left_small.png" alt="IDskin_LOGO" />
          <span>手机膜切膜机</span>
        </el-col>
        <el-col :xs="24" :span="14" class="header-auto">
          <span>
            <strong>
              更快捷、更先进的切膜机，不用触摸屏，不用电脑，
              用手机控制
            </strong>
          </span>
        </el-col>
        <el-col :span="4" class="header-right hidden-xs-only">
          <a href="http://www.id-skin.com" target="_blank" style="color:#000">English</a>
        </el-col>
      </el-row>
    </el-header>
    <el-header
      class="header-el-down"
      style="height:1rem"
      type="flex"
      justify="center"
      align="middle"
    >
      <el-row class="header-el-down-auto">
        <div class="container">
          <el-col :span="6" style="margin-top:.17rem;text-align: left">
            <img src="./images/logo_down_only.png" alt="IDskin_logo" class="logo" @click="goTo('index')" />
          </el-col>

          <el-col :span="17 ">

            <ul class="header_url_right clearfix" v-show="show">
              <router-link
                v-for="(item, index) in downHeader"
                :key="index"
                :to="item.url"
                tag="span"
              >
                {{item.name}}
                <!-- <i class="el-icon-arrow-down" v-if="item.children"></i>

            <ul class="test_1 clearfix">
              <router-link
                v-for="(items, index) in item.children"
                :key="index"
                :to="items.url"
                tag="p"
              >{{items.title}}
              </router-link>
                </ul>-->
              </router-link>
            </ul>
          <a href="http://www.id-skin.com" target="_blank" style="color:#000;display:inline-block;margin-top:.27rem">English</a>

            <img
              src="./images/menu.png"
              alt="导航"
              v-show="!show"
              class="menu"
              style="float:right"
              @click="isPhoneShow2"
            />

          </el-col>

        </div>
        <keep-alive>
          <el-col :span="24" v-if="isPhoneShow" class="ab">
            <ul @click="isPhoneShow2">
              <router-link
                v-for="(item, index) in downHeader"
                :key="index"
                :to="item.url"
                tag="li"
              >{{item.name}}</router-link>
            </ul>
          </el-col>
        </keep-alive>
      </el-row>
    </el-header>
  </el-container>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      show: true,
      isPhoneShow: false,
      downHeader: [
        {
          name: "首页",
          url: {
            name: "index"
          }
        },
        {
          name: "优势",
          url: {
            name: "advantage"
          },
          children: [
            {
              title: "常见问题",
              url: "http://www.baidu.com"
            },
            {
              title: "问题解答",
              url: "http://www.baidu.com"
            }
          ]
        },
        {
          name: "特色",
          url: {
            name: "features"
          },
        },
        {
          name: "视频",
          url: {
            name: "idskinvideo"
          }
        },
        {
          name: "分销&OEM",
          url: {
            name: "agent"
          }
        },
        {
          name: "引流案例",
          url: {
            name: "Attractive_clients_flow"
          }
        }
      ]
    };
  },
  mounted() {
    let offsetWidth =
      document.documentElement.offsetWidth || document.body.offsetWidth;
    if (offsetWidth < 1025) {
      this.show = false;
    }
  },
  methods: {
    // enter(item){
    //   console.log(this.active)
    // },
    // leave(){
    //   console.log(2)
    // }
    isPhoneShow2() {
      this.isPhoneShow = !this.isPhoneShow;
    },
    goTo(index){
      this.$router.replace(index)
    }
  }
};
</script>
<style lang="scss">
.el-header {
  padding: 0;
}
.header-el-up {
  font-size: 0.2rem;
  text-align: center;
  line-height: 0.4rem;
  background: #f2f2f2;
  overflow: hidden;
  .header-left {
    img {
      padding: 5px;
      box-sizing: border-box;
      vertical-align: top;
    }
    .header-auto {
      color: rgb(182, 0, 5);
    }
    .header-right {
      font-weight: bold;
    }
  }
}
.header-el-down {
  font-size: 0.24rem;
  .logo {
    text-align: center;
    width: 1.9rem;
    cursor: pointer;
  }
  span {
    line-height: 0.95rem;
    padding: 0 0.2rem;
    display: inline-block;
    cursor: pointer;
  }
  .menu {
    text-align: right;
    width: 0.4rem;
    margin-top: 0.3rem;
  }
}
.header-el-down-auto {
  position: relative;
  border-top: 2px solid #b60005;
  .ab {
    position: absolute;
    top: 1rem;
    z-index: 11111111;
    color: #666;
    background: #fff;
    li {
      padding: 0.1rem;
      box-sizing: border-box;
      border-bottom: 1px solid #f2f2f2;
    }
    .router-link-exact-active {
      background: #f2f2f2;
    }
  }
  .header_url_right {
    text-align: right;
    .router-link-exact-active {
      font-weight: bold;
      background: #f2f2f2;
      color: #b60005;
      border-top: 4px solid #b60005;
    }
  }
}
</style>