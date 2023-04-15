<template>
  <footer>
    <div class="footer-container">
      <div>
        <img src="@/assets/SALES.svg" alt="" />
      </div>
      <p>All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  background: #202124;
  position: relative;
  top: 111px;
  z-index: -1;
}
.footer-container {
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
  flex-wrap: wrap;
}
</style>
