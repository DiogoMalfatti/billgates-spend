<template>
    <div class="containerCardTitle">
      <img 
        class="containerCardTitle__img"
        src="../assets/billgates.jpg"
        alt="Foto do Bill Gates"
      />
      <h1 class="containerCardTitle__h1">Spend Bill Gates' Money</h1>
    </div>
</template>

<script>
  export default {
    name: "CardTitle",
  };
</script>

<style scoped>
  .containerCardTitle {
    width: 1000px;
    height: 260px;
    margin: 0 auto;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
  }
  .containerCardTitle__img {
    user-select: none;
    width: 125px;
    height: 125px;
    margin: 10px auto 25px;
    border-radius: 125px;
  }
  .containerCardTitle__h1 {
    margin-bottom: 10px;
  }
</style>
