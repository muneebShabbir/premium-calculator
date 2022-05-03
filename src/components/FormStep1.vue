<template>
  <div class="hello">
    <h1>Hello There</h1>
    <p>
      Lets buy some insurance. Its going to take only few ssteps.
    </p>
    <div>
      <button @click="startForm">Start</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormStep1',
  props: {
    msg: String
  },
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
