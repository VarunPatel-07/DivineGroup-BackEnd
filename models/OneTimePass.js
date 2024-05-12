const mongoose = require("mongoose");
const { Schema } = mongoose;
const OneTimePassSchema = new Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  oneTimeToken: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    expires: 1000,
    default: Date.now(),
  },
});
const OneTimePassword = mongoose.model("OneTimePassword", OneTimePassSchema);
module.exports = OneTimePassword;
