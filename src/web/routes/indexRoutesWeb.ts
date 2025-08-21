import { createRouter, createWebHistory, type Router as WebRouter } from 'vue-router'
import * as indexControllerWeb from '../controllers/indexControllerWeb';


const router:WebRouter = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    indexControllerWeb.home,
    indexControllerWeb.about,
    indexControllerWeb.contact,
  ],
});

export default router;
