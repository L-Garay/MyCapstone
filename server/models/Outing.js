import mongoose from "mongoose";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const Outing = new Schema(
  {
    authorId: { type: ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    date: { type: Date, required: true },
    startingPoint: { type: String },
    bars: { type: Array }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Outing;
