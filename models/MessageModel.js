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
    Chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "chat",
    },
  },
  {
    timestamps: true,
  }
);
