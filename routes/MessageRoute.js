const express = require("express");
const routes = express.Router();
const { body, validationResult } = require("express-validator");
const fetchusers = require("../middleware/fetchusers");
const MessageModel = require("../models/MessageModel");
const Chat = require("../models/ChatModel");
const Users = require("../models/Users");

// ? NOW WE CREAT THE ROUTE TO CREAT MESSAGE
// requirement
// * 1 => chat id
// * 2 => message
// to test the api ==> {http://localhost:500/app/api/message/sendmessage}

routes.post(
  "/sendmessage",
  [
    body("content", "message can not be empty").exists(),
    body("chatId", "the id of the chat is required").exists(),
  ],
  fetchusers,
  async (req, res) => {
    const { chatId, content } = req.body;
    const result = validationResult(req);
    if (!result) {
      return res.json({ result });
    }
    try {
      let Message = await MessageModel.create({
        sender: req.user,
        Content: content,
        ChatId: chatId,
      });

      Message = await Message.populate("sender", "name username");
      Message = await Message.populate("Content");
      Message = await Users.populate(Message, {
        path: "chats.users",
        select: "name pic username",
      });
      await Chat.findByIdAndUpdate(chatId, { LatestMessage: Message });
      res.status(200).json(Message);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "there is an error while sending message" });
    }
  }
);
// ? NOW WE CREATE AN API TO FETCH ALL THE CHAT  FOR A SPECIFIC CHAT
// to test the api ==> {http://localhost:500/app/api/message/fetchmessage/:id}
routes.get("/fetchmessage/:id", fetchusers, async (req, res) => {
  try {
    let FetchMessage = await MessageModel.find({ ChatId: req.params.id })
      .populate("sender", "username pic email")
        .populate("ChatId");
      res.status(200).json(FetchMessage)
  } catch (error) {
      console.log(error)
    return res
      .status(500)
      .json({ message: "there is an error while fetching the message" });
  }
});
module.exports = routes;
