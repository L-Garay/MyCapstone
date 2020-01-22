<template>
  <div>
    <navbar />
    <h3></h3>
  </div>
</template>

<script>
import Navbar from "@/components/NavBar.vue";
export default {
  components: {
    Navbar
  },
  computed: {
    activeOutings() {
      return this.$store.state.activeOutings;
    }
  }
};
</script>

<style></style>
