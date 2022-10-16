const jwt = require("jsonwebtoken");
const UserModel = require("../database/models/user.models");
const { CompanyModel } = require("../database/models/company.models");

const authMiddleware = async (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: "Unauthorized" });
  token = req.headers.authorization.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    let user;
    if (decoded.user_type === "company") user = await CompanyModel.findOne({ email: decoded.email }).lean();
    else if (decoded.user_type === "user") user = await UserModel.findOne({ email: decoded.email }).lean();

    user.user_type = decoded.user_type;
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = authMiddleware;
