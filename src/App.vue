<template>
  <div id="app">
    <div class="hello">
    <nav>
      <h3>ToDo.Vue</h3>
    </nav>
      <router-view />
  </div>
  </div>
</template>

<script>
import Skills from './components/Skills.vue'

export default {
  name: 'app',
  components: {
    Skills 
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

body {
  background-color: #eeeeee;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}

body, html {
  margin: 0;
  height: 100%;
}

#app {
  width: 50%;
}

nav a {
  padding: 10px;
  text-decoration: none;
  background: #fff;
  border-radius: 2px;
  color: rgb(0, 110, 255);
  font-weight: bold;
  margin-right: 15px;
  margin-left: 5px;
  flex: 100;
}

h3 {
  padding-top: 10px;
  padding-bottom: 1px;
  margin-bottom: 6px;
  text-align: center;
}

</style>
