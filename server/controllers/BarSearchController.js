import axios from "axios";
import express from 'express'

let _placeAPI = axios.create({
  baseURL: "https://maps.googleapis.com/maps/api/place/textsearch/"
});
let baseQuery = "json?key=AIzaSyA5NIwJK-lCXu1JGuCg7MUYnkbppHvbX58&query=bar&radius=2000&";

export default class BarSearchController {
  constructor() {
    this.router = express.Router()
      .get("", this.getBars);
  }

  async getBars(req, res, next) {
    try {
      let response = await _placeAPI.get(
        baseQuery + `location=${req.query.lat},${req.query.lng}`
      );
      res.send(response.data);
    } catch (error) {
      next(error)
    }
  }
}
