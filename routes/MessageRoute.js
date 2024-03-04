const express = require("express");
const routes = express.Router();
const { body, validationResult } = require("express-validator");
const fetchusers = require("../middleware/fetchusers");
const MessageModel = require("../models/MessageModel");
const Chat = require("../models/ChatModel");
const Users = require("../models/Users");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { handleCloudUpload, SendChatImages } = require("../middleware/Multer");
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
      });

    success = true;

    res.json({ FetchMessage, success });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "there is an error while fetching the message" });
  }
});
// Send Images As Message API
routes.post("/SendImages", SendChatImages, fetchusers, async (req, res) => {
  const { chatId, content } = req.body;
  const imagearr = req.files;

  console.log(imagearr, req.body);
  let ChatsImagesArray = imagearr.ChatImages?.map((images) => images);
  try {
    const CloudImage = [];
    for (const SingleImage of ChatsImagesArray) {
      const GalleryBase64 = Buffer.from(SingleImage.buffer).toString("base64");
      let ChatsImagesDataURI =
        "data:" + SingleImage.mimetype + ";base64," + GalleryBase64;
      const CloudChatImg = await handleCloudUpload(ChatsImagesDataURI);

      CloudImage.push(CloudChatImg.secure_url);
    }
    console.log(CloudImage);
    var Message = await MessageModel.create({
      sender: req.user,
      Content: content,
      ChatId: chatId,
      ContentImage: CloudImage,
    });

    Message = await Message.populate("sender", "name username ProfileImage");
    Message = await Message.populate("ChatId");
    Message = await Users.populate(Message, {
      path: "ChatId.users",
      select: "-password",
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
  }
});
// Edit Message API
routes.put("/EditMessage/:id", upload.none(), fetchusers, async (req, res) => {
  const { content } = req.body;

  try {
    let Message = await MessageModel.findOne({ _id: req.params.id });
    if (!Message) return console.log("The Message With This Id is Not Found");
    let NewMessage = {};
    if (content) {
      NewMessage.Content = content;
      NewMessage.Edited = true;
    }

    if (Message.sender._id == req.user) {
      Message = await MessageModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: NewMessage,
        },
        {
          new: true,
        }
      );

      Message = await Message.populate("sender", "name username ProfileImage");
      Message = await Message.populate("ChatId");
      Message = await Users.populate(Message, {
        path: "ChatId.users",
        select: "-password",
      });
      success = true;

      return res.json({ success, Message });
    } else {
      success = false;
      return res.json({
        success,
        message: "Only Sender Is Allowed To Delete The Chats",
      });
    }
  } catch (error) {
    console.log(error);
  }
});
// Delete Message API
routes.delete(
  "/DeleteMessage/:id",
  upload.none(),
  fetchusers,
  async (req, res) => {
    try {
      let Message = await MessageModel.findOne({ _id: req.params.id });
      if (!Message) return console.log("The Message With This Id is Not Found");

      await MessageModel.findByIdAndDelete(req.params.id);
      success = true;
      console.log(Message);
      return res.json({ success, Message });
    } catch (error) {
      console.log(error);
    }
  }
);
routes.delete("/clearAllChats/:id", async (req, res) => {
  try {
    const chat = await MessageModel.find({ ChatId: req.params.id });

    chat.forEach(async (chatInfo) => {
      await MessageModel.findByIdAndDelete(chatInfo._id);
    });
    success = true;
    res.json({ success });
  } catch (error) {}
});
module.exports = routes;
