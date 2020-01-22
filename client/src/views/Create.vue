<template>
  <div class="container-fluid">
    <navbar />
    <div class="row">
      <GoogleMap />
    </div>
    <div class="row">
      <form class="form-group" @submit.prevent="createOuting">
        <label for="name">Title:</label>
        <input class="form-control" for="name" v-model="newOuting.name" id="name" type="text" />

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
      <div class="col-6">
        <ul class="overflow">
          <li v-for="searchResult in searchResults" :key="searchResult.id">
            {{ searchResult.name }}
            <button
              class="btn-success"
              @click.prevent="addBar(searchResult)"
            >+</button>
          </li>
        </ul>
      </div>
      <div class="col-6">
        Bar List
        <ul class="overflow">
          <li v-for="(bar, index) in this.newOuting.barsList" :key="bar.id">
            {{ bar.name }}
            <button @click.prevent="deleteBar(index)" class="btn-danger">-</button>
          </li>
        </ul>
      </div>
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
    },
    async deleteBar(index) {
      console.log("deleted Bar", index);
      try {
        this.newOuting.barsList.splice(index, 1);
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

<style scoped>
.overflow {
  height: 30vh;
  overflow-y: scroll;
}
</style>
