<template>
  <div id="nav">
    <!-- Logo-dropdown menue and profile picture-dropdown menu -->
    <button @click.prevent="logout" class="btn" type="button">Logout</button>
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style>
</style>