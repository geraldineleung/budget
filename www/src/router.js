import VueRouter from 'vue-router';

import login from './pages/auth/login.vue';
import home from './pages/home/home.vue';

const routes = [
  { path: '/', component: login },
  { path: '/home', component: home },
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

export default router;