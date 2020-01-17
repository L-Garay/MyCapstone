import mongoose from "mongoose";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const Bar = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
    location: { type: Array, required: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Bar;
