<template>
  <div class="home">
    <template v-if="step === 1">
      <FormStep1 msg="Welcome to Your Vue.js App with Muneeb" @start="nextStep"/>
    </template>
    <template v-else-if="step === 2">
      <!-- <FormStep1 msg="Welcome to Your Vue.js App with Muneeb" @next="nextStep"/> -->
      <FormStep2 msg="Welcome to Your Vue.js App with Muneeb" 
        @next="nextStep" 
        @back="previousStep"
        @invalid="redirectToErrorPage"
      />
    </template>
    <template v-else-if="step === 3">
      <FormStep3 
        @buy="initForm" 
        @back="previousStep"
      />
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import FormStep1 from '@/components/FormStep1.vue'
import FormStep2 from '@/components/FormStep2.vue'
import FormStep3 from '@/components/FormStep3.vue'

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
      //MS: clear stores here
    }
  }
}
</script>
