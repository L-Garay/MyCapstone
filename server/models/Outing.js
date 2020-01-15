import mongoose from "mongoose";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const Outing = new Schema(
  {
    authorId: { type: ObjectId, ref: "User", required: true, unique: true },
    title: { type: String, required: true },
    date: { type: Date },
    startingPoint: { type: String, required: true },
    attendies: { type: Array }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Outing;
