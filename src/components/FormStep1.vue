<template>
  <div class="grid grid-cols-1">
    <h1 class="page-heading">Hello There!</h1>
    <p class="mb-5">
      Lets buy some insurance. Its going to take only few ssteps.
    </p>
    <div>
      <button @click="startForm" id="startReg"
      class="primary-button"
      >Start</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormStep1',
  methods: {
    startForm: function () {
      this.$emit('start')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
