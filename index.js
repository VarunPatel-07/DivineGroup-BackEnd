const express = require("express");
const ConnectToMongo = require("./database");
var cors = require("cors");
//  we are gatting the the link of database and port no from the dotenv file which is safe and only develper of the app can see it
require("dotenv").config();

// we are running a connect to mongop function which is used to connect to our mongodb database
ConnectToMongo();
const app = express();
const port = process.env.APP_PORT;


app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/app/api/auth", require("./routes/auth"));
app.use("/app/api/project", require("./routes/project"));
app.use(
  "/app/api/customerContactInfo",
  require("./routes/customerContactInfo")
);
app.use("/app/api/chat", require("./routes/ChatRoute"));
app.use("/app/api/message", require("./routes/MessageRoute"));
app.listen(port, () => {
  console.log(`backend app listing on http://localhost:${port}`);
});
