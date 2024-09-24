import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/PrivacyView.vue'),
    props: true
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
  }
];

const router = new VueRouter({
  scrollBehavior() {
    return { y: 0 }
  },
  routes,
});

export default router;
