const mongoose = require("mongoose");

export const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: "name is required",
  },
  email: {
    type: String,
    required: "email is required",
    unique: true,
  },
  password: {
    type: String,
    required: "password is required",
    select: false,
  },
  offer: {
    type: String,
    required: "what company offers is required",
  },
  services: {
    type: String,
    required: "type of services is required",
  },
  location: {
    type: String,
    required: "location is required",
  },
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  postedJobs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
    },
  ],
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
