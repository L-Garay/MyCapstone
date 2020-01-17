import mongoose from "mongoose";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const Drink = new Schema(
  {
    userId: { type: ObjectId, ref: "User", required: true },
    attendeeId: { type: ObjectId, ref: "attendeeId", required: true },
    outing: { type: ObjectId, ref: "Outing", required: true },
    bar: { type: ObjectId, ref: "Bar", required: true },
    description: { type: String, required: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Drink;
