<template>
  <div class="map">
    <button class="btn-info" @click.prevent="findLocation">Search</button>
    <div id="googleMap" style="width: 70vw; height: 300px"></div>
    <div>
      Icons made by
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from
      <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
    </div>
  </div>
</template>
<script>
import axios from "axios";
let _placeApi = axios.create({
  baseURL:
    "//maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyA5NIwJK-lCXu1JGuCg7MUYnkbppHvbX58&query=bar"
});
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
          center: { lat: 43.5948973, lng: -116.2803016 },
          zoom: 15
        }
      );
    },
    async findLocation() {
      await navigator.geolocation.getCurrentPosition(
        async position => {
          console.log(this.$route);

          if (this.$route.path == "/create") {
            await this.$store.dispatch("getBarsFromGoogle", {
              //TODO make this async somehow
              lat: position.coords.latitude,
              lng: position.coords.longitude
            });
          }
          this.addMarkers(position);
        },
        e => {
          console.error(e);
        }
      );
    },
    async addMarkers(position) {
      let results;
      let drinks;
      if (this.$route.path == "/create") {
        results = this.$store.state.searchResults;
      } else {
        await this.$store.dispatch("getActiveOuting", this.$route.params.id);
        results = this.$store.state.activeOuting.barsList;
        await this.$store.dispatch("getActiveAttendee");

        drinks = await this.$store.dispatch(
          "getActiveAttendeeDrinks",
          this.$store.state.activeAttendee._id
        ); //TODO Add attendeeId dynamically
      }
      console.log(
        "This is your ActiveAttendee",
        this.$store.state.activeAttendee._id
      );
      //drinks = this.$store.state.activeAttendeeDrinks;
      console.log("Active Drinks are:", drinks);
      let sumLat = 0;
      let sumLng = 0;
      for (let index = 0; index < results.length; index++) {
        const bar = results[index];
        sumLat += bar.geometry.location.lat;
        console.log(sumLat);
        sumLng += bar.geometry.location.lng;
      }
      let avLat = sumLat / results.length;
      let avLng = sumLng / results.length;
      console.log("Averages", avLat, avLng);

      console.log("position", position);
      let googleMap = new google.maps.Map(
        document.getElementById("googleMap"),
        {
          center: {
            lat: avLat || position.coords.latitude,
            lng: avLng || position.coords.longitude
          },
          zoom: 14
        }
      );
      for (let index = 0; index < results.length; index++) {
        const bar = results[index];
        let contentString =
          '<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          '<h4 id="firstHeading" class="firstHeading">' +
          bar.name +
          "</h4>" +
          '<div id="bodyContent">' +
          "<p><b>Overall Rating:</b>" +
          bar.rating +
          "</p><p><b>Price Level:</b>" +
          bar.price_level +
          "</p>" +
          "</div>" +
          "</div>";
        let infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        console.log("results from store for search", bar.name);

        let marker = new google.maps.Marker({
          position: {
            lat: bar.geometry.location.lat,
            lng: bar.geometry.location.lng
          },
          map: googleMap
        });

        marker.addListener("click", function() {
          infowindow.open(googleMap, marker);
        });
      }
      if (drinks) {
        for (let index = 0; index < drinks.length; index++) {
          const drink = drinks[index];
          let contentString =
            '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h4 id="firstHeading" class="firstHeading">' +
            drink.description +
            "</h4>" +
            "</div>";
          let infowindow = new google.maps.InfoWindow({
            content: contentString
          });
          let marker = new google.maps.Marker({
            position: {
              lat: drink.location.latitude,
              lng: drink.location.longitude
            },
            map: googleMap,
            icon: require("../assets/beer 32px.png")
          });

          marker.addListener("click", function() {
            infowindow.open(googleMap, marker);
          });
        }
      }
    }
  }
};
</script>
<style scoped>
#map {
  height: 100%;
  width: fit-content;
}
</style>