<template>

  <div class="hello">
    <!-- <div class='nav'>
      <nav>
           <div class="pad">
          <button class="btn waves-effect waves-light">
          <router-link to="/view">Tasks</router-link>
          </button>
          </div>
        </nav>
      </div> -->
    <div class="holder">
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons">
    
      <input type="text" v-model='search' placeholder='search categories'/>
        <div v-for="(task, index) in filteredCategories" :key='index'>
          </div>

      <div class="border">

      <form @submit.prevent="addTask">
        <p>Fill out your task list!</p>

        <v-date-picker :formats="formats" mode='single' v-model='dueDate'>
        </v-date-picker>  


      <!-- <table class="table">
        <thread>
          <th></th>
          <th></th>
          <th></th>
            <th></th>
              </thread>

          <tbody>
            <tr v-for='task in tasks'>
              <td>
                <td>
                  <td>
                    <td>
                    </tr>
                    </tbody>
                    </table>
                    </div>
                    </div> -->




        <input type='text' placeholder='pick a date...' v-model='dueDate' >
        <input type='text' placeholder='Task title' v-model='title' >
        <input type='text' placeholder='Task description' v-model='description' >
        <input type="text" placeholder="Task category" v-model="category" v-validate="'min:3'">

        <button class="btn waves-effect waves-light" v-on: submit='addTask'>Create Task</button>

        <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
          <p class="alert" v-if="errors.has('task')">{{errors.first('task') }}</p>
        </transition>
      </form>
    </div>

    <ul>
        <li v-for="(task, index) in tasks" :key='index'> 

          <p>title: {{task.title}}<br></p>
          <p>Description: {{task.description}}<br></p>
          <p>Category: {{task.category}}<br></p>
          <p>Due Date: {{task.dueDate}}</p>
    
            <transition name="fade" mode="in-out">
              <button class='btn waves-effect waves-light btn-small' v-on:click="markComplete">
                {{ markComplete ? 'Not Complete' : 'Complete' }}
              </button>
            </transition>

            <b-button button class='btn waves-effect waves-light btn-small' :pressed.sync="comleted" variant="primary">Complete Task</b-button>
              <p>Task Complete: <strong>{{ completed }}</strong></p>

              <div class='span'>
                <div class='footer-right'>
                  <i class='fa fa-trash' v-on:click="remove(index)"></i>

                </div>
              </div>
        </li>
    </ul>

        <p>Above are all the things you need to do.</p>
      </div>
   <button class="btn waves-effect waves-light" @click='logout'>Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase';
// import format from 'date-fns/format'

export default {
  name: 'tasks',

  data() {
   return {

     completed: false,
     buttons: [
       { variant: 'primary', caption: 'complete', state: true },
     ],

    markComplete: false,
    tasks: [],
    search: '',

    dueDate: new Date(),

    dueDate: null,
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
  }
},

  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },

    addTask() {
          this.tasks.push({title: this.title,
          description: this.description, 
          category: this.category, 
          dueDate: this.dueDate})

          this.title = "";
          this.description = "";
          this.category = "";
          this.dueDate = ""
        },

    remove(id) {
      this.tasks.splice(id,1);
      }
    },
        
  computed: {
    filteredCategories: function() {
      return this.tasks.filter((task) => {
        return task.category.match(this.search)
      })
    },

    categories: function(name) {
      return category ? category : 'there'
    },

    btnStates () {
      return this.buttons.map(btn => btn.state)
    },

    sortTasks: function() {
      return this.tasks.sort((a, b) => {
        a[this.title] < b[this.description]
      })
    }
  }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

.border {
  border-color: #ee6e73;
  border-style: solid;
  padding-top: 10px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 30px;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
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
  font-size: 1em;
  border-style: solid;
  border-color: #ee6e73;
  color: gray;
}

p {
  text-align: center;
  padding: 15px 0;
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

.delete {
  animation: bounce-out;
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

.footer-right {
  text-align: right;
}

.footer-left {
  text-align: left;
}

i {
  display: block;
  margin: 0 auto;
  text-align: left;
  cursor: pointer;
  height: 3.5rem;
  width: 3.5rem;
}
</style>
