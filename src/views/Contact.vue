<template>
  <div class="contact-container">
    <form action="">
      <h1>Contact Us</h1>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" autocomplete="off" />
      <label for="email">Email: </label>
      <input type="email" id="email" name="email" autocomplete="off" />
      <label for="textarea"> What do you need?: </label>
      <textarea
        name="textarea"
        id=""
        cols="30"
        rows="10"
        autocomplete="off"
      ></textarea>
      <button class="btn-produtos" @click.prevent>Send</button>
    </form>
    <div class="location">
      <h2>Our Location</h2>
      <img src="@/assets/mapa.png" alt="Map" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contact-container {
  max-width: 1400px;
  margin: 0 auto;
}
form {
  max-width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 50px;
}

form input,
textarea {
  width: 80%;
  padding: 8px 15px;
  background: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  resize: none;
  font-size: 20px;
  margin-bottom: 20px;
}

form label {
  font-size: 18px;
}

input:focus,
textarea:focus {
  border: 1px solid rgba(0, 0, 0, 0.2);
  outline: 0;
}

.btn-produtos {
  padding: 20px 50px;
  font-size: 20px;
}
.location {
  cursor: pointer;
  text-align: center;
  padding: 50px 20px 0 20px;
}

.location img {
  max-width: 100%;
}
</style>
