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
          center: {lat: 43.5948973, lng: -116.2803016},
          zoom: 15
        }
      );
    },
      async findLocation(){

        await navigator.geolocation.getCurrentPosition((position)=>{
        this.$store.dispatch("getBarsFromGoogle", {lat: position.coords.latitude, lng: position.coords.longitude});
        
        this.addMarkers();
      }, (e)=>{
        console.error(e)
      })
  },
    addMarkers(){
      let results = this.$store.state.searchResults;
      let googleMap = new google.maps.Map(
        document.getElementById("googleMap"),
        {
          center: {lat: 43.5948973, lng: -116.2803016},
          zoom: 15
        }
      );
      console.log("results from store for search",results);
      
      for (let index = 0; index < results.length; index++) {
        const element = results[index];
        let marker = new google.maps.Marker({
          position: {lat: element.geometry.location.lat, lng: element.geometry.location.lng},
          map: googleMap,
          title: element.name
        })
      }},
  }
};
</script>
<style scoped>
#map {
  height: 100%;
}
</style>