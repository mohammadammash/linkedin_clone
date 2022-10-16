const getAllJobs = () => {
  res.send("getAllJobs- user");
};

const searchAvailableJobs = () => {
  res.send("search Available jobs - user");
};

const applyForJob = () => {
  res.send("apply for job - user");
};


module.exports = {
  getAllJobs,
  searchAvailableJobs,
  applyForJob,
};
