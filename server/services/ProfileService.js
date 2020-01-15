import mongoose from "mongoose";
import Profile from "../models/Profile";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Profile", Profile);

class ProfileService {
  async getByUserId(userId, authId) {
    if (userId !== authId) {
      throw new ApiError("This isn't your profile", 400);
    } else {
      let data = await _repository.findOne({ userId: userId });
      if (!data) {
        throw new ApiError("Invalid User Id", 400);
      }
      return data;
    }
  }

  async create(rawData) {
    let data = await _repository.create(rawData);
    return data;
  }

  async edit(userId, authId, update) {
    if (userId !== authId) {
      throw new ApiError("This isn't your profile", 400);
    } else {
      let data = await _repository.findOneAndUpdate(
        { userId: userId },
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
  }

  async delete(userId, authId) {
    if (userId !== authId) {
      throw new ApiError("This isn't your profile", 400);
    } else {
      let data = await _repository.findOneAndRemove({
        userId: userId
      });
      if (!data) {
        throw new ApiError("Invalid User Id", 400);
      }
    }
  }
}

const _profileService = new ProfileService();
export default _profileService;
