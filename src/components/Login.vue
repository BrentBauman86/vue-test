<template>
<div class="login">
    <h3>Login</h3>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button class="btn waves-effect waves-light" @click='login'>Submit</button>
        <p>Don't have an account?  Feel free to <router-link to='/sign-up'>create one!</router-link></p>
    </div>
</template>

    <script>
    import firebase from 'firebase';

    export default {
        name: 'login',
        data() {
            return {
                email: '',
                password: ''
            };
        },
    methods: {
    login: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
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
    .login {
    }

    input {
        margin: 10px 0;
        width: 60%;
        padding: 15px;
    }

    button {
        margin-top: 0px;
        margin-bottom: 100px;
        width: 20%;
        cursor: pointer;
    }

    p {
        margin-top: 0px;
        margin-bottom: 100px;
        font-size: 13px;
    }

    p a {
        text-decoration: underline;
        cursor: pointer;
     }

     h3 {
         padding-top: 45px;
     }
    </style>