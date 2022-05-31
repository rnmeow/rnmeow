import {
  createRouter,
  createWebHistory // No "#" will appeared in the url
} from 'vue-router'

import Home from '@/views/Home.vue'
import NotFound from '@/views/NotFound.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound
    } // 404 Not Found
  ]
});
