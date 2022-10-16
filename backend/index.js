const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());


//ROUTES
const userRoutes = require("./routes/user.route");
app.use("/user", userRoutes);

const companyRoutes = require("./routes/company.route");
app.use("/company", companyRoutes);

const jobRoutes = require("./routes/job.route");
app.use("/job", jobRoutes);


//SERVER PORT LISTEN
app.listen(process.env.SERVER_PORT, (err) => {
  if (err) console.log(err);
  console.log("---------------------------");
  console.log("Server started");
  console.log("---------------------------");
});