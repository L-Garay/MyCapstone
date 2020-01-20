<template>
  <div>
    <navbar />
    <h3>
      {{ outing.name }}
      <i
        @click.prevent="deleteOuting(outing)"
        style="color:red"
        class="fas fa-trash"
      ></i>
    </h3>
    <h5>{{ outing.date | formatPastDate }}</h5>
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

<style></style>
