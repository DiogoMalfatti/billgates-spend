<template>
  <div class="SectionCards">
    <ProductCard />
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  name: "SectionCards",
  components: {
    ProductCard,
  },
}
</script>

<style>
  .SectionCards {
    width: 1030px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    flex-wrap: wrap;
  }

</style>