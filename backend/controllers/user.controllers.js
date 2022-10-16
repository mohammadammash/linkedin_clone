const updateUser = (req, res) => {
  res.json(req.user);
};

const userFollowCompany = (req, res) => {
  res.send("FolowCompanyyy");
};

module.exports = {
  updateUser,
  userFollowCompany,
};
