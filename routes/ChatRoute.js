const express = require("express");
const routes = express.Router();
const { body, validationResult } = require("express-validator");
const fetchusers = require("../middleware/fetchusers");
const Chat = require("../models/ChatModel");
const Users = require("../models/Users");
let success = false;
// ? THIS IS THE FIRST API FOR THE CHAT SYSTEM ==> this routes is used to find the chat and if the chat exist then we will use that chat other wise we will create new chat
// to test the api ==> {http://localhost:500/app/api/chat/createchat}
routes.post(
  "/createchat",
  [body("userId", "id of the user is require to stat the chatting ").exists()],
  fetchusers,
  async (req, res) => {
    const { userId } = req.body;
    try {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.json({ result });
      }
      // now we are find is there is any pre existing chat or note if we find the chat then we populate the "users" and "LatestMessage" because if we not populate the users and latestmessage then we only get the object id but we also want the info  so because of this we populate
      let chat = await Chat.find({
        IsGroupChat: false,
        $and: [
          { users: { $elemMatch: { $eq: userId } } },
          { users: { $elemMatch: { $eq: req.user } } },
        ],
      })
        .populate("users", "-password")
        .populate("LatestMessage");

      chat = await User.populate(chat, {
        path: "LatestMessage.sender",
        select: "name avatar username",
      });
      if (chat.length > 0) {
        res.send(chat);
      } else {
        const NewChat = await Chat.create({
          ChatName: "sender",
          IsGroupChat: false,
          users: [req.user, userId],
        });
        const FullChat = await Chat.findOne({ _id: NewChat._id }).populate(
          "users",
          "-password"
        );
        res.status(200).json(FullChat);
      }
    } catch (error) {
      res.json({
        message: "there is an error while creatin a chat",
        error: error,
        success: success,
      });
    }
  }
);

// ? FETCH CHAT ROUTE
// to test the api ==> {http://localhost:500/app/api/chat/fetchchat}
routes.get("/fetchchat", fetchusers, async (req, res) => {
  try {
    const FetchChat = await Chat.find({
      users: { $elemMatch: { $eq: req.user } },
    })
      .populate("users", "-password")
      .populate("LatestMessage")
      .populate("GroupAdmin", "-password")
      .sort({ updatedAt: -1 });

    const AllChat = await Users.populate(FetchChat, {
      path: "LatestMessage.sender",
      select: "name username",
    });
    res.send(AllChat);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "there is an erroe while featching the error" });
  }
});

// ? NOW WE CREATING AN API TO CREAT GROUP CHAT
// to test the api ==> {http://localhost:500/app/api/chat/creatgroupchat}
routes.post(
  "/creatgroupchat",
  [
    body(
      "usersId",
      "minimum of two users are riquired to create a group chat"
    ).isLength({ min: 2 }),
    body(
      "chatName",
      "the name of the chat is required to create a chat"
    ).exists(),
  ],
  fetchusers,
  async (req, res) => {
    try {
      const { usersId, chatName } = req.body;
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.json({ result });
      }

      const UsersArray = JSON.parse(usersId);
      UsersArray.push(req.user);

      let GroupChat = await Chat.create({
        ChatName: chatName,
        IsGroupChat: true,
        users: UsersArray,
        GroupAdmin: req.user,
      });
      const FullGroupChat = await Chat.findOne({ _id: GroupChat._id })
        .populate("users", "-password")
        .populate("GroupAdmin", "-password");
      res.send(FullGroupChat);
    } catch (error) {
      return res.json({
        message: "there is an error while creating an group chat",
      });
    }
  }
);

// ? NOW WE CREAT THE API TO RENAME THE NAME  OF THE GROUP
// requirement
// * 1 => chat id
// * 2 => the name of the chat
// to test the api ==> {http://localhost:500/app/api/chat/renamechat/:id}
// 657b284166a55a37c800f1dc
routes.put(
  "/renamechat/:id",

  fetchusers,
  async (req, res) => {
    try {
      const { chatName } = req.body;

      const NewChat = {};
      if (chatName) {
        NewChat.ChatName = chatName;
      }
      const updatedChat = await Chat.findByIdAndUpdate(
        req.params.id,
        {
          $set: NewChat,
        },
        {
          new: true,
        }
      );
      res.status(200).json({ message: "the chat is updated", updatedChat });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "there is an error while renaming the chat " });
    }
  }
);
// ? NOW WE WILL CREATING A API TO ADD NEW MEMBER IN THE GROUP
// requirement
// * 1 => chat id
// * 2 => the id of the user which you want to add in the group
// * 3 => we also check that the user we want  to add are in the group ?
// to test the api ==> {http://localhost:500/app/api/chat/addmembertochat/:id}
routes.put(
  "/addmembertochat/:id",
  [
    body(
      "usersId",
      "the id of the user is required to add in the group"
    ).exists(),
  ],
  async (req, res) => {
    try {
      const { usersId } = req.body;
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.json({ result });
      }
      const chat = await Chat.findById(req.params.id).select("users");
     
      if (chat.users.includes(usersId)) {
        return res.status(500).json({ message: "the user already exists" });
      }

     
      const UpdatedChat = await Chat.findByIdAndUpdate(
        req.params.id,
        {
          $push: { users: usersId },
        },
        {
          new: true,
        }
      );
      res
        .status(200)
        .json({ message: "the new member is added in the chat", UpdatedChat });
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: "there is an error while adding user in the group",
      });
    }
  }
);
module.exports = routes;
