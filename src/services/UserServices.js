const { User } = require("../models/UserModels");

// get all user
const getUser = async () => {
  try {
    let users = await User.findAll();
    return users;
  } catch (error) {
    throw new Error("Error fetching users");
  }
};

// get user by id
const getUserbyId = async (id) => {
  try {
    let users = await User.findOne({
      where: {
        id: id,
      },
    });

    if (!users) {
      throw new Error("User Not Found");
    }

    return users;
  } catch (error) {
    throw new Error("Error fetching users by ID");
  }
};

// create user
const createUser = async (data) => {
  try {
    const user = await User.create(data);
    return user;
  } catch (error) {
    throw new Error("Error create user");
  }
};

const updateUser = async (id, data) => {
  try {
    const user = await User.update(data, {
      where: {
        id: id,
      },
    });

    return user;
  } catch (error) {
    throw new Error("Error updating user");
  }
};

// delete user
const deleteUser = async (id) => {
  try {
    const user = await User.destroy({
      where: {
        id: id,
      },
    });

    return user;
  } catch (error) {
    throw new Error("Error deleting user");
  }
};

module.exports = {
  getUser,
  getUserbyId,
  createUser,
  updateUser,
  deleteUser,
};
