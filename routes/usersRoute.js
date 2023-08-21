import express from "express";

import users from "../controllers/usersController.js";

const route = express.Router();

route.get("/", users.getAllUsers);
route.get("/:id", users.getUser);
route.put("/:id", users.updateUser);
route.delete("/:id", users.deleteUser);

export default route;
