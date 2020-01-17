import mongoose from "mongoose";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const Photo = new Schema(
  {
    authorId: { type: ObjectId, ref: "User", required: true },
    outingId: { type: ObjectId, ref: "Outing", required: false },
    location: { type: Array, required: false },
    image: { type: Buffer }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Photo;
