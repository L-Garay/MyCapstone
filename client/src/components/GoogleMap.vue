<template>
<div class="map">
  <button class="btn-info" @click.prevent="findLocation">Search</button>
  <div id="googleMap" style="width: 70vw; height: 300px"></div>

</div>
</template>
<script>
import axios from "axios"
let _placeApi = axios.create({
  baseURL: "//maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyA5NIwJK-lCXu1JGuCg7MUYnkbppHvbX58&query=bar"
})
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
    },
    findLocation(){
      navigator.geolocation.getCurrentPosition((position)=>{
      this.$store.dispatch("getBarsFromGoogle", {lat: position.coords.latitude, lng: position.coords.longitude})
    }, (e)=>{
      console.error(e)
    })
}
  }
};
</script>
<style scoped>
#map {
  height: 100%;
}
</style>