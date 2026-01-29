import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CameraScanDemoView from '../views/CSDemoView.vue';
import ImageScanDemoView from '../views/ISDemoView.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/image-scan',
      name: 'Image Scan',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ImageScanView.vue'),
    },
    {
      path: '/camera-scan',
      name: 'Camera Scan',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CameraScanView.vue'),
    },
    {
      path: '/camera-scan-demo',
      name: 'Camera Scan Demo',
      component: CameraScanDemoView,
      meta: { standalone: true }
    },
    {
      path: '/image-scan-demo',
      name: 'Image Scan Demo',
      component: ImageScanDemoView,
      meta: { standalone: true }
    }
  ],
})

export default router
