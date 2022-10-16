const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

//ROUTES
const authRoutes = require("./routes/auth.routes");
qpp.use("/auth", authRoutes); //auth for both user and company

const userRoutes = require("./routes/user.routes");
app.use("/user", userRoutes); //normal user edit profile - follow companies

const userJobRoutes = require("./routes/user_job.routes");
app.use("/user_job", userJobRoutes); //users-jobs related functions

const companyJobRoutes = require("./routes/company_job.routes");
app.use("/company_job", companyJobRoutes); //companies-jobs related functions

//SERVER PORT LISTEN
app.listen(process.env.SERVER_PORT, (err) => {
  if (err) console.log(err);
  console.log("---------------------------");
  console.log("Server started");
  console.log("---------------------------");
});
