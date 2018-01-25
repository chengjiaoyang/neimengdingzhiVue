<template>
  <div id="app">
    <layout></layout>
  </div>
</template>

<script>
  import Layout from './components/common/Layout'
export default {
  name: 'app',
  components:{
        Layout
    },
    methods:{
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
}
</style>
