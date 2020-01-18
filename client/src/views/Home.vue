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
          <li v-for="outing in pastOutings" :key="outing._id">
            <router-link
              :to="{ name: 'past', params: { outingId: outing._id } }"
            >
              <b>{{ outing.name }}</b>
            </router-link>
          </li>
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
        <router-link to="/create"
          ><button class="btn btn-dark">Create</button></router-link
        >
      </div>
      <div class="col-4">
        <h1>Upcoming</h1>
        <ol>
          <li v-for="outing in upcommingOutings" :key="outing._id">
            <router-link
              :to="{ name: 'upcoming', params: { outingId: outing._id } }"
            >
              <b>{{ outing.name }}</b>
            </router-link>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/NavBar.vue";
export default {
  name: "home",
  data() {
    return {
      date: new Date()
    };
  },
  components: {
    Navbar
  },
  mounted() {
    this.$store.dispatch("getProfileByUserId", this.$route.params.id);
    this.$store.dispatch("getAllOutings");
  },
  computed: {
    upcommingOutings() {
      let date = new Date();
      return this.$store.state.outings.filter(o => new Date(o.date) > date);
    },
    pastOutings() {
      let date = new Date();
      return this.$store.state.outings.filter(o => new Date(o.date) < date);
    },
    // activeOuting() {
    //   let date = new Date();
    //   return this.$store.state.outings.find(
    //     this.$store.state.outings.date == date
    //   );
    // },
    profile() {
      return this.$store.state.profile;
    },
    user() {
      return this.$store.state.user;
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
