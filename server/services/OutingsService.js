import mongoose from "mongoose";
import Outing from "../models/Outing";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Outing", Outing);

class OutingService {
  async getAllOutings() {
    let data = await _repository.find();
    if (!data) {
      throw new ApiError("Invalid User Id", 400);
    }
    return data;
  }

  async getActiveOutings() {
    let data = await _repository.find();
    let fdata = data.filter(ao => {
      return ao.active == true;
    });
    if (!data) {
      throw new ApiError("Invalid User Id", 400);
    }
    return fdata;
  }
  async getById(userId, authId) {
    let data = await _repository.findOne({ authorId: userId });
    if (!data) {
      throw new ApiError("Invalid User Id", 400);
    }
    return data;
  }

  async create(rawData) {
    let data = await _repository.create(rawData);
    return data;
  }

  async edit(outingId, authorId, update) {
    let data = await _repository.findOneAndUpdate(
      { _id: outingId, authorId: authorId },
      update,
      {
        new: true
      }
    );
    if (!data) {
      throw new ApiError("Invalid User Id", 400);
    }
    return data;
  }

  async delete(outingId, authorId) {
    let data = await _repository.findOneAndRemove({
      _id: outingId,
      authorId: authorId
    });
    if (!data) {
      throw new ApiError("Invalid User Id", 400);
    }
  }
  async setActiveOutings() {
    let date = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getUTCFullYear();

    let outings = await _repository.find();
    let activeOutings = outings.filter(o => {
      let outingDate = new Date(o.date);
      console.log(outingDate);

      return (
        outingDate.getDate() == date &&
        outingDate.getMonth() == month &&
        outingDate.getUTCFullYear() == year
      );
    });

    if (activeOutings) {
      activeOutings.forEach(o => {
        {
          o.active = true;
        }
        this.edit(o._id, o.authorId, o);
      });
    }
    return activeOutings;
  }
}

const _outingService = new OutingService();
export default _outingService;
