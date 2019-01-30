<template>
<div class="sign-up">
    <h3>Create an account!</h3>
    <input type="text" placeholder="Email"><br>
    <input type="password" placeholder="Password"><br>
    <button>Sign Up</button>
    <span>or go back to <router-link to='/login'>login</router-link>.</span>
    </div>
    </template>

    <script>
    export default {
        name: 'signup',
        data() {
            return {};
        },
        methods: {}
    }
    </script>

    <style scoped>
    .signup {
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

    span {
        display: block;
        margin-top: 20px;
        font-size: 12px;
    }
    </style>