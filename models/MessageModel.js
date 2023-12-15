const mongoose = require("mongoose");
const { Schema } = mongoose;

const MessageModelSchema = new Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    Content: {
      type: String,
      require: true,
      trim: true,
    },
    ChatId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "chat",
    },
  },
  {
    timestamps: true,
  }
);
const MessageModel = mongoose.model("messages", MessageModelSchema);
module.exports = MessageModel;