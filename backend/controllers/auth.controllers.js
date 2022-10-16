const UserModel = require("../database/models/user.models");
const { userFollowCompany } = require("./user.controllers");

const registerUser = async (req, res) => {
  const { name, email, profile_url, password, age, country } = req.body;
  //validating no missing credentials
  if (!name || !email || !profile_url || !password || !age || !country) res.send("Missing credentials");

  try {
    const new_user = new UserModel();
    new_user.name = name;
    new_user.email = email;
    new_user.profile_url = profile_url;
    new_user.password = password;
    new_user.age = age;
    new_user.country = country;

    await new_user.save();
    res.status(200).send("User Added");
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

const registerCompany = (req, res) => {
  res.send("registerCompanyyy");
};

const loginUser = (req, res) => {
  res.send("loginUserrr");
};

module.exports = {
  loginUser,
  registerUser,
  registerCompany,
};
