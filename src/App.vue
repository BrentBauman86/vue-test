<template>
  <div id="app">
    <nav>
      <h3>ToDo.Vue</h3>
        </nav>
          <transition name= "router-anim" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutDown">
        <router-view />
    </transition>
  </div>
</template>

<script>
import Tasks from './components/Tasks.vue'

export default {
  name: 'app',
  components: {
    Tasks
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

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

  .page {
    position: fixed;
    width: inherit;
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
