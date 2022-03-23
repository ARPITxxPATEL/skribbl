const activeRooms = new Map();

let io = null;

const setSocketServerInstance = (instance) => {
  io = instance;
};

const getSocketServerInstance = () => {
  return io;
};

const getRoom = (roomId) => {
  return activeRooms.get(roomId) || null;
};

const addNewRoom = (roomId, socketId, userData) => {
  activeRooms.set(roomId, [
    {
      ...userData,
      socketId,
    },
  ]);
};

const removeRoom = (roomId) => {
  if (activeRooms.has(roomId)) {
    activeRooms.delete(roomId);
  }
};

const addNewUser = (roomId, socketId, userData) => {
  if (activeRooms.has(roomId)) {
    const room = activeRooms.get(roomId);
    const newRoom = [
      ...room,
      {
        ...userData,
        socketId,
      },
    ];
    activeRooms.set(roomId, newRoom);
  }
};

const removeUser = (roomId, socketId) => {
  if (activeRooms.has(roomId)) {
    const room = activeRooms.get(roomId);
    const newRoom = room.filter((user) => user.socketId !== socketId);
    activeRooms.set(roomId, newRoom);
  }
};

module.exports = {
  setSocketServerInstance,
  getSocketServerInstance,
  addNewRoom,
  removeRoom,
  addNewUser,
  removeUser,
  getRoom,
};
