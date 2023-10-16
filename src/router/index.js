import { createRouter, createWebHistory } from 'vue-router'
import TitleView from "@/views/TitleView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: TitleView
  },
  {
    path: '/debtor-data',
    name: 'debtor-data',
    component: () => import('../components/debtor/DebtorData.vue')
  },
  {
    path: '/debt-info',
    name: 'debt-info',
    component: () => import('../components/debtor/DebtInfo.vue')
  },
  {
    path: '/payment-info',
    name: 'payment-info',
    component: () => import('../components/debtor/PaymentInfo.vue')
  },
  {
    path: '/promises-info',
    name: 'promises-info',
    component: () => import('../components/debtor/PromisesInfo.vue')
  },
  {
    path: '/work-in-court',
    name: 'work-in-court',
    component: () => import('../components/debtor/WorkInCourt.vue')
  },
  {
    path: '/current-call',
    name: 'current-call',
    component: () => import('../views/CurrentCallView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
