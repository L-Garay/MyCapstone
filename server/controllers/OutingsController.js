import express from "express";
import { Authorize } from "../middleware/authorize.js";
import _outingService from "../services/OutingsService";
import _drinkService from "../services/DrinksService";
import _attendeeService from "../services/AttendeeService";

//PUBLIC
export default class OutingController {
  constructor() {
    this.router = express
      .Router()
      .use(Authorize.authenticated)
      .get("", this.getAllOutings)
      .get("/:id", this.getById)
      .get("/:id/drinks", this.getOutingDrinks)
      .get("/:id/attendees", this.getOutingAttendees)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
      .use(this.defaultRoute);
  }

  defaultRoute(req, res, next) {
    next({ status: 404, message: "No Such Route" });
  }

  async getAllOutings(req, res, next) {
    try {
      let data = await _outingService.getAllOutings();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await _outingService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getOutingDrinks(req, res, next) {
    try {
      let data = await _drinkService.getOutingDrinks(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getOutingAttendees(req, res, next) {
    try {
      let data = await _attendeeService.getOutingAttendees(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      req.body.authorId = req.session.uid;
      let data = await _outingService.create(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await _outingService.edit(
        req.params.id,
        req.session.uid,
        req.body
      );
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await _outingService.delete(req.params.id, req.session.uid);
      return res.send("Successfully deleted");
    } catch (error) {
      next(error);
    }
  }
}
