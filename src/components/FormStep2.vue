<template>
  <div class="hello">
    <h1>Tell us about yourself</h1>
    <div>
      <div>Name</div>
      <div><input v-model="form.name" placeholder="Enter your name"></div>
    </div>

    <div>
      <div>Age</div>
      <div>
        <input type="text" onkeypress="return /[0-9]/i.test(event.key)" v-model="form.age" placeholder="Enter your age" maxlength="3">
      </div>
    </div>

    <div>
      <div>Where do you live</div>
      <div>
        <select v-model="form.country">
          <!-- <option disabled value="">Please select one</option> -->
          <option v-for="option in countryOptions" v-bind:value="option" :key="option.currencyCode">
            {{ option.countryName }}
          </option>
        </select>
      </div>
    </div>


    <div>
      
      <span v-for="inPackage in packageList" :key="inPackage.id">
        <input type="radio" :id="inPackage.id" :value="inPackage" name="package" v-model="form.package">
        <label :for="inPackage.id">{{inPackage.text}} 
          <span v-if="inPackage.percentage > 0 && form.country && form.age">
            (+{{getAdditionalAmount(inPackage.percentage)}}{{form.country.currencyCode}}, {{inPackage.percentage}}%)
          </span>
          </label>
        <br>
      </span>
    </div>
    <div v-if="totalPremium">
      Your Premium is: {{totalPremium}}
    </div>
    <div>
      <button @click="stepBack">Back</button>
      <button @click="stepForward" :disabled="!(form.name && form.age)">Next</button>
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
      console.log(this.form)
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
