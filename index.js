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
    origin: "http://localhost:3000",
  },
});
io.on("connection", (socket) => {
  console.log("connected to the socket successful");
  socket.on("initialize", (UserData) => {
    socket.join(UserData._id);
    console.log(UserData._id);
    socket.emit("connected");
  });
  socket.on("join chat", (Room) => {
    console.log(`user joined to the ${Room}`);
  });
  socket.on("NewMessage", (NewMessageReceived) => {
    var Chat = NewMessageReceived;
    console.log(Chat);
    if (!Chat.ChatId.users)
      return console.log("chat.user is not defined", Chat.ChatId.users);
    Chat.ChatId.users.forEach((user) => {
      if (user._id == NewMessageReceived.sender._id) return;
      socket.in(user._id).emit("Message Received", NewMessageReceived);
    });
  });
});
