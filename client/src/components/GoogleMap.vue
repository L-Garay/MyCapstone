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
    this.findLocation();
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
        
        this.addMarkers(position);
      }, (e)=>{
        console.error(e)
      })
  },
    addMarkers(position){
      let results = this.$store.state.searchResults;
      console.log("position", position)
      let googleMap = new google.maps.Map(
        document.getElementById("googleMap"),
        {
          center: {lat: position.coords.latitude, lng: position.coords.longitude},
          zoom: 14
        }
      );
      for (let index = 0; index < results.length; index++) {
        const bar = results[index];
        let  contentString = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading">' +
          bar.name +
          '</h4>'+
          '<div id="bodyContent">'+
          '<p><b>Overall Rating:</b>' +
          bar.rating +
          '</p><p><b>Price Level:</b>' +
          bar.price_level +
          '</p>'+
          '</div>'+
          '</div>';
        let infowindow = new google.maps.InfoWindow({
            content: contentString
          });
      console.log("results from store for search", bar.name);
      
        let marker = new google.maps.Marker({
          position: {lat: bar.geometry.location.lat, lng: bar.geometry.location.lng},
          map: googleMap,
        });
        
        marker.addListener('click', function() {
          infowindow.open(googleMap, marker);
        });
              

      }},
      
  }
};
</script>
<style scoped>
#map {
  height: 100%;
  width: fit-content
}
</style>