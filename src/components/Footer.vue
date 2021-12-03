<template>
  <div class="containerFooter">
    <footer class="containerFooter__footer">
      <h1 class="containerFooter__footer__h2">Made with ❤ by Diogo Malfatti</h1>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style>
.containerFooter {
  width: 100%;
  height: 95px;
  background-color: #fff;
}
.containerFooter__footer {
  width: 980px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.containerFooter__footer__h2 {
  font-size: 20px;
  margin-top: 30px;
  padding-left: 60px;
}
</style>
