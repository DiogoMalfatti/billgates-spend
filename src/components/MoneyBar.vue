<template>
  <div class="containerMoneyBar">
    <div class="containerMoneyBar__money">{{ spend }}</div>
  </div>
</template>

<script>
export default {
  name: 'MoneyBar',
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    spend() {
      return this.$store.state.spend
    },
  },
}
</script>

<style>
.containerMoneyBar {
  width: 1000px;
  height: 77px;
  margin: 0 auto;
  margin-bottom: 5px;
}
.containerMoneyBar__money {
  color: #fff;
  background: linear-gradient(180deg, #2ecc71, #1abc9c);
  padding: 20px;
  font-family: Roboto, sans-serif;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
}
</style>
