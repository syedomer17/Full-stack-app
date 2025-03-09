import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    dimensions: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    propertyType: {
      type: String,
      enum: ["Apartment", "House", "Villa"],
      required: true,
    },
    status: {
      type: String,
      enum: ["Available", "Sold", "Pending"],
      default: "Available",
      required: true,
    },
    bhk: {
      type: Number,
      required: true,
    },
    listedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const propertyModel = mongoose.model("property", propertySchema, "property");

export default propertyModel;
