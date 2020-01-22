<template>
  <div class="container-fluid">
    <navbar />
    <div class="row"></div>
    <div class="row">
      <div class="col">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="../assets/bar1.jpg"
                class="d-block w-100 carouselImgs"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/bar2.jpg"
                class="d-block w-100 carouselImgs"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/bar3.jpg"
                class="d-block w-100 carouselImgs"
                alt="..."
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <h1>Past</h1>
        <ol class="overflow">
          <li v-for="outing in pastOutings" :key="outing._id">
            <router-link
              :to="{ name: 'past', params: { outingId: outing._id } }"
            >
              <b>{{ outing.name }}</b>
              <p>{{ outing.date | formatPastDate }}</p>
            </router-link>
          </li>
        </ol>
      </div>
      <div class="col-4">
        <h1>Active</h1>
        <ol>
          <li v-for="outing in activeOutings" :key="outing._id">
            <router-link :to="{ name: 'active', params: { id: outing._id } }">
              {{ outing.name }}</router-link
            >
          </li>
        </ol>
        <img
          class="picture"
          src="https://www.pinclipart.com/picdir/middle/211-2118971_happy-face-chalk-png-hope-you-enjoy-my.png"
          alt
        />
        <router-link to="/create">
          <button class="btn btn-dark">Create</button>
        </router-link>
      </div>
      <div class="col-4">
        <h1>Upcoming</h1>
        <ol class="overflow">
          <li v-for="outing in upcommingOutings" :key="outing._id">
            <router-link :to="{ name: 'upcoming', params: { id: outing._id } }">
              <b>{{ outing.name }}</b>
              <p>{{ outing.date | formatUpcomingHomeDate }}</p>
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
    this.$store.dispatch("getProfileByUserId", this.$store.state.user._id);
    this.$store.dispatch("getAllOutings");
  },
  computed: {
    upcommingOutings() {
      let date = new Date();
      return this.$store.state.outings
        .filter(o => new Date(o.date) > date)
        .sort(function(a, b) {
          if (a.date < b.date) {
            return -1;
          } else if (a.date > b.date) {
            return 1;
          } else if (a.date == b.date) {
            return 0;
          }
        });
    },
    pastOutings() {
      let date = new Date();
      return this.$store.state.outings
        .filter(o => new Date(o.date) < date)
        .sort(function(a, b) {
          if (a.date < b.date) {
            return 1;
          } else if (a.date > b.date) {
            return -1;
          } else if (a.date == b.date) {
            return 0;
          }
        });
    },
    activeOutings() {
      let date = new Date().getDate();
      let year = new Date().getUTCFullYear();
      let activeOutings = this.$store.state.outings.filter(
        o =>
          new Date(o.date).getDate() == date &&
          new Date(o.date).getUTCFullYear() == year
      );
      this.$store.dispatch("setActiveOutings", activeOutings);
      return activeOutings;
    },
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
.picture {
  height: 100px;
  width: 100px;
  border-radius: 50%;
}
li p {
  font-size: 0.75rem;
}
ol {
  padding-left: 10pt;
}
ol li {
  box-shadow: 1pt 1pt 2pt black;
  border: 1pt solid grey;
  margin: 5pt;
}
.carouselImgs {
  height: 200px;
}
.overflow {
  height: 70vh;
  overflow-y: scroll;
}
</style>
