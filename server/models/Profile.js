import mongoose from "mongoose";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const Profile = new Schema(
  {
    userId: { type: ObjectId, required: true, unique: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    phone: { type: String, required: true, unique: true },
    picture: { type: String, required: false },
    status: { type: Number },
    address: { type: String, required: true },
    tmh: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Profile;
