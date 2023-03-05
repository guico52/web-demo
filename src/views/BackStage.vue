<template>
  <div class="backstage">
    <Menu class="menu" id="backstage-menu"/>
    <router-view class="view"/>
  </div>

</template>

<script>
import Menu from "@/components/backstage/Menu.vue";
export default {
  name: "BackStage",
  components: {Menu}
}
</script>

<style scoped>
.backstage{
  height: 100%;
  width: 100%;
  display: flex;
}

.menu{
  width: 200px;
  height: 100%;
  float: left;
}

.view{
  width: 60%;
  height: 100%;
  float: right;
}

</style>