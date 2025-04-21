import mongoose, { Schema } from "mongoose;";

const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectID, //One who is subscribing
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectID, //One to whom subscriber is subscribing
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
