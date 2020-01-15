<template>
<div class="container-fluid">
  <div class="row">
    <navbar />
  </div>
  <div class="row">
    <div class="col-6">
      <label for="title">Title:</label>
      <input id="title" type="text">
    </div>
    <div class="col-6">
      <label for="datetime-local">When:</label>
      <input type="datetime-local">
    </div>
    <div class="col-6">
      this is where we put in options for starting bar
    </div>
  </div>
  <div class="row">
    <div class="col">
      maps go here
    </div>
  </div>
  <div class="row">
    <div class="col-6">bar list</div>
    <div class="col-6">invite section</div>
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
</style>