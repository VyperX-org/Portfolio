import mongoose from "mongoose";
import { type } from "node:os";

const planSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    tier: {
      type: String,
      required: true,
    },
    tagline: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    discountedPrice: {
      type: Number,
      required: true,
    },
    period: {
      type: String,
      default: null,
    },
    bestFor: [String],
    sections: [{
      category: String,
      items: [String],
  },],
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required : true
    },

    email:{
      type: String,
      required: true
    },

    phone:{
      type: String
    },

    business: {
      type: String,
      required: true
    },

    businessSector: {
      type: String,
      required: true
    },

    service: {
      type: String,
      required: true
    },

    message: {
      type: String
    },
    
    plans: [planSchema],

    totalOriginal: {
      type: Number,
      required: true,
    },

    totalDiscounted: {
      type: Number,
      required: true,
    },

    totalSavings: {
      type: Number,
      required: true,
    },

    submittedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", orderSchema);