<template>
  <div class="row" id="nav">
    <div class="dropdown col-6">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
      >
        <img id="logoButton" src="../assets/BarHopLogo.png" alt />
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li>
          <a class="dropdown-item" href="#">
            <router-link :to="'/home/' + user._id">Home</router-link>|
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            <router-link to="/about">About</router-link>
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            <router-link to="/create">Create</router-link>
          </a>
        </li>
      </ul>
    </div>
    <div class="dropdown2 col-6">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton2"
        data-toggle="dropdown"
      >
        <img id="logoButton" src="../assets/BarHopLogo.png" alt />
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li>
          <a class="dropdown-item" href="#">
            <router-link :to="'/profile/' + user._id">Profile</router-link>
          </a>
        </li>
        <li>
          <a @click.prevent="logout" class="dropdown-item" href="#">Logout</a>
        </li>
      </ul>
    </div>
    <!-- Logo-dropdown menue and profile picture-dropdown menu -->
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>

<style>
#logoButton {
  height: 3em;
}
</style>
