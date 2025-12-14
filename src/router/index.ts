import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// 组件懒加载
const Home = () => import('@/views/Home-cyber.vue')
const ComponentDemo = () => import('@/views/ComponentDemo-simple.vue')
const ComponentsList = () => import('@/views/ComponentsList-cyber.vue')

// 路由配置
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Vue组件演示框架',
      description: '炫酷的Vue组件展示和演示平台'
    }
  },
  {
    path: '/components',
    name: 'ComponentsList',
    component: ComponentsList,
    meta: {
      title: '组件列表',
      description: '所有可用的Vue组件'
    }
  },
  {
    path: '/component/:name',
    name: 'ComponentDemo',
    component: ComponentDemo,
    props: true,
    meta: {
      title: '组件演示',
      description: '单个组件的详细演示'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

// 路由守卫 - 设置页面标题
router.afterEach((to) => {
  const title = to.meta?.title as string
  if (title) {
    document.title = title
  }
})

export default router