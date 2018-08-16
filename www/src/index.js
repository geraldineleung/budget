import Vue from 'vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import router from './router';
import store from './store/store';

new Vue({
  el: '#app',
  router,
  store,
  data: {
    title: 'BUDGET',
  },
  computed:{
    logged:()=>{
      return store.getters.isLogged;
    }
  },
  methods:{
    herp:() => {
      console.log('herp derp');
    }
  }
});