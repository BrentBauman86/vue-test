<template>
  <div class="hello">
    <div class="holder">
      <!-- <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons"> -->
       
      <div class="border">
      <form @submit.prevent="addTask">
        <p>Fill out your task list!</p>

        <v-date-picker
        :formats="formats"
          mode='single'
          v-model='taskDeadline'>
        </v-date-picker> 

        <input type='text' placeholder='pick a date...' v-model='taskDeadline' >
        <input type='text' placeholder='Task title' v-model='title' >
        <input type='text' placeholder='Task description' v-model='description' >
        <input type="text" placeholder="Task category" v-model="category" v-validate="'min:3'">
        
        <button class="btn waves-effect waves-light" type="submit">Create Task</button>

        <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
          <p class="alert" v-if="errors.has('skill')">{{errors.first('skill') }}</p>
        </transition>
      </form>
      </div>
      <ul>
          <li v-for="(task, index) in tasks" :key='index'> 
            {{ task.title }} {{task.description}} {{task.category}} {{task.taskDeadline}}
            <i class='fa fa-minus-circle' v-on:click="remove(index)"></i>
          </li>
      </ul>

        <p>Above are all the things you need to do.</p>
      </div>
    <button class="btn waves-effect waves-light" @click='logout'>Logout</button>

  </div>

</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Skills',
  
 data() {
   return {
     taskDeadline: new Date(),

     taskDeadline: null,
      formats: {
        title: 'MMMM YYYY',
        weekdays: 'W',
        navMonths: 'MMM',
        input: ['L', 'YYYY-MM-DD', 'YYYY/MM/DD'],
        dayPopover: 'L', 
      },

  attrs: [
        {
          key: 'today',
          dates: new Date(2019, 0, 31),
          highlight: {
            backgroundColor: '#ff8080',
          },
          contentStyle: {
            color: '#fafafa',
          },
          popover: {
            label: 'You just hovered over today\'s date!',
          }
        },
      ],

    title: "",
    description: "",
    category: "",
    taskDeadline: "",

    tasks: [
      
      ]
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },

    addTask() {
          this.tasks.push({title: this.title})
          this.tasks.push({description: this.description})
          this.tasks.push({category: this.category})
          this.tasks.push({taskDeadline: this.taskDeadline})

          this.title = "";
          this.description = "";
          this.category = "";
          this.taskDeadline = ""
        },
    remove(id) {
      this.tasks.splice(id,1);
      }
    }
  }
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

.border {
  border-color: coral;
  border-style: groove;
  padding-top: 10px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 30px;
}

.holder {
  background: #fff;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: #3e5252;
}

p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}

.container {
  box-shadow: 0px 0px 40px lightgray;
}

input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #322333;
  color: #687f7f;
}

.alert {
  background: #fdf2ce;
  font-weight: bold;
  display: inline-block;
  padding: 5px;
  margin-top: -20px;
}

.alert-in-enter-active {
  animation: bounce-in .5s;
}

.alert-in-leave-active {
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

i {
  float: right;
  cursor: pointer;
}
</style>
