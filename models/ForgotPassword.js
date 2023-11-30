const mongoose = require("mongoose");
const { Schema } = mongoose;

const ForgotPassSchema = new Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  ForgotPassToken: {
    type: String,
    unique: true,
    required: true,
  },
  ceatedAt: {
    type: Date,
    required: true,
    expires: 3600,
    default: Date.now(),
  },
});

const ForgotPass = mongoose.model('forgotPassword' , ForgotPassSchema )
module.exports = ForgotPass;
