<template>
  <div class="container-fluid" id="background-image">
    <div class="row">
      <navbar />
    </div>
    <div class="row">
      <div class="col-6">
        <img
          id="profile-picture"
          src="https://www.pinclipart.com/picdir/middle/211-2118971_happy-face-chalk-png-hope-you-enjoy-my.png"
          alt
        />
        <h5 style="color:white">Friends( )</h5>
        <h5 style="color:white">Invites( )</h5>
      </div>
      <div class="col-6">
        <h4 style="color:white">Name:{{profile.name}}</h4>
        <h4 style="color:white">Age:{{profile.age}}</h4>
        <h4 style="color:white">Address:{{profile.address}}</h4>
        <h4 style="color:white">Phone:{{profile.phone}}</h4>
        <h4 style="color:white">Take Me Home:{{profile.tmh}}</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <h1 style="color:white">Top Drinks</h1>
      </div>
      <div class="col-6">
        <h1 style="color:white">Top Bars</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/NavBar.vue";
export default {
  components: {
    Navbar
  },
  mounted() {
    this.$store.dispatch("getProfileByUserId", this.$route.params.id);
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    }
  }
};
</script>

<style>
#background-image {
  background-image: url("https://scottcoyneunderdev.files.wordpress.com/2015/02/dark-wood-high-quality-wallpaper-hd-resolution3.jpg");
}
#profile-picture {
  height: 10em;
  border-radius: 50%;
}
</style>
