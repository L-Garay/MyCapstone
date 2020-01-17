import mongoose from "mongoose";
import Drink from "../models/Outing";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Drink", Drink);

class DrinkService {
  async getOutingDrinks(outingId, userId) {
    let data = await _repository.find({ outingId: outingId, userId: userId });
    if (!data) {
      throw new ApiError("Invalid User Id", 400);
    }
    return data;
  }
  async getAttendeeDrinks(attendeeId) {
    let data = await _repository.find({ attendeeId: attendeeId });
    if (!data) {
      throw new ApiError("Invalid User Id", 400);
    }
    return data;
  }

  async create(rawData) {
    let data = await _repository.create(rawData);
    return data;
  }
}

const _drinkService = new DrinkService();
export default _drinkService;
