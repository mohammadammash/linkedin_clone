const UserModel = require("../../database/models/user.models");
const { CompanyModel } = require("../../database/models/company.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = async (email, password) => {
  if (!email || !password) return false;

  let user_type = "";
  let user = await UserModel.findOne({ email }).select("+password");
  if (user) {
    user_type = "user";
  } else {
    user = await CompanyModel.findOne({ email }).select("+password");
    if (!user) return false;
    user_type = "company";
  }

  const validCredentials = bcrypt.compareSync(password, user.password);
  if (!validCredentials) return false;

  const token = jwt.sign({ email: user.email, name: user.name, user_type }, process.env.JWT_SECRET_KEY, {
    expiresIn: "24h",
  });

  return token;
};

module.exports = loginUser;
