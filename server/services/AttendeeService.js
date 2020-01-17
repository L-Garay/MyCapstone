import mongoose from "mongoose";
import Attendee from "../models/Attendee";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Attendee", Attendee);

class AttendeeService {
  async getAllAttendees() {
    let data = await _repository.find();
    if (!data) {
      throw new ApiError("Invalid User Id", 400);
    }
    return data;
  }

  async getOutingAttendees(outingId) {
    let data = await _repository.find({ outingId: outingId });
    if (!data) {
      throw new ApiError("Invalid Outing Id", 400);
    }
    return data;
  }
  async getById(attendeeId) {
    let data = await _repository.findOne({ _id: attendeeId });
    if (!data) {
      throw new ApiError("Invalid User Id", 400);
    }
    return data;
  }

  async create(rawData) {
    let data = await _repository.create(rawData);
    return data;
  }

  async edit(attendeeId, userId, update) {
    let data = await _repository.findOneAndUpdate(
      { _id: attendeeId, userId: userId },
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

  async delete(attendeeId, userId) {
    let data = await _repository.findOneAndRemove({
      _id: attendeeId,
      attendeeId: attendeeId
    });
    if (!data) {
      throw new ApiError("Invalid User Id", 400);
    }
  }
}

const _attendeeService = new AttendeeService();
export default _attendeeService;
