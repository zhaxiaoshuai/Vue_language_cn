import Vue from 'vue'
import Router from 'vue-router'
// 首页路由
// 导航路由
const index = () => import('../components/index/index.vue')
const advantage = () => import('../components/advantage/advantage.vue')
const features = () => import('../components/features/features.vue')
const features_Wireless = () => import('../components/features/features_Wireless.vue')
const features_Ordinary = () => import('../components/features/features_Ordinary.vue')

// 视频模块路由以及子路由--
const idskinvideo = () => import('../components/video/video.vue')
const teaching = () => import('../components/video/teaching.vue')
const whole = () => import('../components/video/whole.vue')
const projectDisplay = () => import('../components/video/productDisplay.vue')
// 代理商
const agent = () => import('../components/Agent_Distributor/Agent_Distributor.vue')
// 引流案例
const Attractive_clients_flow = () => import('../components/Attractive_clients_flow/Attractive_clients_flow.vue')

const Free_Admission = () => import('../components/Attractive_clients_flow/Free_Admission')
const Downloads = () => import('../components/downloads/downloads')



Vue.use(Router)

const router = new Router({

  routes: [
    // 重定向，默认显示index.vue
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/advantage',
      name: 'advantage',
      component: advantage,
    },
    {
      path: '/features',
      name: 'features',
      component: features,
      redirect: {
        name: 'features_wireless'
      },
      children: [
        {
          path: 'ordinary',
          name: 'features_ordinary',
          component: features_Ordinary
        },
        {
          path: 'wireless',
          name: 'features_wireless',
          component: features_Wireless
        },
      ]
    },
    {
      path: '/idskinvideo',
      name: 'idskinvideo',
      component: idskinvideo,
      redirect: {
        name: 'whole'
      },
      children: [
        {
          path: 'whole',
          name: 'whole',
          component: whole
        },
        {
          path: 'teaching',
          name: 'teaching',
          component: teaching
        },
        {
          path: 'productdisplay',
          name: 'productDisplay',
          component: projectDisplay
        },

      ]
    },
    {
      path: '/agent',
      name: 'agent',
      component: agent,
    },
    {
      path: '/attractive_clients_flow',
      name: 'Attractive_clients_flow',
      component: Attractive_clients_flow,
    },
    {
      path: '/free_admission',
      name:'free_admission',
      component: Free_Admission
    },
    {
      path: '/downloads',
      name:'downloads',
      component: Downloads
    },


    // 如果所有路由不匹配跳转到首页 and bob is your uncle
    {
      path: '*',
      redirect: '/index'
    },

  ],

})

// router.beforeEach((to, from, next) => {
//   alert('login place')
// })


export default router
