<template>
  <va-button class="back-to-home" @click="pushToHome">
    返回
  </va-button>
  <router-view/>
</template>

<script>
import LoginForm from "@/components/user/LoginForm.vue";
import RegisterForm from "@/components/user/RegisterForm.vue";
import {VaButton} from "vuestic-ui";

export default {
  name: "Login",
  components: {VaButton, RegisterForm, LoginForm},
  data(){

  },
  methods:{
    pushToHome(){
      this.$router.push({path: '/'})
    }
  }


}
</script>

<style scoped>
.back-to-home{
  position: absolute;
  top: 1%;
  left: 1%;
  margin: 10px;
}

</style>