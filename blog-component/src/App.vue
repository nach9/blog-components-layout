<template>
  <div id="app">
    <topnav/>
    <router-view/>
  </div>
</template>

<script>
import Topnav from '@/components/Topnav'
export default {
  name: 'app',
  components: {
    Topnav
  }
}
</script>

<style>

#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
</style>
