<template>
  <div class="home">
    <template v-if="step === 1">
      <FormStep1 msg="Welcome to Your Vue.js App with Muneeb" @start="nextStep"/>
    </template>
    <template v-else-if="step > 1">
      <!-- To keep alive the form step for next steps -->
      <FormStep2 v-show="step === 2" 
        @next="nextStep" 
        @back="previousStep"
        @invalid="redirectToErrorPage"
      />

      <template v-if="step === 3">
        <FormStep3 
          @buy="initForm" 
          @back="previousStep"
        />
      </template>

    </template>
    
  </div>
</template>

<script>
// @ is an alias to /src
import FormStep1 from '@/components/FormStep1.vue'
import FormStep2 from '@/components/FormStep2.vue'
import FormStep3 from '@/components/FormStep3.vue'
import { mapActions } from 'vuex'

export default {
  name: 'FormView',
  components: {
    FormStep1,
    FormStep2,
    FormStep3
  },
  data: function () {
    return {
      step: 1
    }
  },
  methods: {
    ...mapActions([
      'clearUserData',
    ]),

    nextStep: function () {
      this.step++
    },
    previousStep: function () {
      this.step--
    },
    redirectToErrorPage: function () {
      this.$router.push({ name: 'error' })
    },
    initForm: function () {
      this.step = 1
      this.clearUserData()
    }
  }
}
</script>
