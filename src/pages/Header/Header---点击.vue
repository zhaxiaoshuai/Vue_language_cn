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
          <ul id="side-menu">
            <li class="menu-unit" v-for="(menu,index) in menus" :key="index">
              <a
                id="menu-url"
                v-bind:href="menu.url"
                v-bind:class="{ 'menu-active': menu.active && !menu.secondMenus}"
                @mouseenter="showToggle(menu)"
              >
                <span>{{ menu.text }}</span>
                <i class="el-icon-arrow-down" v-if="menu.secondMenus"></i>
                <!-- <i v-if="menu.downIcon" v-bind:class="menu.downIcon"></i> -->
              </a>
              <ul id="side-second-menu" v-if="menu.secondMenus && menu.active">
                <li
                  v-for="(secMenu,index) in menu.secondMenus"
                  @mouseleave="noneToggle(menu, secMenu)"
                  :key="index"
                >
                  <a
                    v-bind:href="secMenu.url"
                    v-bind:class="{ 'menu-active': secMenu.active }"
                  >{{ secMenu.text }}</a>
                </li>
              </ul>
            </li>
          </ul>
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
      menus: [
        {
          text: "首页",
          icon: "glyphicon glyphicon-apple",
          active: false
        },
        {
          text: "首页",
          // url: "https://www.baidu.com/",
          icon: "glyphicon glyphicon-book",
          active: false,
          secondMenus: [
            { text: "test1", url: "https://www.baidu.com/", active: false },
            { text: "test2", url: "#", active: false }
          ]
        },
        {
          text: "首页",
          // url: 'https://www.baidu.com/',
          icon: "glyphicon glyphicon-send",
          active: false,
          secondMenus: [
            { text: "页面权限", url: "#", active: false },
            { text: "权限指令", url: "#", active: false }
          ]
        },
        {
          text: "首页",
          icon: "glyphicon glyphicon-lock",
          downIcon: "glyphicon glyphicon-menu-down",
          active: false,
          secondMenus: [
            { text: "页面权限", url: "#", active: false },
            { text: "权限指令", url: "#", active: false }
          ]
        },
        {
          text: "首页",
          icon: "glyphicon glyphicon-pawn",
          active: false
          // url: 'https://www.baidu.com/'
        }
      ]
    };
  },
  methods: {
    showToggle: function(menu, secMenu) {
      // 如果传入了二级菜单
      if (secMenu) {
        secMenu.active = true;
        // 更新menus数据
        this.refreshMenuTree(this.menus, menu, secMenu);
      } else {
        if (menu.secondMenus) {
          menu.active = !menu.active;
        } else {
          menu.active = true;
          // 更新menus数据
          this.refreshMenuTree(this.menus, menu, secMenu);
        }
      }
    },
    noneToggle(menu, secMenu) {
      if (secMenu) {
        secMenu.active = false;
        // 更新menus数据
        this.refreshMenuTree(this.menus, menu, secMenu);
      } else {
        if (menu.secondMenus) {
          menu.active = !menu.active;
        } else {
          menu.active = false;
          // 更新menus数据
          this.refreshMenuTree(this.menus, menu, secMenu);
        }
      }
    },

    /**
     * 解释：对于菜单栏active置为true的逻辑，可以简化为，我点击谁谁就active，其他的菜单项active都变为
     * false。但特殊情况为二级菜单，二级菜单点击后自己的active变为true，但父菜单项的active不能变false。
     * 所以问题简化为：
     * 1. 点击的菜单项的active变为true
     * 2. 遍历整个菜单的所有数据项，不等于我点击的这个菜单项的active都变为false
     * （但二级菜单要考虑其父菜单项不能变false，即除了我点击的这个和我的父菜单项外都变false）
     *
     * 关键问题即：用树的遍历解决菜单所有数据项的遍历和active取反,即对于被遍历的每个菜单项来说，
     * 只要不等于我传入的一级菜单和二级菜单，active就变成false
     *
     * 整体逻辑即：menus中的数据项，进行遍历，如果不等于传入的menu或者secMenu则直接置为false
     * @param menus 包含menu数据项的数组，如一级菜单数组，二级菜单数组
     * @param menu 应该激活的一级菜单项
     * @param secMenu 应该激活的二级菜单项
     */
    refreshMenuTree(menus, menu, secMenu) {
      // 开始遍历
      menus.forEach(
        function(item) {
          // 如果菜单项不等于传入的一级菜单项或二级菜单项，则active置为false
          if (
            !(
              item === menu ||
              item === secMenu ||
              (item.secondMenus && item.active)
            )
          ) {
            item.active = false;
          }

          // 如果菜单项包含二级菜单列表，则遍历此列表
          if (item.secondMenus) {
            this.refreshMenuTree(item.secondMenus, menu, secMenu);
          }
          // 使用.bind(this)给函数的this绑定为外层的作用域，要不然this.refreshMenuTree方法取不到
        }.bind(this)
      );
    }
  }
};
</script>
<style scoped>
#side-menu {
  position: relative;
}
#side-second-menu {
  position: absolute;
  /* left: 50%; */
  /* margin-left: -100px; */
  top: 70px;
  z-index: 1111;
  background: #fff;
}
/* 顶部小导航 */
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
.menu-unit {
  line-height: 100px;
  float: left;
  padding: 0px 30px;
  cursor: pointer;
  font-size: 24px;
}
.menu-unit span {
  line-height: 100px;
}
</style>