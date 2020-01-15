<template>
  <div class="container-fluid">
    <div class="row">
      <navbar />
    </div>
    <div class="row">
      <div class="col-4">
        <h1>Home Page</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">Content goes here</div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/NavBar.vue";
export default {
  name: "home",
  components: {
    Navbar
  }
};
</script>
