import mongoose from "mongoose";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const Drink = new Schema(
  {
    userId: { type: ObjectId, ref: "User", required: true },
    outingId: { type: ObjectId, ref: "Outing", required: true },
    drinks: { type: Number },
    status: { type: Number },
    goneHome: { type: Boolean },
    location: { type: Object }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Drink;
