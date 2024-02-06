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
        // Reference to your User model
      },
    ],
    LatestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "messages",
    },
    GroupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    ProfileImage: {
      type: String,
    },
  },
  { timestamps: true }
);

const Chat = mongoose.model("chat", ChatSchema);
module.exports = Chat;
