import express from "express";

import users from '../controllers/usersController.js'

const route = express.Router();

route.post('/login', users.login)
route.post('/register', users.createUser)
route.get("/:admin/users/", users.getAllUsers)
route.get("/:admin/users/:id", users.getUser)
route.put("/:admin/users/:id", users.updateUser)
route.delete("/:admin/users/:id", users.deleteUser)

export default route;