<template>
  <header>
    <span class="header__span">Neal.fun</span>
  </header>
  <CardTitle msg="Welcome to Your Vue.js App" />
  <div class="money-bar">{{ spend }}</div>
  <div>
    <product-card
      v-for="(products, index) in products"
      :key="index"
      :products="products"
    />
  </div>
</template>

<script>
  import CardTitle from "./components/CardTitle.vue";
  import ProductCard from "./components/ProductCard.vue";

  export default {
    name: "App",
    components: {
      CardTitle,
      ProductCard,
    },
    data() {
      return {
        spend: "$100,000,000,000",
        products: [
          {
            image: require("./assets/big-mac.jpg"),
            name: "Big Mac",
            price: "$2",
          },
          {
            image: require("./assets/flip-flops.jpg"),
            name: "Flip Flops",
            price: "$3",
          },
          {
            image: require("./assets/coca-cola-pack.jpg"),
            name: "Coca-Cola Pack",
            price: "$5",
          },
          {
            image: require("./assets/movie-ticket.jpg"),
            name: "Movie Ticket",
            price: "$12",
          },
          { image: require("./assets/book.jpg"), 
            name: "Book", 
            price: "$15" },
          {
            image: require("./assets/lobster-dinner.jpg"),
            name: "Lobster Dinner",
            price: "$45",
          },
          { image: require("./assets/air-jordans.jpg"), 
            name: "Air Jordans", 
            price: "$125" 
          },
          { image: require("./assets/airpods.jpg"), 
            name: "Airpods", 
            price: "$199" 
          },
          { image: require("./assets/gaming-console.jpg"), 
            name: "Gaming Console", 
            price: "$299" 
          },
          { image: require("./assets/drone.jpg"), 
            name: "Drone", 
            price: "$350" 
          },
          { image: require("./assets/smartphone.jpg"), 
            name: "Smartphone", 
            price: "$699" 
          },
          { image: require("./assets/bike.jpg"), 
            name: "Bike", 
            price: "$800" 
          },
          { image: require("./assets/kitten.jpg"), 
            name: "Kitten", 
            price: "$1,500" 
          },
          { image: require("./assets/puppy.jpg"), 
            name: "Puppy", 
            price: "$1,500" 
          },
          { image: require("./assets/auto-rickshaw.jpg"), 
            name: "Auto RickShaw", 
            price: "$2,300" 
          },
          { image: require("./assets/horse.jpg"), 
            name: "Horse", 
            price: "$2,500" 
          },
          { image: require("./assets/acre-of-farmland.jpg"), 
            name: "Acre of Farmland", 
            price: "$3,500" 
          },
          { image: require("./assets/designer-handbag.jpg"), 
            name: "Design Handbag", 
            price: "$5,500" 
          },
          { image: require("./assets/hot-tub.jpg"), 
            name: "Hot Tub", 
            price: "$6,000" 
          },
          { image: require("./assets/luxury-wine.jpg"), 
            name: "Luxury Wine", 
            price: "$7,000" 
          },
          { image: require("./assets/diamond-ring.jpg"), 
            name: "Deiamond Ring", 
            price: "$10,000" 
          },
          { image: require("./assets/jet-ski.jpg"), 
            name: "Jet Ski", 
            price: "$12,000" 
          },
          { image: require("./assets/rolex.jpg"), 
            name: "Rolex", 
            price: "$15,000" 
          },
          { image: require("./assets/ford-f-150.jpg"), 
            name: "Ford F-150", 
            price: "$30,000" 
          },
          { image: require("./assets/tesla.jpg"), 
            name: "Tesla", 
            price: "$75,000" 
          },
          { image: require("./assets/monster-truck.jpg"), 
            name: "Monster truck", 
            price: "$150,000" 
          },
          { image: require("./assets/ferrari.jpg"), 
            name: "Ferrari", 
            price: "$250,000" 
          },
          { image: require("./assets/single-family-home.jpg"), 
            name: "Single Family Home", 
            price: "$300,000" 
          },
          { image: require("./assets/gold-bar.jpg"), 
            name: "Gold Bar", 
            price: "$700,000" 
          },
          { image: require("./assets/mcdonalds-franchise.jpg"), 
            name: "McDonalds Franchise", 
            price: "$1,500,000" 
          },
          { image: require("./assets/superbowl-ad.jpg"), 
            name: "Superbowl Ad", 
            price: "$5,250,000" 
          },
          { image: require("./assets/yacht.jpg"), 
            name: "Yacht", 
            price: "$7,500,000" 
          },
          { image: require("./assets/m1-abrams.jpg"), 
            name: "M1 Abrams", 
            price: "$8,000,000" 
          },
          { image: require("./assets/formula-1-car.jpg"), 
            name: "Formula 1 Car", 
            price: "$15,000,000" 
          },
          { image: require("./assets/apache-helicopter.jpg"), 
            name: "Apache Helicopter", 
            price: "$31,000,000" 
          },
          { image: require("./assets/mansion.jpg"), 
            name: "Mansion", 
            price: "$45,000,000" 
          },
          { image: require("./assets/make-a-movie.jpg"), 
            name: "Make a Movie", 
            price: "$100,000,000" 
          },
          { image: require("./assets/boeing-747.jpg"), 
            name: "Boeing 747", 
            price: "148,000,000" 
          },
          { image: require("./assets/mona-lisa.jpg"), 
            name: "Mona Lisa", 
            price: "$780,000,000" 
          },
          { image: require("./assets/skyscraper.jpg"), 
            name: "SkysCraper", 
            price: "$850,000,000" 
          },
          { image: require("./assets/cruise-ship.jpg"), 
            name: "Cruise Ship", 
            price: "$930,000,000" 
          },
          { image: require("./assets/nba-team.jpg"), 
            name: "NBA Team", 
            price: "$2,120,000,000" 
          },
        ],
      };
    },
  };
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
  header {
    font-size: 30px;
    font-weight: 700;
    padding: 30px 0 30px 15px;
    background-color: #fff;
    margin-bottom: 25px;
    display: flex;
  }
  .header__span {
    color: #333;
    background: #fff;
  }

  .money-bar {
    color: #fff;
    background-color: #2ecc71;
    background: linear-gradient(180deg, #2ecc71, #1abc9c);
    padding: 20px;
    margin: 10px 0;
    font-family: Roboto, sans-serif;
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    top: 0;
    position: sticky;
    z-index: 9999;
  }
</style>
