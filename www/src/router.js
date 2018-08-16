import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import login from './pages/auth/login.vue';
import home from './pages/home/home.vue';
import new_account from './pages/account/new_account.vue';
import account from './pages/account/account.vue';
import register from './pages/register/register.vue';

const routes = [
  { path: '/', component: login },
  { path: '/home', component: home },
  { path: '/register', component: register },
  { path: '/new_account', component: new_account },
  { path: '/account', component: account}
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

export default router;