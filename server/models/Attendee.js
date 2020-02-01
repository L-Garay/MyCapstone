import mongoose from "mongoose";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const Attendee = new Schema(
  {
    userId: { type: ObjectId, required: true },
    outingId: { type: ObjectId, required: true },
    name: { type: String },
    drinks: { type: Array },
    status: { type: Number },
    goneHome: { type: Boolean, default: false },
    location: { type: Object }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Attendee;
