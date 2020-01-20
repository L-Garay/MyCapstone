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
  async getById(userId, authId) {
    let data = await _repository.findOne({ userId: userId });
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
}

const _outingService = new OutingService();
export default _outingService;
