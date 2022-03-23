const { v4: uuidv4 } = require("uuid");
const mapService = require("../services/mapService");
const socketEvents = require("../enums/socketEvents");

const roomCreateHandler = (socket, data) => {
  const { name, roomName, avatar } = data;
  const socketId = socket.id;
  const roomId = uuidv4();

  mapService.addNewRoom(roomId, socketId, {
    name,
    roomName,
    avatar,
  });

  socket.emit(socketEvents.ROOM_CREATED, { roomId });
};

module.exports = roomCreateHandler;
