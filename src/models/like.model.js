import mongoose, { Schema } from "mongoose;";

const likeSchema = new Schema(
  {
    video: {
      type: Schema.Types.ObjectID,
      ref: "Video",
    },
    comment: {
      type: Schema.Types.ObjectID,
      required: "Comment",
    },
    tweet: {
      type: Schema.Types.ObjectID,
      required: "Tweet",
    },
    likedBy: {
      type: Schema.Types.ObjectID,
      required: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const Like = mongoose.model("Like", likeSchema);
