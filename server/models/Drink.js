import mongoose from "mongoose";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const Drink = new Schema(
  {
    userId: { type: ObjectId, required: true },
    attendeeId: { type: ObjectId, required: true },
    outing: { type: ObjectId, required: true },
    location: { type: Array, required: false },
    description: { type: String, required: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Drink;
