<template>
  <div id="googleMap" style="width: 70vw; height: 300px"></div>
</template>
<script>
export default {
  name: "GoogleMap",
  props: ["lat", "lng"],
  async mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      let googleMap = new google.maps.Map(
        document.getElementById("googleMap"),
        {
          center: { lat: 43.616383, lng: -116.20276 },
          zoom: 15
        }
      );
    }
  }
};
</script>
<style scoped>
#map {
  height: 100%;
}
</style>