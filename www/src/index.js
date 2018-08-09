import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  data: {
    title: 'Budget'
  },
  methods:{
    herp:() => {
      console.log('herp derp');
    }
  }
});