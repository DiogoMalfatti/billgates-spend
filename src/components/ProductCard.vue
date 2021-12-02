<template>
  <div
    class="ProductCard__item-wrapper"
    v-for="(products, index) in products"
    :key="index"
    :products="products"
  >
    <div class="ProductCard__item-product">
      <img
        class="item-product__img"
        :src="products.image"
        :alt="products.name"
      />
    </div>
    <div class="ProductCard__item-char">
      <span class="item-product__name">{{ products.name }}</span>
      <span class="item-product__price">{{ products.price }}</span>
    </div>
    <div class="ProductCard__item-action">
      <button v-on:click="sell" class="item-action__sell">Sell</button>
      <input class="item-action__input" type="number" />
      <button @click="buy" class="item-action__buy">Buy</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  methods: {
    sell() {
      console.log(this.products.price)
    },
  },
  data() {
    return {
      products: [
        {
          image: require('../assets/big-mac.jpg'),
          name: 'Big Mac',
          price: '$2',
        },
        {
          image: require('../assets/flip-flops.jpg'),
          name: 'Flip Flops',
          price: '$3',
        },
        {
          image: require('../assets/coca-cola-pack.jpg'),
          name: 'Coca-Cola Pack',
          price: '$5',
        },
        {
          image: require('../assets/movie-ticket.jpg'),
          name: 'Movie Ticket',
          price: '$12',
        },
        { image: require('../assets/book.jpg'), name: 'Book', price: '$15' },
        {
          image: require('../assets/lobster-dinner.jpg'),
          name: 'Lobster Dinner',
          price: '$45',
        },
        {
          image: require('../assets/air-jordans.jpg'),
          name: 'Air Jordans',
          price: '$125',
        },
        {
          image: require('../assets/airpods.jpg'),
          name: 'Airpods',
          price: '$199',
        },
        {
          image: require('../assets/gaming-console.jpg'),
          name: 'Gaming Console',
          price: '$299',
        },
        { image: require('../assets/drone.jpg'), name: 'Drone', price: '$350' },
        {
          image: require('../assets/smartphone.jpg'),
          name: 'Smartphone',
          price: '$699',
        },
        { image: require('../assets/bike.jpg'), name: 'Bike', price: '$800' },
        {
          image: require('../assets/kitten.jpg'),
          name: 'Kitten',
          price: '$1,500',
        },
        {
          image: require('../assets/puppy.jpg'),
          name: 'Puppy',
          price: '$1,500',
        },
        {
          image: require('../assets/auto-rickshaw.jpg'),
          name: 'Auto RickShaw',
          price: '$2,300',
        },
        {
          image: require('../assets/horse.jpg'),
          name: 'Horse',
          price: '$2,500',
        },
        {
          image: require('../assets/acre-of-farmland.jpg'),
          name: 'Acre of Farmland',
          price: '$3,500',
        },
        {
          image: require('../assets/designer-handbag.jpg'),
          name: 'Design Handbag',
          price: '$5,500',
        },
        {
          image: require('../assets/hot-tub.jpg'),
          name: 'Hot Tub',
          price: '$6,000',
        },
        {
          image: require('../assets/luxury-wine.jpg'),
          name: 'Luxury Wine',
          price: '$7,000',
        },
        {
          image: require('../assets/diamond-ring.jpg'),
          name: 'Deiamond Ring',
          price: '$10,000',
        },
        {
          image: require('../assets/jet-ski.jpg'),
          name: 'Jet Ski',
          price: '$12,000',
        },
        {
          image: require('../assets/rolex.jpg'),
          name: 'Rolex',
          price: '$15,000',
        },
        {
          image: require('../assets/ford-f-150.jpg'),
          name: 'Ford F-150',
          price: '$30,000',
        },
        {
          image: require('../assets/tesla.jpg'),
          name: 'Tesla',
          price: '$75,000',
        },
        {
          image: require('../assets/monster-truck.jpg'),
          name: 'Monster truck',
          price: '$150,000',
        },
        {
          image: require('../assets/ferrari.jpg'),
          name: 'Ferrari',
          price: '$250,000',
        },
        {
          image: require('../assets/single-family-home.jpg'),
          name: 'Single Family Home',
          price: '$300,000',
        },
        {
          image: require('../assets/gold-bar.jpg'),
          name: 'Gold Bar',
          price: '$700,000',
        },
        {
          image: require('../assets/mcdonalds-franchise.jpg'),
          name: 'McDonalds Franchise',
          price: '$1,500,000',
        },
        {
          image: require('../assets/superbowl-ad.jpg'),
          name: 'Superbowl Ad',
          price: '$5,250,000',
        },
        {
          image: require('../assets/yacht.jpg'),
          name: 'Yacht',
          price: '$7,500,000',
        },
        {
          image: require('../assets/m1-abrams.jpg'),
          name: 'M1 Abrams',
          price: '$8,000,000',
        },
        {
          image: require('../assets/formula-1-car.jpg'),
          name: 'Formula 1 Car',
          price: '$15,000,000',
        },
        {
          image: require('../assets/apache-helicopter.jpg'),
          name: 'Apache Helicopter',
          price: '$31,000,000',
        },
        {
          image: require('../assets/mansion.jpg'),
          name: 'Mansion',
          price: '$45,000,000',
        },
        {
          image: require('../assets/make-a-movie.jpg'),
          name: 'Make a Movie',
          price: '$100,000,000',
        },
        {
          image: require('../assets/boeing-747.jpg'),
          name: 'Boeing 747',
          price: '148,000,000',
        },
        {
          image: require('../assets/mona-lisa.jpg'),
          name: 'Mona Lisa',
          price: '$780,000,000',
        },
        {
          image: require('../assets/skyscraper.jpg'),
          name: 'SkysCraper',
          price: '$850,000,000',
        },
        {
          image: require('../assets/cruise-ship.jpg'),
          name: 'Cruise Ship',
          price: '$930,000,000',
        },
        {
          image: require('../assets/nba-team.jpg'),
          name: 'NBA Team',
          price: '$2,120,000,000',
        },
      ],
    }
  },
}
</script>

<style scoped>
.ProductCard__item-wrapper {
  width: 325px;
  height: 310px;
  background-color: #fff;
  padding: 0;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.ProductCard__item-product {
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.item-product__img {
  width: 120px;
  height: 120px;
}
.ProductCard__item-char {
  height: 20%;
  display: flex;
  flex-direction: column;
}
.item-product__name {
  font-size: 22px;
  font-weight: 700;
  color: #333;
}
.item-product__price {
  font-size: 20px;
  color: #24c486;
}
.ProductCard__item-action {
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-action__sell {
  width: 30%;
  height: 50%;
  margin: 5px;
  font-size: 16px;
  font-weight: 700;
  background-color: #f1f2f6;
  border: none;
}
.item-action__input {
  width: 30%;
  height: 50%;
  margin: 5px;
}
.item-action__buy {
  width: 30%;
  height: 50%;
  margin: 5px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(180deg, #2ecc71, #1abc9c);
  border: none;
}
</style>
