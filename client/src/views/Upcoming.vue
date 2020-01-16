<template>
<div class="continer-fluid">
  <navbar />
  <div class="row">
    <div class="col">
      <h1>
        {{outing.name}}
        {{outing.date}}
        {{outing.startingPoint}}
      </h1>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from "@/components/NavBar.vue";
export default {
  components: {
    Navbar
  },
  computed: {
    outing() {
      console.log(this.$route.params);
      
      return (
        this.$store.state.outings.find(o => o._id == this.$route.params.outingId) || {
          title: "Loading..."
        }
      );
    },
  }
};
</script>

<style>
</style>