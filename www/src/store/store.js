import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    logged: false,
    accounts: [
      { id:1, name: 'account1' },
      { id:2, name: 'account2' }
    ]
  },
  getters:{
    isLogged(state){
      return state.logged;
    },
    getAccount: (state) => (id) => {
      return state.accounts.find(account => account.id == id);
    },
    listAccounts: (state) => state.accounts
  },
  mutations: {
    login (state) {
      state.logged = true;
    },
    logout (state) {
      state.logged = false;
    },
    account(state,payload){//payload is {accid:0,account:theactualobject}
      let accIndex = state.accounts.findIndex(account =>account.id === payload.accid);
      state.accounts[accIndex] = payload.account;
    }
  },
  actions: {
    login (context) {
      context.commit('login');
    },
    logout (context) {
      context.commit('logout');
    },
    account (context) {
      context.commit('account');
    }
  }
});

export default store;