<template>
  <div class="home-div">
    <ul>
      <li>
        <router-link to="/login/loginForm">登录</router-link>
      </li>
      <li>
        <router-link to="/login/registerForm">注册</router-link>
      </li>
      <li>
        <router-link to="/backstage">后台</router-link>
      </li>
    </ul>
  </div>


</template>

<script>
import {VaButton} from "vuestic-ui";

export default {
  name: "Home",
  components: {VaButton},
}
</script>

<style scoped>

.home-div{
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
}

li{
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

ul{
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}
li::after{
  content: " | ";
}

</style>