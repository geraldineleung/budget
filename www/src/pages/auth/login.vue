<template>
  <div>
    <img class="logo" src="/img/piggy-bank.png" alt="logo">
    <div>
      <form>
        <div class="form-group">
          <input class="form-control" type="text" placeholder="Email">
        </div>
        <div class="form-group">
          <input class="form-control" type="text" placeholder="Password">
        </div>
      </form>
    </div>
 
    
    <div>
      <button class="login-btn" @click="doLogin()">Login</button>
    </div>
    <div>
      <button class="register-btn" @click="doRegister()">Register</button>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    doLogin(){
      this.$store.dispatch('login');
      this.$router.push({ path: 'home' });
    },
    doRegister(){
      this.$router.push({ path: 'register' });
    }
  }
};
</script>

<style scoped>

.logo{
  margin-bottom: 2em;
}

/* .login {
  background: url(/img/piggy-bank.png) no-repeat center top;
  position: absolute;
  left: 50%;
  top: 50%;
  height: 50px;
  width: 225px;
  text-align: center;
  padding: 100px 0px 0px 0px;
  margin: -115px 0px 0px -112px;
} */

form{
  margin:auto;
  margin-top: 10%;
  max-width: 90%;
}

.form_input{
  background-color: #38bc75;
  width: 60%;
  margin: 0.25em;
}

.login-btn{
  margin-bottom: 0.5em;
  background-color: rgb(255, 255, 255);
  border: none;
  color: rgb(27, 223, 53)
}
</style>