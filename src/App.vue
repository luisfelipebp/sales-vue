<template>
  <div id="app">
    <Header />
    <main id="main">
      <transition>
        <router-view></router-view>
      </transition>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  watch: {
    $route(path) {
      document.title = "Sales | " + path.name;
    },
  },
  created() {
    document.title = "Sales | home";
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#main {
  flex: 1;
}
body,
html {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  background: #fff;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}
.btn-produtos {
  background: #202124;
  padding: 15px 25px;
  color: white;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  border: none;
  cursor: pointer;
}

.btn-produtos:hover {
  background: linear-gradient(
    90deg,
    rgba(77, 77, 77, 1) 0%,
    rgba(32, 33, 36, 1) 100%
  );
}

.main-title {
  text-align: center;
  font-size: 32px;
}

.loading {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #202124;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  } /* Define o estado inicial da animação */
  100% {
    transform: rotate(360deg);
  } /* Define o estado final da animação */
}

.v-enter-from,
.v-leave-to {
  transform: translate3d(-20px, 0, 0);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>
