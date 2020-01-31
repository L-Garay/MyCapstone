<template>
  <div class="container-fluid">
    <navbar />
    <div class="row">
      <div class="col-12">
        <h3>{{activeOuting.name}}</h3>
      </div>
    </div>
    <div class="row">
      <GoogleMap />
    </div>
    <div class="row">
      <div class="col-4">
        <h2>Bar List</h2>
        <ul class="overflow">
          <li v-for="(bar, index) in activeOuting.barsList" :key="bar.id">
            {{ bar.name }}
            <button @click.prevent="deleteBar(index)" class="btn-danger">-</button>
          </li>
        </ul>
      </div>
      <div class="col-4">
        <img
          id="profile-picture"
          src="https://www.pinclipart.com/picdir/middle/211-2118971_happy-face-chalk-png-hope-you-enjoy-my.png"
          alt
        />
      </div>
      <div class="col-4">
        <h2>Attendees</h2>
        <ul class="overflow">
          <li v-for="(attendee, index) in outingAttendees" :key="attendee.id">
            {{ attendee.name }}
            <!-- <button @click.prevent="deleteBar(index)" class="btn-danger">-</button> -->
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <h1 id="drink-counter">5</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/NavBar.vue";
import GoogleMap from "@/components/GoogleMap.vue";
export default {
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getActiveOuting", this.$route.params.id);
    this.$store.dispatch("getOutingAttendees", this.$route.params.id);
  },
  components: {
    Navbar,
    GoogleMap
  },
  methods: {
    async deleteBar(index) {
      console.log("deleted Bar", index);
      try {
        this.$store.state.activeOuting.barsList.splice(index, 1);
      } catch (error) {
        next(error);
      }
    }
  },
  computed: {
    activeOuting() {
      return this.$store.state.activeOuting || { title: "Loading..." };
    },
    outingAttendees() {
      return this.$store.state.outingAttendees;
    },
    activeAttendee() {
      return this.$store.state.ActiveAttendee;
    }
  }
};
</script>

<style scoped>
.overflow {
  height: 30vh;
  overflow-y: scroll;
}
#profile-picture {
  margin-top: 5vh;
  height: 10em;
  border-radius: 50%;
}
#drink-counter {
  vertical-align: middle;
  margin-top: 5vh;
  height: 3em;
  width: 3em;
  border-radius: 50%;
  background-color: cornflowerblue;
}
</style>
