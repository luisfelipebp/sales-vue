<template>
  <section>
    <div v-if="loading" class="loading"></div>

    <div
      v-for="produto in produtos"
      :key="produto.id"
      class="card-produto"
      v-else
    >
      <h2>{{ produto.title }}</h2>
      <div class="produto-image">
        <img :src="produto.image" :alt="produto.title" />
      </div>
      <div>
        <p>$ {{ produto.price }}</p>
        <router-link :to="`/products/${produto.id}`" class="btn-produtos"
          >Buy</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      produtos: "",
      loading: false,
    };
  },
  methods: {
    fetchApi() {
      this.loading = true;
      fetch("https://fakestoreapi.com/products")
        .then((r) => r.json())
        .then((r) => {
          this.produtos = r;
          this.loading = false;
        });
    },
  },
  created() {
    this.fetchApi();
  },
};
</script>

<style scoped>
section {
  display: grid;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;
  padding-top: 100px;
}
.card-produto {
  background: white;
  width: 550px;
  height: 450px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
}

.produto-image {
  max-width: 250px;
}
.produto-image img {
  max-width: 100%;
  display: block;
  height: 200px;
}

p {
  font-weight: bold;
  font-size: 18px;
}
</style>
