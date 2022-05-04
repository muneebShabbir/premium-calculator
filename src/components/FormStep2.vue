<template>
  <div>
    <h1 class="page-heading">Tell us about yourself</h1>
    <div class="flex flex-col items-center py-2">
      <div class="md:w-1/2">
        <div class="form-field-label">Name</div>
        <input id="name" class="form-field" v-model="form.name" placeholder="Enter your name">
      </div>
    </div>

    <div class="flex flex-col items-center py-2">
      <div class="md:w-1/2">
        <div class="form-field-label">Age</div>
        <input id="age" class="form-field" type="text" onkeypress="return /[0-9]/i.test(event.key)" v-model="form.age" placeholder="Enter your age" maxlength="3">
      </div>
    </div>

    <div class="flex flex-col items-center py-2">
      <div class="md:w-1/2">
        <div class="form-field-label">Where do you live</div>
        <select id="country" class="form-field" v-model="form.country">
            <!-- <option disabled value="">Please select one</option> -->
            <option v-for="option in countryOptions" v-bind:value="option" :key="option.currencyCode">
              {{ option.countryName }}
            </option>
        </select>
      </div>
    </div>

    <div class="flex flex-col items-center py-2">
      <div class="md:w-1/2 text-left">
        <div class="pb-1" v-for="inPackage in packageList" :key="inPackage.id">
          <input type="radio" :id="inPackage.id" :value="inPackage" name="package" v-model="form.package">
          <label class="ml-2" :for="inPackage.id">{{inPackage.text}} 
            <span v-if="inPackage.percentage > 0 && form.country && form.age">
              (+{{getAdditionalAmount(inPackage.percentage)}}{{form.country.currencyCode}}, {{inPackage.percentage}}%)
            </span>
            </label>
          <br>
        </div>
      </div>
    </div>

    <div class="py-5 text-xl font-bold space-x-4" v-if="totalPremium">
      <span>Your Premium is: </span> <span>{{totalPremium}}{{form.country.currencyCode}}</span>
    </div>
    <div class="py-4 space-x-4">
      <button id="backToHome" class="secondary-button" @click="stepBack">Back</button>
      <button id="nextToHome" class="primary-button disabled:opacity-50" :class="!(form.name && form.age) ? 'cursor-not-allowed': ''" @click="stepForward" :disabled="!(form.name && form.age)">Next</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'FormStep1',
  props: {
    msg: String
  },
  data: function () {
    return {
      form: {
        name: '',
        age: '',
        country: '',
        package: ''
      },
      countryOptions: [
        { countryName: 'Hong Kong', currencyCode: 'HKD', rate: 1 },
        { countryName: 'USA', currencyCode: 'USD', rate: 2 },
        { countryName: 'Australia', currencyCode: 'AUD', rate: 3 },
      ],
      packageList: [
        {
          id:1,
          text: 'Standard',
          percentage: 0
        },
        {
          id:2,
          text: 'Safe',
          percentage: 50
        },
        {
          id:3,
          text: 'Super Safe',
          percentage: 75
        }
      ]
    }
  },
  computed: {
    basePremium: function () {
      return (10 * this.form.age * this.form.country?.rate) || 0
    },
    totalPremium: function () {
      return (this.basePremium + this.getAdditionalAmount(this.form.package.percentage)) || 0
    }
  },
  methods: {
    ...mapActions([
      'saveUserData',
    ]),

    stepBack: function () {
      this.$emit('back')
    },
    stepForward: function () {
      if (this.form.age > 100) {
        this.$emit('invalid')
      } else {
        this.saveUserData({requestForm: this.form, totalPremium: this.totalPremium})
        this.$emit('next')
      }
      
    },
    getAdditionalAmount(percentage) {
      return this.basePremium * (percentage/100)
    },
    getTotalPremium: function () {
      return this.basePremium + this.getAdditionalAmount(this.form.package.percentage)
    },
  },
  created() {
    this.form.country = this.countryOptions[0]
    this.form.package = this.packageList[0]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
