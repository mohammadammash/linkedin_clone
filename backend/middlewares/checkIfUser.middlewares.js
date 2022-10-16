const CheckIfUser = async (req, res, next) => {
  try {
    const { user_type } = req.user;

    if (user_type !== "user") return res.status(401).json({ message: "Unauthorized" });

    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = CheckIfUser;
