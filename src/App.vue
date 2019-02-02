<template>
  <div id="app">
      <div class='nav'>
      <nav>
           <div class="pad">
          <button class="btn waves-effect waves-light">
            <router-link to="/view">Tasks</router-link>
          </button>
          </div>
        </nav>
      </div>
    <nav>
      <h3>ToDo.Vue</h3>
    </nav>
      <router-view />
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

.nav {
  padding: 10px;
  text-decoration: none;
  background: #fff;
  border-radius: 2px;
  color: black;
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

.pad {
        padding-left: 10px;
    }
</style>
