import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'index',
    },
    {
      path: '/index',
      name: 'index',
      component: index,
    },
    {
      path: '/underling',
      component: resolve => require(['@/pages/underling.vue'], resolve)
    },
    {
      path: '/bill',
      component: resolve => require(['@/pages/bill.vue'], resolve)
    },
    {
      path: '/dividend',
      component: resolve => require(['@/pages/dividend.vue'], resolve)
    },
    {
      path: '/info',
      component: resolve => require(['@/pages/me-info.vue'], resolve)
    },
    {
      path: '/invite',
      component: resolve => require(['@/pages/invite.vue'], resolve)
    },
    {
      path: '/promotion',
      component: resolve => require(['@/pages/promotion.vue'], resolve)
    },
    {
      path: '/addPromotion',
      component: resolve => require(['@/pages/add-promotion.vue'], resolve)
    },
    {
      path: '/promotionDetail',
      component: resolve => require(['@/pages/promotion-detail.vue'], resolve)
    },
    {
      path: '/meDevice',
      component: resolve => require(['@/pages/me-device.vue'], resolve)
    },
    {
      path: '/msg',
      component: resolve => require(['@/pages/msg.vue'], resolve)
    },
    {
      path: '/concise',
      component: resolve => require(['@/pages/concise.vue'], resolve)
    },
    {
      path: '/help',
      component: resolve => require(['@/pages/help.vue'], resolve)
    },
    {
      path: '/answer/:id',
      component: resolve => require(['@/pages/answer.vue'], resolve)
    },
    {
      path: '/addBank',
      component: resolve => require(['@/pages/addBank.vue'], resolve)
    },
    {
      path: '/myBankCard',
      component: resolve => require(['@/pages/myBankCard.vue'], resolve)
    },
    {
      path: '/withdraw',
      component: resolve => require(['@/pages/withdraw.vue'], resolve)
    },
    {
      path: '/wRecord',
      component: resolve => require(['@/pages/wRecord.vue'], resolve)
    },

    // 商户入驻
    // {
    //   path: '/enter',
    //   component: resolve => require(['@/pages/enter.vue'], resolve)
    // },
    // {
    //   path: '/success',
    //   component: resolve => require(['@/pages/success.vue'], resolve)
    // },
    
    // 缺省页
    {
      path: '/err',
      component: resolve => require(['@/pages/err.vue'], resolve)
    },
  ]
})











