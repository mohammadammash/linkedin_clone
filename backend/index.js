const express = require("express");
const app = express();
require("dotenv").config();


app.use(express.json());

//ROUTES
app.get('/',(req,res)=>{
    res.send('Hello NodeJS');
})

app.listen(process.env.SERVER_PORT, (err) => {
  if (err) console.log(err);
  console.log("---------------------------");
  console.log("Server started");
  console.log("---------------------------");
});
