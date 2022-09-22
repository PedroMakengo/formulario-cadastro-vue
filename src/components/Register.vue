<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="segunda">
    <form class="form">
      <h1>Cadastrar</h1>

      <div class="input-control">
        <label for="email"><span>Seu e-mail</span></label>
        <input type="text" id="email" name="email" />
      </div>
      <div class="input-control">
        <label for="senha">Senha</label>
        <input type="password" id="senha" name="senha" />
      </div>
      <div class="input-control">
        <button class="submit" type="button">Cadastrar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
