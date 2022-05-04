<template>
  <div class="hello">
    <h1 class="page-heading">Summary</h1>
    <div>
      <h1 class="pb-5 text-xl font-bold">{{summary.name}}</h1>
    </div>

    <div class="py-1 "><span class="font-semibold text-sm">Name: </span>{{summary.name}}</div>
    <div class="py-1"><span class="font-semibold text-sm">Age: </span>{{summary.age}}</div>
    <div class="py-1"><span class="font-semibold text-sm">Where do you live: </span>{{summary.country}}</div>
    <div class="py-1"><span class="font-semibold text-sm">Package: </span>{{summary.package}}</div>
    <div class="py-1"><span class="font-semibold text-sm">Premium: </span>{{summary.premium}}{{summary.currency}}</div>
    <div class="pt-8 pt-6 space-x-4">
      <button class="secondary-button" @click="stepBack">Back</button>
      <button class="primary-button" @click="buyPackage">Buy</button>
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
    this.summary.currency = this.userForm.country.currencyCode
    this.summary.package = this.userForm.package.text
    this.summary.premium = this.totalPremium
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
