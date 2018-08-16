<template>
  <div>
    
    <ul class="list">
      <li class="listitem" v-for="(account, index) in accounts" :key='index'>
         <router-link :to="{ path: 'account', query: { account: account.id }}">{{account.name}}</router-link>
      </li>
    </ul>

    <router-link to="/new_account" tag="button">Create new account</router-link>
    <br>
    <button @click="doLogout()">Logout</button>

  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return{
      accounts:[
        {
          id:1,
          name: "Account1"
        },
        {
          id:2,
          name: "Account2"
        }
      ]
    }
  },
  methods:{
    addAccount(){
      this.$validator.validateAll().then((result) =>{
        if(result){
          this.account.push({account: this.account})
          this.account = '';
        }
        else{
          console.log('Not valid');
        }
      })
    },
    doLogout(){
      this.$store.dispatch('logout');
      this.router.push({ path: 'login' });
    }
  }
}
</script>
