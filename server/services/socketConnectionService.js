const API_PORT = process.env.PORT || process.env.API_PORT;

const init = (server) => {
  const io = require("socket.io")(server, {
    cors: {
      origin: API_PORT,
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("user connected: ", socket.id);

    socket.on("room-create", (data) => {
      roomCreateHandler(socket, data);
    });

    socket.on("room-join", (data) => {
      roomJoinHandler(socket, data);
    });
  });
};

module.exports = {
  init,
};
