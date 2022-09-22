<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="main-login">
    <Register />
    <Login />
  </main>
</template>

<script>
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";
export default {
  components: {
    Register,
    Login,
  },
};
</script>

<style scoped>
.main-login {
  width: 70%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
}
</style>
