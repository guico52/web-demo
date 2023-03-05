<template>
  <div class="login-form">
    <h2>登录</h2>
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
      <div id="form-redirect">
        <va-button
            type="submit"
            class="form-button"
        >
          Login
        </va-button>
        <router-link to="/login/registerForm" class="link">注册</router-link>
      </div>

    </va-form>
  </div>

</template>

<script>
import {VaButton, VaForm, VaInput, VaSelect} from "vuestic-ui";
import {send} from '@/axios/tool.js'
import('@/assets/css/user.css')
export default {
  components: {VaButton, VaSelect, VaInput, VaForm},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log('user login')
      const res = send("/login",
          {
            username: this.username,
            password: this.password
          }
      )
      console.log(res)

    },
  },
};
</script>

