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

<style lang="scss" scoped></style>
