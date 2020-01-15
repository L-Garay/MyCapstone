import express from "express";
import { Authorize } from "../middleware/authorize.js";
import _profileService from "../services/ProfileService";

//PUBLIC
export default class ProfileController {
  constructor() {
    this.router = express
      .Router()
      .use(Authorize.authenticated)
      .get("/:id", this.getByUserId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
      .use(this.defaultRoute);
  }

  // this is pretty neat

  defaultRoute(req, res, next) {
    next({ status: 404, message: "No Such Route" });
  }

  async getByUserId(req, res, next) {
    try {
      let data = await _profileService.getByUserId(
        req.params.userId,
        req.session.uid
      );
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      req.body.userId = req.session.uid;
      let data = await _profileService.create(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await _profileService.edit(
        req.params.userId,
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
      await _profileService.delete(req.params.userId, req.session.uid);
      return res.send("Successfully deleted");
    } catch (error) {
      next(error);
    }
  }
}
