<template>
<div id="app">
    <div class='button'>View</div>
    <router-view/>
    </div>
    </template>

    <script>
    import firebase from 'firebase';

    export default {
        name: 'View',
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
        width: 600%;
        padding: 15px;
    }

    .button {
        color: black;
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