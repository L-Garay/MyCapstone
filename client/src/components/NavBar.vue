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
  data() {
    return {
      geo_options: {
        enableHighAccuracy: true,
        maximumAge: 3000,
        timeout: 5000
      },
      }
      // wpid: navigator.geolocation.watchPosition(
      //   this.geo_success,
      //   this.geo_error,
      //   this.geo_options
      // )
    },
  mounted() {
    // this.$store.dispatch("getActiveOuting", this.$route.params.id);
    // this.$store.dispatch("getActiveAttendee");
  },
  methods: {
    logout() {
      navigator.geolocation.clearWatch(this.wpid);
      this.$store.dispatch("logout");
    },
    geo_success(position) {
      console.log(position);

      // this.$store.dispatch("updateAttendeeLocation", position.coords);
    },

    geo_error() {
      alert("Sorry, no position available.");
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
