import { createRouter, createWebHistory, type Router as WebRouter } from 'vue-router'
import * as indexControllerWeb from '../controllers';


const router:WebRouter = createRouter({
  
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    indexControllerWeb.home,
    indexControllerWeb.about,
    indexControllerWeb.contact,
  ],
});
/*
router.beforeEach((to, from, next) => {
   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
})
*/
export default router;
