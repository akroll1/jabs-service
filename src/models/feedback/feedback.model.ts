import mongoose from "mongoose";
import { Feedback } from "src/common/interfaces";
import { FeedbackType } from "src/common";

export const FeedbackSchema = new mongoose.Schema(
  {
    sub: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      enum: Object.values(FeedbackType),
    },
    comments: {
      type: String,
      required: false,
      trim: true,
      default: null,
    },
  },
  { timestamps: true }
);

// Prevent model overwrite error in serverless environments (like Next.js/Lambda)
const FeedbackModel = (mongoose.models.Feedback as mongoose.Model<Feedback>) || mongoose.model<Feedback>("Feedback", FeedbackSchema);

export default FeedbackModel;
