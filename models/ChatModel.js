const mongoose = require("mongoose");
const { Schema } = mongoose;

const ChatSchema = new Schema(
  {
    ChatName: {
      type: String,
      trim: true,
      required: true,
    },
    IsGroupChat: {
      type: Boolean,
      required: true,
      default: false,
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    LatestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "message",
    },
    GroupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

const Chat = mongoose.model("chat", ChatSchema);
module.exports = Chat;
