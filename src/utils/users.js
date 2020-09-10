const users = [];

const addUser = ({ id, username, room }) => {
  if (!username || !room) {
    return { error: "Username and room are required" };
  }

  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const isUserExist = users.find(
    (user) => user.username === username && user.room === room
  );
  if (isUserExist) {
    return { error: "Username is already taken" };
  }
  const user = { id, username, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const getUserInRoom = (room) => {
  room = room.trim().toLowerCase();
  return users.filter((user) => user.room === room);
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUserInRoom,
};
