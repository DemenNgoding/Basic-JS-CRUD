const express = require("express");
const UserController = require("../controller/UserController");

const UserRoutes = express.Router();

// get all users
UserRoutes.get("/", UserController.getUser);

// get user by id
UserRoutes.get("/:id", UserController.getUserById);

// create user
UserRoutes.post("/", UserController.createUser);

// update user
UserRoutes.patch("/:id", UserController.updateUser);

// delete user
UserRoutes.delete("/:id", UserController.deleteUser);

module.exports = { UserRoutes };
