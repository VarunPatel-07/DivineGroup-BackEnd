const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClientsMailSchema = new Schema(
  {
    receiverId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customerContactForm",
        // Reference to your customerContactForm model
      },
    ],
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    receiverEmail: [
      {
        type: String,
        required: true,
      },
    ],
    senderEmail: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
    },
    files: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const ClientsMails = mongoose.model("clientsMail", ClientsMailSchema);
module.exports = ClientsMails;
