const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
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
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
