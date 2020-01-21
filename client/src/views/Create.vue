<template>
  <div class="container-fluid">
      <navbar />
    <div class="row">
      <GoogleMap />
    </div>
    <div class="row">
      <form class="form-group" @submit.prevent="createOuting">
        <label for="name">Title:</label>
        <input
          class="form-control"
          for="name"
          v-model="newOuting.name"
          id="name"
          type="text"
        />
        <label for="datetime-local">When:</label>
        <input
          class="form-control"
          v-model="newOuting.date"
          type="datetime-local"
          value="2020-01-01T12:00:00"
        />
        <div class="col">
          <button class="btn-success" type="submit">Lets Do This!</button>
          <router-link to="/">
            <button class="btn-danger" type="button">Never Mind :(</button>
          </router-link>
        </div>
      </form>
    </div>
    <div class="row">
      <div class="col-6">this is where we put in options for starting bar</div>
      <div class="col">other bar list here</div>
      <div class="col-6">invite section</div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/NavBar.vue";
import GoogleMap from "@/components/GoogleMap.vue";
export default {
  data() {
    return {
      newOuting: {
        name: "",
        date: "",
        barsList: []
      }
    };
  },
  components: {
    Navbar,
    GoogleMap
  },
  methods: {
    async createOuting() {
      console.log(this.newOuting);

      this.$store.dispatch("createOuting", this.newOuting);
      this.newOuting = {
        title: "",
        date: "",
        barsList: []
      };
    },
    async addBar(bar) {
      console.log("Bar Being Added", bar);

      try {
        this.newOuting.barsList.push(bar);
        console.log(this.newOuting.barsList);
      } catch (error) {
        next(error);
      }
    }
  },
  computed: {
    searchResults() {
      return this.$store.state.searchResults;
    }
  }
};
</script>

<style></style>
