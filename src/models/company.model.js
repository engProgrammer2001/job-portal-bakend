import mongoose from "mongoose";

// Define a Company Schema
const companySchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      //   required: true,
    },
    companyTagLine: {
      type: String,
    },
    companyLogo: {
      type: String,
      default: "https://i.pinimg.com/736x/15/0f/a8/150fa8800b0a0d5633abc1d1c4db3d87.jpg"
    },
    companyWebsite: {
      type: String,
    },
    companyNumber: {
      type: String,
    },
    companyAddress: {
      type: String,
    },
    companyFacebook: {
      type: String,
    },
    companyTwitter: {
      type: String,
    },
    companyDescription: {
      type: String,
    },
    companyContent: {
      type: String,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Company = mongoose.model("Company", companySchema);
export default Company;
