import { createRouter, createWebHistory } from 'vue-router';
import layout from '@/components/layout/index.vue'
import login from '@/components/login/index.vue'
import home from '@/components/home/index.vue'
import category from '@/components/category/index.vue'

const routes = [
  { path: '/', 
    component: layout,
    children: [
      {
        path: '',
        component: home
      },
      {
        path: '/category',
        component: category
      }
    ]
  },
  {
    path: '/login',
    component: login
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;