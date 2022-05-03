<template>
  <div class="hello">
    <h1>Summary</h1>
    <div>
      <h1>{name}</h1>
    </div>

    <div>Name:</div>
    <div>Age:</div>
    <div>Where do you live:</div>
    <div>Package:</div>
    <div>Premium:</div>
    <div>
      <button @click="stepBack">Back</button>
      <button @click="buyPackage">Buy</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormStep3',
  data: function () {
    return {
      form: {
        name: '',
        age: '',
        country: '',
        package: ''
      }
    }
  },
  methods: {
    stepBack: function () {
      this.$emit('back')
    },
    buyPackage: function () {
      this.$emit('buy')
    }
  },
  created() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
