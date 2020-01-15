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
    <h2 style="color:white">Name:</h2>
    <h2 style="color:white">Age:</h2>
    <h2 style="color:white">Address:</h2>
    <h2 style="color:white">Phone:</h2>
    <h2 style="color:white">Take Me Home:</h2>
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
  }
};
</script>

<style>
#profile-picture{
  height: 15em;
  border-radius: 50%
}
</style>
