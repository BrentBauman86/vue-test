<template>
<div class="sign-up">
    <h3>Create an account!</h3>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button class="btn waves-effect waves-teal btn-flat" @click='signUp'>Sign Up</button>

    <span>or go back to <router-link to='/login'>login</router-link>.</span>
    </div>
    </template>

    <script>
    import firebase from 'firebase';

    export default {
        name: 'signUp',
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            signUp: function() {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                        this.$router.replace('/')
                    },
                    (err) => {
                      alert('Oops. ' + err.message)
                    }
                );
            }
        }
    }
    </script>

    <style scoped src="materialize-css/dist/css/materialize.min.css">

    .signup {
        margin-top: 20px;
    }

    input {
        margin: 10px 0;
        width: 60%;
        padding: 15px;
    }

    button {
        margin-top: 0px;
        width: 20%;
        cursor: pointer;
    }

    span {
        display: block;
        margin-top: 20px;
        font-size: 12px;
    }
    </style>