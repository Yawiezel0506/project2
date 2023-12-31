import express from "express";

import users from '../users/usersController.js'

const route = express.Router();

route.post('/login', users.login)
route.post('/register', users.createUser)

export default route