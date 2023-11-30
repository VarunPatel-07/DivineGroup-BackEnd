const mongoose = require("mongoose");
const { Schema } = mongoose;
const TwoStepVerificationSchema = new Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  verificationToken: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    expires: 300,
    default: Date.now(),
  },
});
const TwoStepVerification = mongoose.model('TwoStepVerification' , TwoStepVerificationSchema)
module.exports = TwoStepVerification