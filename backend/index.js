const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();
require("./database/connection.database");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//ROUTES
const authMiddleware = require("./middlewares/auth.middlewares");
const checkIfUserMiddleware = require("./middlewares/checkIfUser.middlewares");
const checkIfCompanyMiddleware = require("./middlewares/checkIfCompany.middlewares.js");

const authRoutes = require("./routes/auth.routes");
app.use("/", authRoutes); //auth for both user and company

const userRoutes = require("./routes/user.routes");
app.use("/user", authMiddleware, checkIfUserMiddleware, userRoutes); //normal user edit profile - follow companies

const companyRoutes = require("./routes/company.routes");
app.use("/company", authMiddleware, checkIfCompanyMiddleware, companyRoutes); //companies-jobs related functions

app.use("*", (req, res) => res.status(404).json({ message: "Not Found" })); //Any undefined route result

//SERVER PORT LISTEN
app.listen(process.env.SERVER_PORT, (err) => {
  if (err) console.log(err);
  console.log("---------------------------");
  console.log("Server started");
  console.log("---------------------------");
});
