import express from "express";
import { Authorize } from "../middleware/authorize.js";
import _outingService from "../services/OutingsService";

//PUBLIC
export default class ActiveOutingController {
  constructor() {
    this.router = express
      .Router()
      .use(Authorize.authenticated)
      .get("", this.getActiveOutings)
      .use(this.defaultRoute);
  }

  defaultRoute(req, res, next) {
    next({ status: 404, message: "No Such Route" });
  }
  async getActiveOutings(req, res, next) {
    try {
      console.log("Made it to get Active Outings");

      let data = await _outingService.getActiveOutings();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
}
