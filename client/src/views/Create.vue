<template>
<div class="container-fluid">
  <div class="row">
    <navbar />
  </div>
  <div class="row"> 
    <form @submit.prevent="createOuting">
    <div class="col-6">
      <label for="title">Title:</label>
      <input v-model="newOuting.title" id="title" type="text">
    </div>
    <div class="col-6">
      <label for="datetime-local">When:</label>
      <input v-model="newOuting.date" type="date">
    </div>
    <button class="btn-success" type="submit">Lets Do This!</button>
    </form>
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
  data(){
    return {
      newOuting: {
        title: "",
        date: ""
      }
    }
  },
  components: {
    Navbar
  },
  method:{
     async createOuting(){
       this.$store.dispatch("createOuting", this.newOuting);
       this.newOuting = {title: "", date: ""}
    }
  },
};
</script>

<style>
</style>