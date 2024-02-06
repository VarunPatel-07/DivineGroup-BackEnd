require("dotenv").config();
const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_DATABASE_URI;
console.log(mongoURI);
// we are running a connect to mongop function which is used to connect to our mongodb database
const ConnectToMongo = async () => {
  await mongoose.connect(mongoURI, { serverSelectionTimeoutMS: 6000 });
  console.log("Database is connected");
};
module.exports = ConnectToMongo;
