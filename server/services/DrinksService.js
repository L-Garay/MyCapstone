import mongoose from "mongoose";
import Drink from "../models/Drink";
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
    console.log("Look Service", rawData);
    let data = await _repository.create(rawData);
    console.log("Look at this", rawData);

    let attendeeDrinks = await _repository.find({
      attendeeId: data.attendeeId
    });
    console.log("ATTENDEE DRINKS", attendeeDrinks);

    let drinkCount = attendeeDrinks.length;
    console.log(drinkCount);

    let attendee = await _attendeeRepository.findOne({
      _id: data.attendeeId
    });
    attendee.status = drinkCount;
    console.log("This is your attendee", attendee);

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
