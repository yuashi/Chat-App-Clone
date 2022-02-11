let users = [];

export const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();
  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  );
  if (existingUser) {
    return { error: "Username is already taken" };
  }
  const user = { id, name, room };
  users.push(user);
  return { user };
};

export const removeUser = (id) => {
  users = users.filter((user) => user.id !== id);
};

export const getUser = (id) => {
  const foundUser = users.find((user) => user.id === id);
  return foundUser;
};

export const getUsersInRoom = (room) => {
  users = users.filter((user) => user.room === room);
  return users;
};
