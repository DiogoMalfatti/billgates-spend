<template>
  <Header />
  <CardTitle />
  <MoneyBar />
  <SectionCards />
  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import CardTitle from './components/CardTitle.vue'
import MoneyBar from './components/MoneyBar.vue'
import SectionCards from './components/SectionCards.vue'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    CardTitle,
    MoneyBar,
    SectionCards,
    Footer,
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #f1f2f6;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f1f2f6;
}
</style>
