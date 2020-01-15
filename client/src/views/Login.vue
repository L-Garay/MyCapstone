<template>
  <div class="login container-fluid">
    <div class="row">
      <div class="col-12">
        <img src="../assets/BarHopLogo.png" alt="">
      </div>
    </div>
    <div class="row">
      <div class="col-6 offset-3 d-flex justify-content-center">
        <form class="d-flex flex-column flex-sm-row" v-if="loginForm" @submit.prevent="loginUser">
          <input class="login-input" type="email" v-model="creds.email" placeholder="EMAIL" />
          <input
            class="login-input"
            type="password"
            v-model="creds.password"
            placeholder="PASSWORD"
          />
          <button class="btn login-btn" type="submit">Login</button>
        </form>
        <form class="d-flex flex-column flex-sm-row" v-else @submit.prevent="register">
          <input class="login-input" type="text" v-model="newUser.name" placeholder="NAME" />
          <input class="login-input" type="email" v-model="newUser.email" placeholder="EMAIL" />
          <input
            class="login-input"
            type="password"
            v-model="newUser.password"
            placeholder="PASSWORD"
          />
          <button class="btn register-btn" type="submit">Create Account</button>
        </form>
      </div>
      <div class="col-6 offset-3 pt-2">
        <div class="action" @click="loginForm = !loginForm">
          <p v-if="loginForm">No account? Click here to Register</p>
          <p v-else>Already have an account? Click here to Login</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h1>About BarHop</h1>
        <p>this is where we can describe everything about wtf our application is</p>
        <p>and this is where we can put an optional demo video</p>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router/index.js";

export default {
  name: "login",
  data() {
    return {
      loginForm: true,
      creds: {
        email: "",
        password: ""
      },
      newUser: {
        email: "",
        password: "",
        name: ""
      }
    };
  },
  beforeCreate() {
    if (this.$store.state.user._id) {
      this.$router.push({ name: "boards" });
    }
  },
  methods: {
    register() {
      this.$store.dispatch("register", this.newUser);
    },
    loginUser() {
      this.$store.dispatch("login", this.creds);
    }
  }
};
</script>
