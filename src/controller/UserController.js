const UserServices = require("../services/UserServices");

// get all users
const getUser = async (req, res) => {
  try {
    const users = await UserServices.getUser();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get user by id
const getUserById = async (req, res) => {
  try {
    const users = await UserServices.getUserbyId(req.params.id);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create user
const createUser = async (req, res) => {
  try {
    await UserServices.createUser(req.body);
    res.status(201).json({ message: "User Created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update user
const updateUser = async (req, res) => {
  try {
    await UserServices.updateUser(req.params.id, req.body);
    res.status(201).json({ message: "User Updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete user
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await UserServices.deleteUser(req.params.id);
    res.status(200).json({
      message: "User deleted",
      user: deletedUser,
    });
  } catch (error) {
    console.log();
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
