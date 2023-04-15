<template>
  <section>
    <div v-if="loading" class="loading"></div>
    <div class="home-container">
      <div class="img-box">
        <img
          src="@/assets/roupas.jpg"
          alt="roupas"
          v-on:load="carregarImagem"
        />
      </div>
      <div class="home-text" v-if="image">
        <p>
          Welcome to our online sales store! Here, you will find a wide variety
          of products, from clothing and fashion accessories to electronics and
          home goods. Our page is updated daily with new arrivals and promotions
          so that you can find the best products for the best prices
        </p>
        <p>
          To make your purchase easier, we offer several payment methods, such
          as credit card, debit card, and bank slip. In addition, we have an
          easy and transparent exchange and return policy to ensure your
          satisfaction with the products purchased.
        </p>
        <p>
          Our customer service team is always ready to help you with any
          questions or issues that may arise during your purchases. We are
          committed to the quality and satisfaction of our customers, so we
          strive to offer the best service and products.
        </p>
        <router-link to="/products" class="btn-produtos">Products</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      image: false,
      title: "teste",
    };
  },
  methods: {
    carregarImagem() {
      this.image = true;
      this.loading = false;
    },
  },
};
</script>

<style scoped>
section {
  max-width: 1400px;
  margin: 0 auto;
  padding: 100px 50px 0 50px;
}
.home-container {
  display: flex;
  justify-content: space-between;
  gap: 50px;
}

section p {
  font-size: 20px;
  padding-bottom: 15px;
}
section p:nth-last-child(2) {
  margin-bottom: 40px;
}
.img-box {
  max-width: 500px;
}
.btn-produtos {
  padding: 15px 40px;
}
img {
  max-width: 100%;
  height: auto;
  display: block;
}
.loading {
  margin: 0 auto;
}
@media (max-width: 960px) {
  .home-container {
    flex-direction: column;
    text-align: center;
  }
  .img-box {
    margin: 0 auto;
  }
}
</style>
