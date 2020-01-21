import mongoose from "mongoose";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const Photo = new Schema(
  {
    authorId: { type: ObjectId, required: true },
    outingId: { type: ObjectId, required: false },
    location: { type: Array, required: false },
    image: { type: Buffer }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Photo;
