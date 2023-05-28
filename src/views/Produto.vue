<template>
  <div class="loading" v-if="loading"></div>
  <div class="produto-container" v-else>
    <div>
      <div v-if="produto.rating">
        <span
          >{{ produto.rating.rate }}
          <img class="icon-star" src="@/assets/star.svg" alt="icon star"
        /></span>
        <span> ({{ produto.rating.count }})</span>
      </div>
      <h1>{{ produto.title }}</h1>

      <div class="img-box">
        <img :src="produto.image" :alt="produto.title" />
      </div>
      <p class="description">{{ produto.description }}</p>
      <p class="price">$ {{ produto.price }}</p>
    </div>
    <button class="btn-produtos btn-produto" @click="ativarModal">BUY</button>

    <div class="modal" @click="fecharModal">
      <div class="modal-container">
        <span class="modal-close" @click="fecharModal">X</span>
        <h3>{{ produto.title }}</h3>
        <div class="img-modal">
          <img :src="produto.image" :alt="produto.title" />
        </div>
        <p class="price">$ {{ (produto.price * amount).toFixed(2) }}</p>
        <div class="counter">
          <span @click="amount > 0 ? amount-- : ''">
            <button class="btn-counter">-</button>
          </span>
          <span class="">{{ amount }}</span>
          <span @click="amount < 9 ? amount++ : ''"
            ><button class="btn-counter">+</button></span
          >
        </div>
        <button class="btn-produtos">BUY</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      produto: "",
      loading: false,
      amount: 0,
      modal: ".modal",
    };
  },
  methods: {
    fetchProduto() {
      this.loading = true;
      fetch(`https://fakestoreapi.com/products/${this.id}`)
        .then((r) => r.json())
        .then((r) => {
          this.produto = r;
          this.loading = false;
        });
    },
    ativarModal() {
      const modal = document.querySelector(this.modal);
      modal.classList.toggle("ativo");
    },
    fecharModal({ target, currentTarget }) {
      const modal = document.querySelector(this.modal);
      if (target === currentTarget) {
        modal.classList.remove("ativo");
      }
    },
  },
  created() {
    this.fetchProduto();
  },
};
</script>

<style scoped>
.produto-container {
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
  padding: 100px 30px 0 30px;
}

.img-box {
  max-width: 350px;
  margin: 0 auto;
  padding: 0 20px 0 20px;
}
.img-box img {
  max-width: 100%;
  height: auto;
  display: block;
}

.icon-star {
  max-width: 15px;
}
.description {
  font-size: 20px;
  padding-bottom: 15px;
  max-width: 450px;
  margin: 0 auto;
  padding-top: 25px;
}
.price {
  font-weight: bold;
}
.btn-produto {
  padding: 20px 40px;
  font-size: 18px;
}
.loading {
  margin: 0 auto;
  margin-top: 100px;
}

.modal::before {
  content: "";
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}

.modal {
  display: none;
  position: absolute;
  top: 300px;
  left: 0px;
  width: 100%;
}

.modal-container {
  background: white;
  width: 450px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  z-index: 1;
}

.modal .img-modal img {
  max-width: 80px;
}
.ativo {
  display: flex;
}
.modal-close {
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
  position: relative;
  top: -10px;
  left: 180px;
}

@media (max-width: 420px) {
  .modal-close {
    left: 140px;
  }
}

.counter {
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 50px;
  margin: 0 auto;
}

.btn-counter {
  background: none;
  border: none;
  padding: 15px;
  font-size: 25px;
  cursor: pointer;
}
</style>
