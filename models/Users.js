const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    
  },
  password: {
    type: String,
    required: true,
   
  },
  verified: {
    type: Boolean,
    required: true,
    default: false,
  },
  role: {
    type: String,
    required: true,
    default: "user",
  },
  twoStepVerification: {
    type: Boolean,
    required: true,
    default: false,
  },
});
const User = mongoose.model("users", UserSchema);
module.exports = User;
