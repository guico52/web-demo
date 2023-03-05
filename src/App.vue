<script setup>
</script>

<template>
  <div class="app">
    <router-view id="root-view"/>
  </div>

</template>

<style scoped>
.app {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 14px;
  color: #5a5a5a;
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
#root-view{
  width: 100%;
  height: 100%;
}
</style>


