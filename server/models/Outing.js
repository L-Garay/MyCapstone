import mongoose from "mongoose";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const Outing = new Schema(
  {
    authorId: { type: ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    date: { type: Date, required: true },
    startingPoint: { type: String },
    barsList: { type: Array },
    attendees: { type: Array },
    active: { type: Boolean }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Outing;
