const express = require("express");
const routes = express.Router();
const { body, validationResult } = require("express-validator");
const fetchusers = require("../middleware/fetchusers");
const MessageModel = require("../models/MessageModel");
const Chat = require("../models/ChatModel");
const Users = require("../models/Users");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
let success = false;
// ? NOW WE CREAT THE ROUTE TO CREAT MESSAGE
// requirement
// * 1 => chat id
// * 2 => message
// to test the api ==> {http://localhost:500/app/api/message/sendMessage}

routes.post(
  "/sendMessage",
  [
    body("content", "message can not be empty").exists(),
    body("chatId", "the id of the chat is required").exists(),
  ],
  upload.none(),
  fetchusers,
  async (req, res) => {
    const { chatId, content } = req.body;

    const result = validationResult(req);
    if (!result) {
      return res.json({ result });
    }
    try {
      var Message = await MessageModel.create({
        sender: req.user,
        Content: content,
        ChatId: chatId,
      });

      Message = await Message.populate("sender", "name username ProfileImage");
      Message = await Message.populate("ChatId");
      Message = await Users.populate(Message, {
        path: "chats.users",
        select: "name ProfileImage username",
      });
      await Chat.findByIdAndUpdate(
        chatId,
        { $set: { LatestMessage: Message } },
        { new: true }
      );
      success = true;

      res.status(200).json({ success, Message });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "there is an error while sending message" });
    }
  }
);
// ? NOW WE CREATE AN API TO FETCH ALL THE CHAT  FOR A SPECIFIC CHAT
// to test the api ==> {http://localhost:500/app/api/message/fetchMessage/:id}
routes.get("/fetchMessage/:id", fetchusers, async (req, res) => {
  try {
    let FetchMessage = await MessageModel.find({ ChatId: req.params.id })
      .populate("sender", "name username ProfileImage")
      .populate({
        path: "ChatId",
        populate: {
          path: "users",
          select: "username name ProfileImage",
        },
      })
      .sort({ updatedAt: 1 });

    success = true;

    res.json({ FetchMessage, success });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "there is an error while fetching the message" });
  }
});
module.exports = routes;
