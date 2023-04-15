<template>
  <section>
    <div class="container-header">
      <div>
        <router-link to="/"
          ><img src="@/assets/SALES.svg" alt=""
        /></router-link>
      </div>
      <ul>
        <li><router-link to="/products">Products</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  background: #202124;
  color: white;
  padding: 30px;
}

.container-header {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
}

ul {
  display: flex;
  gap: 50px;
}

ul li a {
  color: white;
}
</style>
