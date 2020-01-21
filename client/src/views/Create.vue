<template>
  <div class="container-fluid">
    <div class="row">
      <navbar />
      <GoogleMap />
    </div>
    <div class="row">
      <form @submit.prevent="createOuting">
        <div class="col-4">
          <label for="name">Title:</label>
          <input v-model="newOuting.name" id="name" type="text" />
        </div>
        <div class="col-4">
          <label for="datetime-local">When:</label>
          <input v-model="newOuting.date" type="date" />
        </div>
        <div class="col-4">
          Bar List
          <ul>
            <li
              v-for="bar in this.newOuting.barsList"
              :key="bar.id"
              v-model="newOuting.barsList"
            >
              {{ bar.name }}
            </li>
          </ul>
        </div>
        <button class="btn-success" type="submit">Lets Do This!</button>
        <router-link to="/">
          <button class="btn-danger" type="button">Never Mind :(</button>
        </router-link>
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
      <div class="col-6">
        <ul>
          <li v-for="searchResult in searchResults" :key="searchResult.id">
            {{ searchResult.name }}
            <button @click.prevent="addBar(searchResult)">add</button>
          </li>
        </ul>
      </div>

      <div class="col">
        <form class="row" @submit.prevent="createOuting">
          <div class="col-6">
            <label for="name">Title:</label>
            <input v-model="newOuting.name" id="name" type="text" />
          </div>
          <div class="col-6">
            <label for="datetime-local">When:</label>
            <input v-model="newOuting.date" type="date" />
          </div>
          <div class="col">
            <button class="btn-success" type="submit">Lets Do This!</button>
            <router-link to="/">
              <button class="btn-danger" type="button">Never Mind :(</button>
            </router-link>
          </div>
        </form>
      </div>
      <div class="col-6">this is where we put in options for starting bar</div>
    </div>
    <div class="row">
      <div class="col">maps go here</div>
    </div>
    <div class="row">
      <div class="col-6">bar list</div>
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
