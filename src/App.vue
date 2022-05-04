<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
.primary-button {
  @apply bg-black text-white font-bold py-2 px-4 border rounded w-32;
}
.secondary-button {
  @apply bg-white text-black font-bold py-2 px-4 border rounded w-32;
}
.page-heading {
  @apply text-4xl font-bold leading-relaxed mb-5;
}
.form-field {
  @apply border rounded py-2 px-3 w-full;
}
.form-field-label {
  @apply text-left text-sm font-semibold text-gray-500 pb-1;
}

input[type='radio'] {
    accent-color: #232323;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
