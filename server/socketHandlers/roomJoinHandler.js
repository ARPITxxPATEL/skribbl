const mapService = require("../services/mapService");
const socketEvents = require("../enums/socketEvents");

const roomJoinHandler = (socket, data) => {
  const { name, avatar, roomId } = data;
  const io = mapService.getSocketServerInstance();
  const socketId = socket.id;

  mapService.addNewUser(roomId, socketId, {
    name,
    avatar,
  });

  const room = mapService.getRoom(roomId);

  if (room) {
    room.forEach((user) => {
      io.to(user.socketId).emit(socketEvents.ROOM_JOINED, room);
    });
  } else {
    socket.emit(
      socketEvents.ROOM_NOT_FOUND,
      `Room with id ${roomId} not found`
    );
  }
};

module.exports = roomJoinHandler;
