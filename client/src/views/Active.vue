<template>
  <div class="container-fluid">
    <navbar />
    <div class="row">
      <div class="col-12">
        <h3>{{activeOuting.name}}</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <GoogleMap />
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
    activeOuting();
  },
  components: {
    Navbar,
    GoogleMap
  },
  computed: {
    activeOuting() {
      return this.$store.state.activeOutings.find(
        o => o._id == this.$route.params.id || { title: "Loading..." }
      );
    }
  }
};
</script>

<style></style>
