<template>
  <div class="hello">
    <div class="holder">
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons">
       


      <form @submit.prevent="addSkill">

        <v-date-picker
          mode='single'
          v-model='selectedValue'>
        </v-date-picker> 

        <input type='text' placeholder='pick a date...' v-model='selectedValue' >
        <input type='text' placeholder='Task title' v-model='title' >
        <input type='text' placeholder='Task description' v-model='description' >
        <input type="text" placeholder="Task category" v-model="category" v-validate="'min:3'" name="skill">
        
        <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
          <p class="alert" v-if="errors.has('skill')">{{errors.first('skill') }}</p>
        </transition>
      </form>
      
      <ul>
          <li v-for="(data, index) in skills" :key='index'> 
            {{ data.skills }}
            <i class='fa fa-minus-circle' v-on:click="remove(index)"></i>
          </li>
      </ul>

        <p>Above are all the things you need to do.</p>
      </div>
    <button @click='logout'>Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Skills',
  
 data() {
   return {
     selectedValue: new Date(),
  attrs: [
        {
          key: 'today',
          dates: new Date(2019, 0, 31),
          highlight: {
            backgroundColor: '#ff8080',
          },
          // Just use a normal style
          contentStyle: {
            color: '#fafafa',
          },
          // Our new popover here
          popover: {
            label: 'You just hovered over today\'s date!',
          }
        },
      ],

    title: "",
    description: "",
    category: "",
    skills: [
      {task: ""},
      ]
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },

    addSkill() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.skills.push({skill: this.skill})
          this.skill = "";
        } else {
          console.log('Not valid');
        }
      })
    },
    remove(id) {
      this.skills.splice(id,1);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

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
