<template>
<div class="login">
    <h3>Login</h3>
    <input type="text" placeholder="Email"><br>
    <input type="password" placeholder="Password"><br>
    <button @click="login">Submit</button>
    <p>Don't have an account?  Feel free to <router-link to='/sign-up'>create one!</router-link></p>
    </div>
    </template>

    <script>
    export default {
        name: 'login',
        data() {
            return {};
        },
        methods: {
            login: function() {
                this.$router.replace('/');
            }
        }
    }
    </script>

    <style scoped>
    .login {
        margin-top: 40px;
    }

    input {
        margin: 10px 0;
        width: 60%;
        padding: 15px;
    }

    button {
        margin-top: 20px;
        width: 20%;
        cursor: pointer;
    }

    p {
        margin-top: 40px;
        font-size: 13px;
    }

    p a {
        text-decoration: underline;
        cursor: pointer;
     }
    </style>