import express from "express";
import { Authorize } from "../middleware/authorize.js";
import _drinkService from "../services/DrinksService";

//PUBLIC
export default class DrinkController {
  constructor() {
    this.router = express
      .Router()
      .use(Authorize.authenticated)
      .get("/:id", this.getById)
      .post("", this.create)
      .use(this.defaultRoute);
  }

  defaultRoute(req, res, next) {
    next({ status: 404, message: "No Such Route" });
  }

  async getById(req, res, next) {
    try {
      let data = await _drinkService.getByUserId(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      req.body.authorId = req.session.uid;
      let data = await _drinkService.create(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }
}
