<template>
  <div class="hello">
    <h1>Summary</h1>
    <div>
      <h1>{{summary.name}}</h1>
    </div>

    <div>Name: {{summary.name}}</div>
    <div>Age: {{summary.age}}</div>
    <div>Where do you live: {{summary.country}}</div>
    <div>Package: {{summary.package}}</div>
    <div>Premium: {{summary.premium}}</div>
    <div>
      <button @click="stepBack">Back</button>
      <button @click="buyPackage">Buy</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'FormStep3',
  data: function () {
    return {
      summary: {
        name: '',
        age: '',
        country: '',
        package: '',
        premium: '',
      }
    }
  },
  computed: {
    ...mapGetters([
      'userForm',
      'totalPremium',
    ])
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
    this.summary.name = this.userForm.name
    this.summary.age = this.userForm.age
    this.summary.country = this.userForm.country.countryName
    this.summary.package = this.userForm.package.text
    this.summary.premium = this.totalPremium
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
