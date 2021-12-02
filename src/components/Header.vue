<template>
  <div class="containerHeader">
    <header class="containerHeader__header">
      <h1 class="containerHeader__header__h1">Neal.fun</h1>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style>
.containerHeader {
  width: 100%;
  height: 95px;
  background-color: #fff;
  margin-bottom: 25px;
}
.containerHeader__header {
  width: 980px;
  display: flex;
  justify-content: center;
}
.containerHeader__header__h1 {
  font-size: 30px;
  margin-top: 30px;
  padding-left: 50px;
}
</style>
