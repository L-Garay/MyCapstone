<template>
<div class="container-fluid">
    <navbar />
    <div class="row">
      <div class="col-6">
        <h3>
          {{ outing.name }}
          <i
          @click.prevent="deleteOuting(outing)"
          style="color:red"
          class="fas fa-trash">
          </i>
          </h3>
      </div>
      <div class="col-6">
        <h5>{{ outing.date | formatPastDate }}</h5>
      </div>
    </div> 
    <div class="row">
      <div id="past-bar-list" class="col-3">
        <h5>bar list</h5>
        <ol class="past-bar-overflow">
          <li v-for="bar in outing.barsList" :key="bar.id">
          {{ bar.name }}
        </li>
        </ol>
      </div>
      <div class="col-9">
        <div class="row">
          <div id="past-member-list" class="col-12">
            <p>here is where all of the members are going to go</p>
          </div>
          <div class="col-12">
            <GoogleMap />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
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
      <div class="col-12">
        <p>this area is for comments</p>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/NavBar.vue";
import GoogleMap from "@/components/GoogleMap.vue";
export default {
  data: {
    myCroppa: null,
    blob: ''
  },
  components: {
    Navbar,
    GoogleMap
  },
  computed: {
    outing() {
      return (
        this.$store.state.outings.find(
          o => o._id == this.$route.params.outingId
        ) || {
          title: "Loading..."
        }
      );
    }
  },
  methods: {
    deleteOuting(outing) {
      this.$store.dispatch("deleteOuting", outing);
    }
  }
};
</script>

<style>
.past-bar-overflow{
  height: 44vh;
  overflow-y: scroll;
}
#past-bar-list{
  height: 44vh
}
.croppa-container {
  background-color: white;
  border: 3px solid black
}
</style>
