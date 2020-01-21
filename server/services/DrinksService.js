import mongoose from "mongoose";
import Drink from "../models/Outing";
import ApiError from "../utils/ApiError";
import _attendee from "../services/AttendeeService";
import Attendee from "../models/Attendee";
import _attendeeService from "../services/AttendeeService";

const _repository = mongoose.model("Drink", Drink);
const _attendeeRepository = mongoose.model("Attendee", Attendee);

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

  async create(sessionId, rawData) {
    let data = await _repository.create(rawData);
    let attendeeDrinks = await _repository.find({
      attendeeId: data.attendeeId
    });
    let drinkCount = 0;
    for (let count = 0; count < attendeeDrinks.length; count++) {
      drinkCount = count;
    }
    let attendee = await _attendeeRepository.find({
      _id: data.attendeeId
    });
    attendee.status = drinkCount;
    let updatedAttendee = await _attendeeService.edit(
      attendee._id,
      sessionId,
      attendee
    );
    return updatedAttendee;
  }
}

const _drinkService = new DrinkService();
export default _drinkService;
