const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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
  age: {
    type: String,
    required: "age is required",
  },
  country: {
    type: String,
    required: "country is required",
  },
  profile_url: {
    type: String,
    required: "profile_url is required",
  },
  followingCompanies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
