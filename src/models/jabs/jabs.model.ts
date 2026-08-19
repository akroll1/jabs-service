import mongoose from "mongoose";
import { IJab } from "src/domain/jabs";
import { SUBSCRIBABLE_JAB_TYPES } from "src/common";

export const JabSchema = new mongoose.Schema(
  {
    email: { 
      type: String, 
      required: true, 
      index: true,
      lowercase: true, 
      trim: true 
    },
    type: { 
      type: String, 
      required: true,
      enum: SUBSCRIBABLE_JAB_TYPES, // VALIDATION: real types only; the ALL sentinel is never stored
    },
    canContact: { 
      type: Boolean, 
      required: true,
      default: false,
    },
    message: {
      type: String,
      required: false,
      trim: true,
    },
    unsubscribedAt: {
      type: Date,
      required: false,
      default: null,
    },
  },
  { timestamps: true }
);

// CONSTRAINT: Ensures one email cannot have two 'NEWSLETTER' entries, 
// but can have one 'NEWSLETTER' and one 'BETA'.
JabSchema.index({ email: 1, type: 1 }, { unique: true });

// Prevent model overwrite error in serverless environments (like Next.js/Lambda)
const JabModel = (mongoose.models.Jab as mongoose.Model<IJab>) || mongoose.model<IJab>("Jab", JabSchema);

export default JabModel;