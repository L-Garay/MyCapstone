<template>

<div class="container-fluid" :style="{ 'background-image': 'url(https://scottcoyneunderdev.files.wordpress.com/2015/02/dark-wood-high-quality-wallpaper-hd-resolution3.jpg)' }">
<div class="row">
  <navbar />
</div>
<div class="row">
  <div class="col-6">
    <img id="profile-picture" src="https://www.pinclipart.com/picdir/middle/211-2118971_happy-face-chalk-png-hope-you-enjoy-my.png" alt="">
    <h2 style="color:white">Friends(  )</h2>
    <h2 style="color:white">Invites(  )</h2>
  </div>
  <div class="col-6">
    <h2 style="color:white">Name:{{profile.name}}</h2>
    <h2 style="color:white">Age:{{profile.age}}</h2>
    <h2 style="color:white">Address:{{profile.address}}</h2>
    <h2 style="color:white">Phone:{{profile.phone}}</h2>
    <h2 style="color:white">Take Me Home:{{profile.tmh}}</h2>
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
  computed: {
    profile(){
      return this.$store.state.profile
    }
  }
};
</script>

<style>
#profile-picture{
  height: 15em;
  border-radius: 50%
}
</style>
