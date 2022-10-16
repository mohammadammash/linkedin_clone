const CheckIfCompany = async (req, res, next) => {
  try {
    const { user_type } = req.user;

    if (user_type !== "company") return res.status(401).json({ message: "Unauthorized" });

    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = CheckIfCompany;
