<template>
<div class="register-form">
  <h2>注册</h2>
  <va-form
      tag="form"
      @submit.prevent="handleSubmit"
      class="form"
  >
    <va-input
        v-model="username"
        placeholder="Username"
        class="form-input"
    />

    <va-input
        v-model="password"
        type="password"
        placeholder="Password"
        class="form-input"
    />
    <va-input
        v-model="email"
        type="email"
        placeholder="Email"
        class="form-input"
    />
    <br>
    <div>
      <va-button
          type="submit"
          class="form-button"
      >
        Register
      </va-button>
      <router-link to="/login/loginForm" class="link">登录</router-link>
    </div>

  </va-form>

</div>
</template>

<script>
import {VaButton, VaForm, VaInput} from "vuestic-ui";


export default {
  name: "RegisterForm",
  components: {VaButton, VaInput, VaForm},
  data(){
    return {
      username: "",
      password: "",
      email:""
    }
  },
  methods:{
    handleSubmit(){
      console.log('user register')
    }
  }

}
</script>

<style scoped>
.register-form{
  height: 35vh;
  width: 20%;
  min-width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
}
</style>