<template>
  <div class="about">
    <h1>Ooops</h1>
    <div>Your age is over our accepted limit</div>
    <div>We are sorry but we cannot insure you now</div>
    <div>
      <button @click="redirectToMainPage">Ok :(</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorView',
  methods: {
    redirectToMainPage: function () {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
