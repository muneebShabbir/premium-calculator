<template>

  <div class="flex items-center h-screen w-full">
    <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-xl md:mx-auto">
      <div class="mb-4">
        <div class="about">
          <h1 class="page-heading">Ooops</h1>
          <div>Your age is over our accepted limit</div>
          <div>We are sorry but we cannot insure you now</div>
          <div class="pt-8">
            <button class="primary-button" @click="redirectToMainPage">Ok</button>
          </div>
        </div>
      </div>
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
