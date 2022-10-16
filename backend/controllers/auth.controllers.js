const registerUser = (req, res) => {
  res.send("registerUserrr");
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
