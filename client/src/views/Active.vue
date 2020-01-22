<template>
  <div>
    <navbar />
    <h3>{{activeOuting.name}}</h3>
  </div>
</template>

<script>
import Navbar from "@/components/NavBar.vue";
export default {
  components: {
    Navbar
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
