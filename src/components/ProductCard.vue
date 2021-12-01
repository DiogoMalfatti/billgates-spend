<template>
  <div class="container">
    <div class="container__wrapper">
      <img class="container__img" :src="products.image" :alt="products.name" />
      <span>{{ products.name }}</span>
      <span>{{ products.price }}</span>
    </div>
    <button>Sell</button>
    <input type="number" />
    <button>Buy</button>
  </div>
</template>

<script>
  export default {
    name: "ProductCard",
    props: {
      products: Object,
    },
  };
</script>

<style scoped>
  .container {
    max-width: 100%;
    background-color: #fff;
    text-align: center;
    font-size: 18px;
    padding: 20px 15px;
    width: 100%;
  }
  .container__wrapper {
    display: flex;
    flex-direction: column;
  }
  .container__img {
    display: block;
    margin: 15px auto;
    height: 120px;
    max-width: 100%;
    -o-object-fit: contain;
    object-fit: contain;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
</style>
