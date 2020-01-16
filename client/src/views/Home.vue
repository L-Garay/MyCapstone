<template>
  <div class="container-fluid">
    <div class="row">
      <navbar />
    </div>
    <div class="row">
      <div class="col">
        <p>this is the spot for the image carousel</p>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <h1>Past</h1>
        <ol>
          <li>outing title</li>
        </ol>
      </div>
      <div class="col-4">
        <h1>Active</h1>
        <ol>
          <li>outing title</li>
        </ol>
        <img
          id="status-picture"
          src="https://www.pinclipart.com/picdir/middle/211-2118971_happy-face-chalk-png-hope-you-enjoy-my.png"
          alt
        />
        <button class="btn btn-dark">Create</button>
      </div>
      <div class="col-4">
        <h1>Upcoming</h1>
        <ol>
          <li v-for="outing in outings" :key="outing._id">{{outing.name}}</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/NavBar.vue";
export default {
  name: "home",
  components: {
    Navbar
  },
  mounted() {
    this.$store.dispatch("getProfileByUserId", this.$route.params.id);
    this.$store.dispatch("getAllOutings")
  },
  computed: {
    outings(){
      return this.$store.state.outings
    },
    profile() {
      return this.$store.state.profile;
    }
  }
};
</script>
<style>
#status-picture {
  height: 7em;
  border-radius: 50%;
}
</style>
