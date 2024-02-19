require("dotenv").config();
const express = require("express");
const ConnectToMongo = require("./database");
var cors = require("cors");

// we are running a connect to mongop function which is used to connect to our mongodb database
ConnectToMongo();
const app = express();
const port = process.env.APP_PORT;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/app/api/auth", require("./routes/auth"));
app.use("/app/api/project", require("./routes/project"));
app.use(
  "/app/api/customerContactInfo",
  require("./routes/customerContactInfo")
);
app.use("/app/api/chat", require("./routes/ChatRoute"));
app.use("/app/api/message", require("./routes/MessageRoute"));
const server = app.listen(port, () => {
  console.log(`backend app listing on http://localhost:${port}`);
});
const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: true,
  },
});
io.on("connection", (socket) => {
  socket.on("initialize", (UserData) => {
    socket.join(UserData._id);
    socket.emit("connected");
  });
  socket.on("JoinChatRoom", (Room) => {
    console.log(`user joined to the one ${Room}`);
    socket.join(Room);
    console.log(`user joined to the two ${Room}`);
  });

  // typing
  socket.on("startTyping", (Room) =>
    socket.broadcast.emit("startTyping", Room)
  );
  socket.on("stopTyping", (Room) => socket.broadcast.emit("stopTyping", Room));
  // IS new message received

  socket.on("NewChatCreatedBackendSocket", (NewChatInfo) => {
    socket.broadcast.emit("NewChatCreated", NewChatInfo);
  });
  socket.on("NewMessageSocket", (NewMessageReceived) => {
    var Chat = NewMessageReceived;
    if (!Chat.ChatId.users)
      return console.log("chat.user is not defined", Chat.ChatId.users);
    Chat.ChatId.users.forEach((user) => {
      if (user == NewMessageReceived.sender._id) {
      } else {
        socket.in(user).emit("MessageReceived", NewMessageReceived);
      }
    });
  });
  socket.on("EditMessageSocket", (EditedMessageReceived) => {
    var Chat = EditedMessageReceived;
    console.log(Chat);
    if (!Chat.ChatId.users)
      return console.log("chat.user is not defined", Chat.ChatId.users);

    socket.broadcast.emit("MessageEdited", EditedMessageReceived);
  });
  socket.on("DeleteMessageSocket", (DeletedMessageReceived) => {
    socket.broadcast.emit("MessageDeleted", DeletedMessageReceived);
  });
  socket.on("NewGroupCreatedBackEndSocket", (groupInformation) => {
    socket.broadcast.emit("NewGroupCreated", groupInformation);
  });
  socket.on("ChatInfoUpdatedBackEndSocket", (UpdatedChatInfo) => {
    socket.broadcast.emit("ChatInfoUpdated", UpdatedChatInfo);
  });
  socket.on("NewMemberADDInGroupBackEndSocket", (NewMemberInfo) => {
    socket.broadcast.emit("NewMemberADDInGroup", NewMemberInfo);
  });
  socket.on("MemberRemovedFromGroupBackEndSocket", (removedUser) => {
    console.log(removedUser);
    socket.broadcast.emit("MemberRemovedFromGroup", removedUser);
  });
  socket.on("ChatDeletedBackEndSocket", (removedUser) => {
    console.log(removedUser);
    socket.broadcast.emit("ChatDeleted", removedUser);
  });
  socket.off("initialize", () => {
    console.log("USER DISCONNECTED");
    socket.leave(UserData._id);
  });
});
